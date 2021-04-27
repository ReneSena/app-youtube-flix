<div align="center">
	<img src="banner.svg" height="250px" />
</div>

## :rocket: [Acessar site em produção](http://app-youtube-flix-renesena.vercel.app/)

## Sumário

-   [Objetivo](#objetivo)
-   [Pré Requisitos](#pre-requisitos)
-   [Tecnologias que estão sendo utilizadas no projeto](#tecnologias)
-   [Padrão de código](#padrao-de-codigo)
-   [IDE utilizada para a codificação](#ide)
-   [Plugins para instalar no Visual Studio Code (Vscode)](#plugins)
-   [Instalação do projeto](#instalacao)
-   [Rodando os Testes no projeto](#testes)
-   [Features já desenvolvidas](#features)
-   [Referências pra desenvolvimento](#referencias)

## <h2 id="objetivo">:dart: Objetivo</h2>

O aperte o play é uma site que disponibiliza vídeos baseados no youtube.

## <h2 id="pre-requisitos">:books: Pré Requisitos</h2>

-   [Node](https://nodejs.org/en/)
-   [Yarn](https://yarnpkg.com/)
-   [Git](https://git-scm.com/)
-   Editor de código

<hr />

## <h2 id="tecnologias">:hammer_and_wrench: Tecnologias que estão sendo utilizadas no projeto</h2>

-   [React](https://pt-br.reactjs.org/)
-   [Hooks](https://pt-br.reactjs.org/docs/hooks-intro.html)
-   [Function Components](https://pt-br.reactjs.org/docs/components-and-props.html)
-   [Axios](https://github.com/axios/axios)
-   [Styled Components](https://www.styled-components.com/docs/basics)
-   [Jest](https://jestjs.io/)

## <h2 id="padrao-de-codigo">:desktop_computer: Padrão de código</h2>

-   [Eslint](https://eslint.org/docs/user-guide/formatters/)
-   [Prettier](https://prettier.io/)
-   [EditorConfig](https://editorconfig.org/)
-   [Commitlint](https://commitlint.js.org/#/)

## <h2 id="ide">:headphones: IDE utilizada para a codificação</h2>

-   [Visual Studio Code](https://code.visualstudio.com/)

## <h2 id="plugins">:electric_plug: Plugins para instalar no Visual Studio Code (Vscode)</h2>

-   [EditorConfig for VS Code](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig) - Mantém a configuração do projeto igual em todas a ide's do vscode
-   [EsLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) - É responsável por verificar a sintaxe e análise de código, provendo sugestões de solução
-   [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) - É responsável por formatar o código de uma maneira padronizada de acordo com as configurações já definidas
-   [VSCode Styled Components](https://marketplace.visualstudio.com/items?itemName=jpoissonnier.vscode-styled-components) - É necessário para que o vscode reconheça a sintaxe do styled components

## <h2 id="instalacao">:wrench: Instalação do projeto</h2>

Abra seu terminal e faça o clone do projeto em um diretório da sua máquina, para isso rode:

```bash
git clone https://github.com/ReneSena/app-youtube-flix.git ou git@github.com:ReneSena/app-youtube-flix.git
```

Após o download do projeto ser finalizado, a pasta front-saas-backoffice estará disponível no diretório que foi realizado o download.

## :rocket: Como executar o projeto?

Existem duas formas de abrir o projeto, uma delas é abrindo o vscode indo na opção File -> Open Folder e escolher a pasta do projeto que deseja abrir. A outra opção é navegar através do terminal até pasta que deseja abrir e rodar o comando:

```
code .
```

Isso fará com que o vscode seja aberto na pasta selecionada.

#### :one: Instalando dependências do projeto

Depois de ter realizado o processo de clonagem, é necessário instalar as dependências do projeto, para isso em seu terminal na pasta do projeto rode:

```bash
yarn install
```

#### :two: Executando o projeto localmente

Depois que as dependências foram instaladas, é necessário observar que uma pasta _node_modules_ foi criada, é ela que gerenciará nossos pacotes que são instalados no projeto. Bom, agora com o ambiente preparado basta executarmos o comando:

```bash
yarn start
```

## <h2 id="testes">:eyes: Executando os testes

No projeto, existem testes relacionados a api do Youtube. Para executá los, basta abrir o terminal e rodar o comando:

```bash
yarn test
```

## <h2 id="ambientes">:earth_americas: Ambientes</h2>

-   Desenvolvimento: http://localhost:3000/
-   Produção: http://app-youtube-flix-renesena.vercel.app/

## <h2 id="features">:heavy_check_mark: Features já desenvolvidas</h2>

-   [x] Listagem de categorias baseadas em playlists pré-definidas
-   [x] Assistir videos selecionados
-   [x] Gerenciar videos selecionados como favorito
-   [x] Pesquisar outros tipos de videos além das categorias já prédefinidas

## <h2 id="referencias">:books: Referências</h2>

-   [Youtube Api](https://developers.google.com/youtube/v3/docs)
-   [React](https://pt-br.reactjs.org/)
-   [Dribbble](https://dribbble.com/)
