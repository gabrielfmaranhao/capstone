const produtos = [
    {
      id: 1,
      img: "../img/jaqueta.svg",
      nameItem: "Lightweight Jacket",
      description:
        "Adicione um pouco de energia ao seu guarda-roupa de inverno com esta jaqueta vibrante...",
      value: 100,
      addCart: "Adicionar ao carrinho",
      tag: "Camisetas",
    },
    {
      id: 2,
      img: "../img/gorro.svg",
      nameItem: "Black Hat",
      description:
        "O gorro Next.js chegou! Esta beldade bordada tem um ajuste confortável que garante que...",
      value: 100,
      addCart: "Adicionar ao carrinho",
      tag: "Acessórios",
    },
    {
      id: 3,
      img: "../img/mascara.svg",
      nameItem: "Mask",
      description:
        "Esta máscara facial durável é feita de duas camadas de tecido tratado e possui presilhas...",
      value: 40,
      addCart: "Adicionar ao carrinho",
      tag: "Acessórios",
    },
    {
      id: 4,
      img: "../img/camiseta_preta.svg",
      nameItem: "T-Shirt",
      description:
        "Esta t-shirt é imprescindível no seu guarda-roupa, combinando o caimento intemporal de...",
      value: 100,
      addCart: "Adicionar ao carrinho",
      tag: "Camisetas",
    },
    {
      id: 5,
      img: "../img/camiseta_branca.svg",
      nameItem: "Short-Sleeve T-Shirt",
      description:
        "Agora você encontrou a camiseta básica do seu guarda-roupa. É feito de um mais grosso...",
      value: 100,
      addCart: "Adicionar ao carrinho",
      tag: "Camisetas",
    },
    {
      id: 6,
      img: "../img/moletom.svg",
      nameItem: "Champion Packable Jacket",
      description:
        "Proteja-se dos elementos com esta jaqueta embalável Champion. Esta jaqueta de poliést...",
      value: 100,
      addCart: "Adicionar ao carrinho",
      tag: "Camisetas",
    },
  ];
function percorerListProdutos(arrayDeProdutos){
   arrayDeProdutos.forEach(produto => {
     criarLi(produto)
   });
 };
 percorerListProdutos(produtos) 
 function criarLi(produto){
   const liCard = document.createElement("li");
   liCard.classList.add("card");
   const ul     = document.getElementById("todasUl");
   ul.appendChild(liCard);
//-----------------------------------------------------
   const divImg = criarDivImg(produto);
   const divMainCard = criarDivMainCard(produto);
   liCard.append(divImg,divMainCard);
//-----------------------------------------------------
//-----------------------------------------------------
 };
 function criarDivImg(produto){
   const divImg = document.createElement("div");
   divImg.classList.add("imagemDoProduto");
   const imgCardGrande = document.createElement("img");
   imgCardGrande.classList.add("imagemDoProduto");
   imgCardGrande.src   =`${produto.img}`;
   imgCardGrande.alt   = `${produto.nameItem}`;
   divImg.appendChild(imgCardGrande);
   return divImg
 };
 function criarDivMainCard(produto){
   const divMain = document.createElement("div");
   const mainCard = criarMainCard(produto);
   divMain.appendChild(mainCard);
   return divMain
 };
 function criarMainCard(produto){
   const mainCard           = document.createElement("main");
   mainCard.classList.add("mainProduto");
   const divCategoria       = criarDivCategora(produto);
   const criarTitulos        = criartitulo(produto);
   const descricaoProdutos   = descricaoProduto(produto);
   const preco              = precoProduto(produto);
   const button             = buttonAdicionar(produto);
   mainCard.append(divCategoria,criarTitulos,descricaoProdutos,preco,button)
   return mainCard
 };
 function criarDivCategora(produto){
  const divCategoria = document.createElement("div");
  divCategoria.classList.add("categoriaDoCard");
  divCategoria.innerText =`${produto.tag}`;
  return divCategoria
 };
 function criartitulo(produto){
   const h3Card       = document.createElement("h3");
   h3Card.classList.add("nomeProduto");
   h3Card.innerText   = `${produto.nameItem}`;
   return h3Card
 };
 function descricaoProduto(produto){
   const p   =document.createElement("p");
   p.classList.add("descricaoProduto");
   p.innerText = `${produto.description}`;
   return p 
 };
 function precoProduto(produto){
   const preco = document.createElement("strong");
   preco.classList.add("precoProdutoCard");
   preco.innerText = `${produto.value}`;
   return preco
 };
 function buttonAdicionar(produto){
   const buttonAdicionar = document.createElement("button");
   buttonAdicionar.classList.add("botaoAdicionarCard");
   buttonAdicionar.innerText="Adicionar ao Carrinho";
   return buttonAdicionar
 };




 //.funcionalidades
function mostrarTodosProdutos(){
    const ul          = document.getElementById("todasUl");
    const buttonTodos = document.getElementById("buttonTodos");
    buttonTodos.addEventListener("click",function(e){
      ul.innerText    = "";
      percorerListProdutos(produtos);
  
    })
};
mostrarTodosProdutos();
//------------------------------------
function mostrarCamisetas(){
  const ul              = document.getElementById("todasUl");
  const buttonCamisetas = document.getElementById("camisetas");
  buttonCamisetas.addEventListener("click",function(){
    ul.innerText = "";
    percorerListProdutos(filtrarCamisetas(produtos));
  })
};
 mostrarCamisetas();
function filtrarCamisetas(arrayDeProdutos) {
   const camisasFiltradas = arrayDeProdutos.filter(function(produto){
       return produto.tag == "Camisetas";
   })
   return camisasFiltradas
};
 //.---------------------------------- 
function mostrarAcessorios(){
  const ul               = document.getElementById("todasUl");
  const buttonAcessorios = document.getElementById("buttonAcessorios");
  buttonAcessorios.addEventListener("click",function(e){
     ul.innerText = "";
     percorerListProdutos(filtrarAcessorios(produtos));
  });
};
mostrarAcessorios();
function filtrarAcessorios(arrayDeProdutos){
  const acessoriosFiltrados = arrayDeProdutos.filter(function(produto){
    return produto.tag == "Acessórios";
  })
  return acessoriosFiltrados
};
//.-----------------------------------

function adicionarProdutos(produto){
 const botaoAdicionar = buttonAdicionar(produto);
 console.log(botaoAdicionar)
 botaoAdicionar.addEventListener("click",function(e){
   console.log(e);
 })
};
adicionarProdutos();









    
       
























    
    