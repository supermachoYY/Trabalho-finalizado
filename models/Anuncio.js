import conexao from '../config/conexao.js'

const Anuncio = conexao.Schema({
    nome: {type:String, required:true},   
    categoria: {type:String, required:true},
    preco: {type:Number, required:true},
    condicao: {type:String, required:true},
    descricao: {type:String, required:true}
    
    
})

export default conexao.model('Anuncio',Anuncio)


