
import Usuario from '../models/Usuario.js';

export async function abreUsuario(req, res) {
    const usuarios = await Usuario.find({});
    res.render('usuario.ejs', { usuarios }); 
}

export function abrecadastroUsuario(req,res){
    res.render('cadastro.ejs')
}

export async function cadastroUsuario(req,res){
    let usuario = new Usuario({
        nomeCompleto: req.body.nome,
        nomeUsuario: req.body.nomeUsuario,
        dataNascimento: req.body.nascimento,
        email: req.body.email,
        senha: req.body.senha,
        cpf: req.body.cpf, 
        foto: 'String'
    })
    console.log(usuario)
   await usuario.save();
    res.redirect('/principal')
}



export function abreIndex(req,res){
    res.render('index.ejs')
}
export function abreloginUsuario(req,res){
    res.render('login.ejs')
}



export async function abrePrincipal(req,res){
    res.render('principal.ejs')

}

export async function abreRecuperarSenha(req,res){
    res.render('recSenha.ejs')
}
export async function posRecSenha(req,res){
    res.render('/posRec.ejs')
}
export async function abreCadastrarAnuncio(req,res){
    res.render('cadastrarAnuncio.ejs')
}

import Anuncio from '../models/Anuncio.js';
export function cadastrarAnuncio(req,res){
    let anuncio = new Anuncio({
        nome: req.body.nome,
        categoria: req.body.categoria,
        preco: req.body.preco,
        condicao: req.body.condicao,
        descricao:req.body.descricao,
        contato:req.body.contato,
        foto:req.file.filename
    })
    anuncio.save();
    res.redirect('/meusAnuncios')
}

export async function abreMeusAnuncios(req,res){
    const anuncio = await Anuncio.find({})
    res.render('meusAnuncios.ejs',{Anuncio:anuncio})
}

export async function delAnuncio(req,res){
    await Anuncio.findByIdAndDelete(req.params.id)
    res.redirect('/meusAnuncios')
}

export async function delUsuario(req,res){
    await Usuario.findByIdAndDelete(req.params.id)
    res.redirect('/usuario')
}

export async function abreEditar(req,res){
    res.render('editar.ejs')
}


