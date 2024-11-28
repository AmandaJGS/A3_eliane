const express = require('express');
const { Sequelize, DataTypes } = require('sequelize');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const app = express();
app.use(express.json());

// Defina a chave JWT e as configurações do MySQL diretamente no código
const JWT_SECRET = 'token_de_teste_123';
const DB_NAME = 'seu_nome_do_banco';
const DB_USER = 'seu_usuario';
const DB_PASS = 'sua_senha';
const DB_HOST = 'localhost';

// Configurar conexão com o banco de dados MySQL
const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASS, {
    host: DB_HOST,
    dialect: 'mysql',
});

// Definir o modelo de Usuário
const User = sequelize.define('User', {
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

// Sincronizar o modelo com o banco de dados
sequelize.sync()
    .then(() => console.log("Banco de dados sincronizado"))
    .catch((error) => console.error("Erro ao sincronizar banco:", error));

// Rota para Registrar Novo Usuário
app.post('/register', async (req, res) => {
    try {
        const { username, password } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await User.create({ username, password: hashedPassword });
        res.status(201).send("Usuário registrado com sucesso!");
    } catch (error) {
        res.status(400).send("Erro ao registrar usuário");
    }
});

// Rota para Login
app.post('/login', async (req, res) => {
    const { username, password } = req.body;
    const user = await User.findOne({ where: { username } });

    if (!user || !(await bcrypt.compare(password, user.password))) {
        return res.status(401).send("Credenciais inválidas");
    }

    const token = jwt.sign({ userId: user.id }, JWT_SECRET, { expiresIn: '1h' });
    res.json({ token });
});

// Middleware para Verificar Token
const authenticate = (req, res, next) => {
    const token = req.header('Authorization')?.replace('Bearer ', '');

    if (!token) {
        return res.status(401).send("Acesso negado");
    }

    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        req.userId = decoded.userId;
        next();
    } catch (error) {
        res.status(400).send("Token inválido");
    }
};

// Rota Protegida (Exemplo)
app.get('/protected', authenticate, (req, res) => {
    res.send("Você acessou uma rota protegida!");
});

// Iniciar Servidor
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
