const express = require('express');
const app = express();

app.use(express.json())

const usuarios = [{
    login: 'ygor',
    senha: '1234'
}, {
    login: 'amanda',
    senha: '1236'
}]

app.post('/', (req, res) => {
    console.log(req.body)

    const usuarioExistente = usuarios.find(usuario => 
            usuario.login === req.body.login 
            && usuario.senha == req.body.senha
    );

    if (!usuarioExistente){
        return res.status(404).send({
            mensagem: "Usuário não encontrado"
        })
    }

    return res.status(200).send({
        mensagem: "Seja bem-vindo, " + usuarioExistente.login
    });
});

app.listen(3000, () => {
    console.log("A API foi iniciada");
})
