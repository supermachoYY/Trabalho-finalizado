import mongoose from 'mongoose';

//const conexao = await mongoose.connect("mongodb://aluno:aluno@cluster0-shard-00-00.wsama.mongodb.net:27017,cluster0-shard-00-01.wsama.mongodb.net:27017,cluster0-shard-00-02.wsama.mongodb.net:27017/?replicaSet=atlas-mmn1oq-shard-0&ssl=true&authSource=admin&retryWrites=true&w=majority&appName=Cluster0")
const conexao = await mongoose.connect('mongodb://joaogarcia:escamboif@cluster0-shard-00-00.esobk.mongodb.net:27017,cluster0-shard-00-01.esobk.mongodb.net:27017,cluster0-shard-00-02.esobk.mongodb.net:27017/?ssl=true&replicaSet=atlas-fayofe-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0')

export default conexao
