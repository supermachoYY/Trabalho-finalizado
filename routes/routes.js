import express from 'express';
const router = express.Router();

import multer from 'multer';
const upload = multer({dest: 'public/'})


import { 

            abrecadastroUsuario,
            cadastroUsuario,
            abreloginUsuario,
            abreEditar,
            abrePrincipal,
            abreRecuperarSenha,
            posRecSenha,
            abreCadastrarAnuncio,
            cadastrarAnuncio,
            abreMeusAnuncios,
            abreUsuario,
            delAnuncio,
            delUsuario
        } from '../controllers/controllers.js';

        abreUsuario
router.get('/login',abreloginUsuario)


router.get('/cadastro', abrecadastroUsuario)
router.post('/cadastro',cadastroUsuario)


router.get("/principal",abrePrincipal)

router.get("/cadastrarAnuncio",abreCadastrarAnuncio)
router.post("/cadastrarAnuncio",upload.single('foto'),cadastrarAnuncio)

router.get("/recSenha",abreRecuperarSenha)

router.get("/posRec",posRecSenha)


router.get("/meusAnuncios", abreMeusAnuncios)

router.get("/delAnuncio/:id",delAnuncio)

router.get("/usuario",abreUsuario)

router.get("/editar",abreEditar)

router.get("/delUsuario/:id",delUsuario)

export default router