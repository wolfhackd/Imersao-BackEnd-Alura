import express from "express";

const posts = [
    {
      id: 1,
      descricao: "Uma Foto",
      imagem: "https://placecats.com/millie/300/150"
    },
    {
      id: 2,
      descricao: "Uma Foto de um Gatinho",
      imagem: "https://placecats.com/cute/300/200"
    },
    {
      id: 3,
      descricao: "Paisagem de Montanhas",
      imagem: "https://picsum.photos/seed/picsum/300/200"
    },
    {
      id: 4,
      descricao: "Comida Deliciosa",
      imagem: "https://source.unsplash.com/random/300x200/?food"
    },
    {
      id: 5,
      descricao: "Cachorro Brincando",
      imagem: "https://source.unsplash.com/random/300x200/?dog"
    }
];

const app = express();

app.use(express.json());


app.listen(3000,()=>{
    console.log("Tô aqui");
});


app.get("/posts",(req,res) => {
    res.status(200).json(posts);
});

function buscarPostPorID(id){
    return posts.findIndex((post) =>{
        return post.id === Number(id);
    })
};

app.get("/posts/:id",(req,res) => {
    const index = buscarPostPorID(req.params.id);
    res.status(200).json(posts[index]);
});