## Implementar um programa que tem como objetivo controlar a coleção de jogos de uma pessoa

## CRUD

-- Implemente um programa que controle todos os seus jogos de vídeo game.

-- O programa deverá executar as seguintes ações:

- Cadastrar um jogo; OK
- Excluir um jogo; OK
- Alterar um jogo; OK

- Listar todos os jogos; (traz todo mundo, não usar console.log())

- Listar jogos por nome;
- Listar todos os jogos por gênero;
- Listar todos os jogos por console;
(OBS: tem que estar tudo em uma função só chamada de filtragem, e os filtros devem ser cumulativos, se não mandar nada, mostra todo mundo)

## Um jogo deverá possuir as seguintes características

    # Código OK
    # Nome OK
    # Descrição OK
    # Console OK
    # Gênero OK

Deverá ser criado um tipo de dados (type) para representar os dados dos gêneros e dos consoles. OK
Dados para o tipo TipoGenero = {Ação, Aventura, Casual, Puzzle, Estratégia, Outros} <= só vai poder informnar uma dessas opções na hr do cadastro OK
Dados para o tipo TipoConsole = {Play Station 5, Switch, PC, X-Box Serie X, Outros} OK

Deverá ser criada a interface para os dados do Jogo;

# toda ação a ser realizada na listagem de jogos deve retornar uma estrutura com

- success - booleana (true ou false) OK
- message - string (Ex: jogo excluido com sucesso) OK
