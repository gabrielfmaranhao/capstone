const produtos = [
{
    nome     :"camiseta1",
    categoria:"camiseta",
    preco    : 9.99,
    img      :"./imagens/camisetaLonga.png",
    descricao:"descrição do produto"
},
{
    nome     :"camiseta1",
    categoria:"camiseta",
    preco    :10,
    img      :"./imagens/camisetaLonga.png",
    descricao:"descrição do produto"
},
{
    nome     :"camiseta1",
    categoria:"camiseta",
    preco    : 9.99,
    img      :"./imagens/camisetaLonga.png",
    descricao:"descrição do produto"
},
{
    nome     :"camiseta1",
    categoria:"camiseta",
    preco    :10,
    img      :"./imagens/camisetaLonga.png",
    descricao:"descrição do produto"
}
// {
//     nome     :"camiseta1",
//     categoria:"camiseta",
//     preco    :10,
//     img      :"link",
//     descricao:"descrição do produto"
// },
// {
//     nome     :"camiseta1",
//     categoria:"camiseta",
//     preco    :10,
//     img      :"link",
//     descricao:"descrição do produto"
// },
// {
//     nome     :"camiseta1",
//     categoria:"camiseta",
//     preco    :10,
//     img      :"link",
//     descricao:"descrição do produto"
// },
// {
//     nome     :"camiseta1",
//     categoria:"camiseta",
//     preco    :10,
//     img      :"link",
//     descricao:"descrição do produto"
// },
]

const body    = document.body
const main    = document.querySelector("main");
const sectionCamisetas  = document.getElementById("camisetas");
const sectionCalcados   = document.getElementById("calcados");
const sectionAcessorios = document.getElementById("acessorios");
const section = document.getElementsByTagName("section");

function criarUl(sessao){
     for(let i = 0;i<sessao.length;i++){
         const ul  =document.createElement("ul");
         ul.id     =`ul${i}`;
         section[i].appendChild(ul);
        }
}
criarUl(section);

const ul0 = document.getElementById("ul0");
const ul1 = document.getElementById("ul1");
const ul2 = document.getElementById("ul2");

function criarCard(produtos){
    for(let i = 0;i<produtos.length;i++){
        if(produtos[i].categoria == "camiseta"){
            const produtoLi        = document.createElement("li");
            produtoLi.className    ="card"
            const produtoimg       = document.createElement("img");
            produtoimg.src         =`${produtos[i].img}`;
            produtoimg.alt         =`${produtos[i].nome}`;
            produtoimg.className   ="imagemDoProduto";
            const mainProduto      = document.createElement("main");
            mainProduto.className  ="mainProduto";
            const produtoh3        = document.createElement("h3");
            produtoh3.className    ="nomeProduto";
            produtoh3.innerText    =`${produtos[i].nome}`;
            const produtoDescricao = document.createElement("p");
            produtoDescricao.classname = "descricaoProduto";
            produtoDescricao.innerText =`${produtos[i].descricao}`;
            const precoProduto     = document.createElement("strong");
            precoProduto.className     ="precoProdutoCard";
            precoProduto.innerText     =`${produtos[i].preco}`;
            const botaoAdicionar   = document.createElement("button");
            botaoAdicionar.className   ="botaoAdicionarCard";
            botaoAdicionar.innerText   ="Adicionar ao Carrinho";
            produtoLi.appendChild(produtoimg);
            produtoLi.appendChild(mainProduto);
            mainProduto.appendChild(produtoh3);
            mainProduto.appendChild(produtoDescricao);
            mainProduto.appendChild(precoProduto);
            mainProduto.appendChild(botaoAdicionar);
            ul0.appendChild(produtoLi);
        }
    }

}
criarCard(produtos)
//criar uma figure que ficara dentro da li e a imagem dentro dela 