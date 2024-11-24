import conectarAoBanco from "../config/dbConfig.js";
const conexao = await conectarAoBanco(process.env.CONEXAO);


export async function getTodosPosts(){
    const db = conexao.db("imersao-dev");
    const colecao = db.collection("posts");
    return colecao.find().toArray();
}

export async function criarPost(novoPost){
    const db = conexao.db("imersao-dev");
    const colecao = db.collection("posts");
    return colecao.insertOne(novoPost);
}