interface IJogo {
  Codigo: number,
  Nome: string,
  Descricao: string,
  Console: "Play Station 5" | "Switch" | "PC" | "X-Box Serie X" | "Outros"
  Genero: "Ação" |  "Aventura" | "Casual" | "Puzzle" | "Estratégia" | "Outros"
}

interface IResposta {
  success: boolean
  message: string
}

const listaJogos: Array<IJogo> = [
  {
    Codigo: 1,
    Console: 'PC',
    Descricao: 'deu ruim',
    Genero: 'Aventura',
    Nome: 'Fifa 22',
  },
  {
    Codigo: 2,
    Console: 'Switch',
    Descricao: 'deu ruim',
    Genero: 'Aventura',
    Nome: 'Mario Cart',
  },
  {
    Codigo: 3,
    Console: 'Play Station 5',
    Descricao: 'jogo do miranha Gonzales',
    Genero: 'Aventura',
    Nome: 'Fifa 22',
  },
  {
    Codigo: 4,
    Console: 'Outros',
    Descricao: 'deu ruim',
    Genero: 'Ação',
    Nome: 'Street Fighter',
  },
  {
    Codigo: 5,
    Console: 'Outros',
    Descricao: 'deu ruim',
    Genero: 'Estratégia',
    Nome: 'Jogo da cobrinha',
  },
  {
    Codigo: 6,
    Console: 'X-Box Serie X',
    Descricao: 'deu ruim',
    Genero: 'Estratégia',
    Nome: 'Minecraft',
  },
];

function cadastro(jogo: IJogo): IResposta  {

  let existe = listaJogos.some((IJogo) => IJogo.Codigo === jogo.Codigo)

  if(existe){
    return {
        success: false,
        message: 'Já existe um codigo cadastrado.',
    }
  } 

   listaJogos.push(jogo)

  return {
    success: true,
    message: 'Cadastrado com sucesso.',
  }

}


/* let resposta = cadastro({Codigo: 1, Console: "PC", Descricao: "deu ruim", Genero:"Aventura", Nome:"Fifa 22"})

if(resposta.success){

  console.log(listaJogos)
  console.log(resposta)

}else{
    console.log(resposta);
} */

function excluirJogo(jogo: Partial<IJogo>): IResposta {
    let ok = false
    listaJogos.forEach((item, index) => {
    if(item.Codigo === jogo.Codigo || item.Nome === jogo.Nome){
        listaJogos.splice(index, 1)
        ok = true
    } 
    
  });

  if(ok){
    return {
      success: true,
      message: "Jogo excluído com sucesso!"
    }
  }

  return {
    success: false,
    message: "Jogo não encontrado!"
  }  
}

/* let resposta = excluirJogo({ Nome: 'Fifa 23'});

if(resposta.success){

  console.log(listaJogos)
  console.log(resposta)

}else{
    console.log(resposta);
} */

function alterarJogo(codigoBuscado: number, jogo: Partial<IJogo>): IResposta{
    const { Codigo, Nome, Descricao, Console, Genero } = jogo

    let achou = listaJogos.find(item => item.Codigo === codigoBuscado)
    const index = listaJogos.findIndex((item) => item.Codigo === codigoBuscado);
    
    if(achou && index !== -1){
        achou.Codigo =  Codigo ?? achou.Codigo
        achou.Nome = Nome ?? achou.Nome
        achou.Descricao = Descricao ?? achou.Descricao
        achou.Console = Console ?? achou.Console
        achou.Genero = Genero ?? achou.Genero
      
      
        listaJogos[index] = achou;

        return {
            success: true,
            message: 'Jogo alterado',

        }

    } 
        return {
            success: false,
            message: 'Jogo não encontrado',
        }
}

const mensagem = alterarJogo( 1 ,{
  Descricao: 'agora vai',
  Genero: 'Casual',
});

console.log(mensagem.message)

console.log(listaJogos);
