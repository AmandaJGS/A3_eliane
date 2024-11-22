import './Forms_conteudo.css';
import { useState, useRef } from 'react';
import { v4 as uuidv4 } from 'uuid'; // Importa a biblioteca para gerar UUID

function Forms_Conteudo() {
  const [formData, setFormData] = useState({
    nome_prato: '',
    genero_prato: '', // Certifique-se de que este campo não esteja vazio
    nivel_dificuldade: '',
    tempo_preparo: '',
    quantidade_porcao: '',
    nome_ingredientes: '',
    mode_preparo: '',
  });
  

  const [file, setFile] = useState(null); // Estado separado para o arquivo

  // Usar ref para acessar diretamente o formulário
  const formRef = useRef(null);

  // Atualiza os campos de texto, select, textarea
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Envia os dados para a API
  const handleSubmit = async (e) => {
    e.preventDefault(); // Evita o recarregamento da página

    // Gera um UUID para o post_id
    const postId = uuidv4();

    // Cria o objeto de dados como JSON
      const data = {
      post_id: postId,
      nome_prato: formData.nome_prato,
      genero_prato: formData.genero_prato, // Certifique-se de que este valor seja válido
      mode_preparo: formData.mode_preparo,
      nivel_dificuldade: formData.nivel_dificuldade,
      nome_ingredientes: formData.nome_ingredientes,
      quantidade_porcao: formData.quantidade_porcao,
      tempo_preparo: formData.tempo_preparo,
    };
    
    

    try {
      const response = await fetch('https://api-a3-eliane.vercel.app/api/create/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
    
      if (!response.ok) {
        // Tenta parsear a resposta apenas se ela não estiver vazia
        const errorMessage = await response.text(); 
        console.error('Erro ao enviar a receita:', errorMessage);
        alert(`Erro: ${errorMessage}`);
        return;
      }
    
      const result = await response.json();
      console.log('Receita enviada com sucesso:', result);
      alert(`Receita cadastrada com sucesso! ID do Post: ${postId}`);
    
      // Reseta o formulário
      formRef.current.reset();
      setFormData({
        nome_prato: '',
        genero_prato: '',
        nivel_dificuldade: '',
        tempo_preparo: '',
        quantidade_porcao: '',
        nome_ingredientes: '',
        mode_preparo: '',
      });
      setFile(null);
    
    } catch (error) {
      console.error('Erro:', error);
      alert('Ocorreu um erro. Tente novamente.');
    }    
  };

  return (
    <div className="form-content">
      <form ref={formRef} className="recipe-form" onSubmit={handleSubmit}>
        <label htmlFor="tipo">Nome da Receita:</label>
        <input
          className="form_input"
          value={formData.nome_prato}
          onChange={handleChange}
          type="text"
          id="nome_prato"
          name="nome_prato"
          required
        />

        <label htmlFor="tipo">Tipo do prato:</label>
        <select
       className="form_input"
       id="tipo"
       name="genero_prato"
       onChange={handleChange}
       value={formData.genero_prato}
      >
      <option value="" disabled>
          Selecione o tipo de prato
      </option>
      <option value="Bolos">Bolo</option>
      <option value="Doces">Doces</option>
      <option value="Salgados">Salgados</option>
      <option value="Saladas">Saladas</option>
      <option value="Comidas">Pratos caseiros</option>
      </select>


        <label htmlFor="difficulty">Dificuldade:</label>
        <select
          className="form_input"
          id="difficulty"
          name="nivel_dificuldade"
          onChange={handleChange}
          value={formData.nivel_dificuldade}
        >
          <option value="">Selecione</option>
          <option value="Facil">Fácil</option>
          <option value="Medio">Médio</option>
          <option value="Dificil">Difícil</option>
        </select>

        <label htmlFor="prepTime">Tempo de Preparo:</label>
        <select
          className="form_input"
          id="prepTime"
          name="tempo_preparo"
          onChange={handleChange}
          value={formData.tempo_preparo}
        >
          <option value="">Selecione</option>
          <option value="2min">2 min</option>
          <option value="5min">5 min</option>
          <option value="10min">10 min</option>
          <option value="30min">30 min</option>
          <option value="1h">1 h</option>
          <option value="2h">2 h</option>
          <option value="3h">3 h</option>
          <option value="6h">6 h</option>
          <option value="12h">12 h</option>
          <option value="24h">24 h</option>
        </select>

        <label htmlFor="servings">Quantidade de Porções:</label>
        <input
          className="form_input"
          type="number"
          id="servings"
          name="quantidade_porcao"
          min="1"
          max="500"
          required
          onChange={handleChange}
          value={formData.quantidade_porcao}
        />

        <label htmlFor="ingredients">Ingredientes:</label>
        <textarea
          className="form_input"
          id="ingredients"
          name="nome_ingredientes"
          rows="4"
          required
          onChange={handleChange}
          value={formData.nome_ingredientes}
        ></textarea>

        <label htmlFor="instructions">Modo de Preparo:</label>
        <textarea
          className="form_input"
          id="instructions"
          name="mode_preparo"
          rows="4"
          required
          onChange={handleChange}
          value={formData.mode_preparo}
        ></textarea>

        <button className="submit-button" type="submit">
          Criar
        </button>
      </form>
    </div>
  );
}

export default Forms_Conteudo;
