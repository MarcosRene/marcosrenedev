---
title: Iniciando um projeto Reactjs com create-react-app
description: React é uma Biblioteca JavaScritp criada pelo Facebook, para
  criação de interfaces de usuário. É utilizado para criação de SPA, cujo termo
  se refere a Single-Page Applications.
date: 2021-01-05 09:27:17
thumbnail: assets/images/react.png
tag: react
---
## Iniciando o projeto

Para iniciar um projeto com reactjs é necessário ter o Node >= 8.10 e o gerenciador de pacotes NPM >= 5.6 instalado em sua máquina, então a partir daí é simples.
A forma que podemos iniciar o projeto é rodando o seguinte comando:

```bash
cd www/
npx create-react-app hello-world
```

após o comando ser executado, devemos esperar que as dependências sejam instaladas e toda estrutura seja criada.
Em seguida, assim que a instalação for finalizada damos um “cd” na pasta do nosso projeto

```bash
cd hello-world/
```

e então podemos executar o seguinte comando:

```bash
npm start
```

Caso utilize outro gerenciador de pacotes como o yarn, é simples, basta executar o comando yarn start.

```bash
yarn start
```

Pronto, o navegador será executado no [localhost](http://localhost:3000/) e seu projeto estará rodando de forma local.

![Localhost](/assets/images/localhost.png "Aplicação rodando na porta 3000")

## Conclusão

O create-react-app é uma abstração de tudo que deve ser criando para que o projeto possa rodar. O que quero dizer com abstração ? Falo em termos de configuração, caso eu queria iniciar um projeto do total zero, devo configurar toda minha estrutura (babel, webpack), com reacte-react-app toda configuração já vem feita e isso agiliza o processo de criação da aplicação.