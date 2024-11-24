import express from "express";
import {listarPosts, postarNovoPost} from "../controllers/postController.js";
/* 
Criar: Post
Ler: Get
Alterar: Put
Deletar: Delete
*/
const routes = (app) =>{
    app.use(express.json());
    app.get("/posts",listarPosts);
    app.post("/posts",postarNovoPost);
}
export default routes;