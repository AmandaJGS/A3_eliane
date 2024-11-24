
const functions = require('firebase-functions');
admin = require('firebase-admin');
express = require('express');
cors = require('cors');
app = express();
app.use(cors({ origin: true }));

var serviceAccount = require("./ChaveAcesso.json");
admin.initializeApp({
credential: admin.credential.cert(serviceAccount),
databaseURL: "https://projetoa3-93f8b.firebaseio.com"
});
const db = admin.firestore();


    
// Criar Usuarios
app.post('/api/create/users', (req, res) => {
    (async () => {
    try {
    await db.collection('users').doc('/' + req.body.user_id + '/')
    .create({   user_bio: req.body.user_bio,
                user_date:req.body.user_date,
                user_email:req.body.user_email,
                user_fav:req.body.user_fav,
                user_genero:req.body.user_genero,
                user_img:req.body.user_img,
                user_loc:req.body.user_loc,
                user_nome:req.body.user_nome,
                user_senha:req.body.user_senha,
            });
    return res.status(200).send();
    } catch (error) {
    console.log(error);
    return res.status(500).send(error);
    }
    })();
    });

    // Ler usuario especifico
    app.get('/api/readitem/users/:user_id', (req, res) => {
    (async () => {
    try {
    const document = db.collection('users').doc(req.params.user_id);
    let item = await document.get();
    let response = item.data();
    return res.status(200).send(response);
    } catch (error) {
    console.log(error);
    return res.status(500).send(error);
    }
    })();
    });

    // Ler todos os usuarios
    app.get('/api/readall/users', (req, res) => {
    (async () => {
    try {
    let query = db.collection('users');
    let response = [];
    await query.get().then(querySnapshot => {
    let docs = querySnapshot.docs;
    for (let doc of docs) {
    const selectedItem = {
    user_id: doc.user_id,
    user_bio: doc.data().user_bio,
    user_date:doc.data().user_date,
    user_email:doc.data().user_email,
    user_fav:doc.data().user_fav,
    user_genero:doc.data().user_genero,
    user_img:doc.data().user_img,
    user_loc:doc.data().user_loc,
    user_nome:doc.data().user_nome,
    user_senha:doc.data().user_senha
    };
    response.push(selectedItem);
    }
    });
    return res.status(200).send(response);
    } catch (error) {
    console.log(error);
    return res.status(500).send(error);
    }
    })();
    });

    // update
app.put('/api/update/users/:user_id', (req, res) => {
    (async () => {
    try {
    const document = db.collection('users').doc(req.params.user_id);
    await document.update({
        user_bio: req.body.user_bio,
        user_date:req.body.user_date,
        user_email:req.body.user_email,
        user_fav:req.body.user_fav,
        user_genero:req.body.user_genero,
        user_img:req.body.user_img,
        user_loc:req.body.user_loc,
        user_nome:req.body.user_nome,
        user_senha:req.body.user_senha
    });
    return res.status(200).send();
    } catch (error) {
    console.log(error);
    return res.status(500).send(error);
    }
    })();
    });

    // delete usuarios
app.delete('/api/delete/users/:user_id', (req, res) => {
    (async () => {
    try {
    const document = db.collection('users').doc(req.params.user_id);
    await document.delete();
    return res.status(200).send();
    } catch (error) {
    console.log(error);
    return res.status(500).send(error);
    }
    })();
    });

    // Criar Posts
app.post('/api/create/posts', (req, res) => {
    (async () => {
    try {
    await db.collection('posts').doc('/' + req.body.post_id + '/')
    .create({   
// preenchidos pelo usuário
        nome_prato:req.body.nome_prato,
        genero_prato: req.body.genero_prato,
        img_prato:req.body.img_prato,
        mode_preparo:req.body.mode_preparo,
        nivel_dificuldade:req.body.nivel_dificuldade,
        nome_ingredientes:req.body.nome_ingredientes,
        quantidade_porcao:req.body.quantidade_porcao,
        tempo_preparo:req.body.tempo_preparo,
// preenchidos automaticamente
        post_date:req.body.post_date,
        post_likes:req.body.post_likes,
        user_id:req.body.user_id
            });
    return res.status(200).send();
    } catch (error) {
    console.log(error);
    return res.status(500).send(error);
    }
    })();
    });

    // Ler post especifico
    app.get('/api/readitem/posts/:post_id', (req, res) => {
    (async () => {
    try {
    const document = db.collection('posts').doc(req.params.post_id);
    let item = await document.get();
    let response = item.data();
    return res.status(200).send(response);
    } catch (error) {
    console.log(error);
    return res.status(500).send(error);
    }
    })();
    });

    // Ler todos os posts
    app.get('/api/readall/posts', (req, res) => {
    (async () => {
    try {
    let query = db.collection('posts');
    let response = [];
    await query.get().then(querySnapshot => {
    let docs = querySnapshot.docs;
    for (let doc of docs) {
    const selectedItem = {
    post_id: doc.post_id,
    genero_prato: doc.data().genero_prato,
    img_prato:doc.data().img_prato,
    mode_preparo:doc.data().mode_preparo,
    nivel_dificuldade:doc.data().nivel_dificuldade,
    nome_ingredientes:doc.data().nome_ingredientes,
    nome_prato:doc.data().nome_prato,
    post_comments:doc.data().post_comments,
    post_date:doc.data().post_date,
    post_likes:doc.data().post_likes,
    quantidade_porcao:doc.data().quantidade_porcao,
    tempo_preparo:doc.data().tempo_preparo,
    user_id:doc.data().user_id
    };
    response.push(selectedItem);
    }
    });
    return res.status(200).send(response);
    } catch (error) {
    console.log(error);
    return res.status(500).send(error);
    }
    })();
    });

    // update post
app.put('/api/update/posts/:post_id', (req, res) => {
    (async () => {
    try {
    const document = db.collection('posts').doc(req.params.post_id);
    await document.update({
        // preenchidos pelo usuário
        nome_prato:req.body.nome_prato,
        genero_prato: req.body.genero_prato,
        img_prato:req.body.img_prato,
        mode_preparo:req.body.mode_preparo,
        nivel_dificuldade:req.body.nivel_dificuldade,
        nome_ingredientes:req.body.nome_ingredientes,
        quantidade_porcao:req.body.quantidade_porcao,
        tempo_preparo:req.body.tempo_preparo
    });
    return res.status(200).send();
    } catch (error) {
    console.log(error);
    return res.status(500).send(error);
    }
    })();
    });

    // delete post
app.delete('/api/delete/posts/:post_id', (req, res) => {
    (async () => {
    try {
    const document = db.collection('posts').doc(req.params.post_id);
    await document.delete();
    return res.status(200).send();
    } catch (error) {
    console.log(error);
    return res.status(500).send(error);
    }
    })();
    });


    exports.app = functions.https.onRequest(app);