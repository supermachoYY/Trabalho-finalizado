import conexao from '../config/conexao.js'

const Usuario = conexao.Schema({
    nomeCompleto: {type:String, required:true},
    nomeUsuario: {type:String, required:true},
    dataNascimento: {type:Date, required:true},
    email: {type:String, required:true, unique:true},
    senha: {type:String, required:true},
    cpf: { type: String, required: true, unique: true }, 
    foto: 'String',
})

export default conexao.model('Usuario',Usuario)