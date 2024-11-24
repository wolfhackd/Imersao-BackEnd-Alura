import conectarAoBanco from "../config/dbConfig.js";


export async function getTodosPosts(){
    const conexao = await conectarAoBanco(process.env.CONEXAO);
    const db = conexao.db("imersao-dev");
    const colecao = db.collection("posts");
    return colecao.find().toArray();
}