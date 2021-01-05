---
title: Iniciando um projeto Reactjs com create-react-app
description: React é uma Biblioteca JavaScritp criada pelo Facebook, para
  criação de interfaces de usuário. É utilizado para criação de SPA, cujo termo
  se refere a Single-Page Applications, onde o frontend é responsável por
  controlar rotas, consumir os dados e exibi-las ao usuário, ou seja, é
  totalmente desacoplado do backend.
date: 2021-01-05 08:04:05
thumbnail: assets/images/desert.jpg
tag: react
---
## Iniciando o projeto

Para iniciar um projeto com reactjs é necessário ter o Node >= 8.10 e o gerenciador de pacotes NPM >= 5.6 instalado em sua máquina, então a partir daí é simples.

A forma que podemos iniciar o projeto é rodando o seguinte comando:

![Image for post](https://miro.medium.com/max/30/1*msWYboCUSuv963T5FVUNVw.png?q=20)

![Image for post](https://miro.medium.com/max/455/1*msWYboCUSuv963T5FVUNVw.png)

após o comando ser executado, devemos esperar que as dependências sejam instaladas e toda estrutura seja criada.

Em seguida, assim que a instalação for finalizada damos um “cd” na pasta do nosso projeto

![Image for post](https://miro.medium.com/max/447/1*l7g829m-EOB5rauUcQZxTA.png)

figura 2

e então podemos executar o seguinte comando:

![Image for post](https://miro.medium.com/max/343/1*BUAVta6QtLHowkCR3DWj3g.png)

figura 3

Caso utilize outro gerenciador de pacotes como o yarn, é simples, basta executar o comando yarn start.

![Image for post](https://miro.medium.com/max/326/1*tjvOUtcXo0LFG-xiDXLsNw.png)

figura 4

Pronto, o navegador será executado no <http://localhost:3000/> e seu projeto estará rodando de forma local.

![Image for post](https://miro.medium.com/max/1366/1*XWdRJmNzQmQsOWkiIINqOg.png)

figura 5

## Conclusão

O create-react-app é uma abstração de tudo que deve ser criando para que o projeto possa rodar. O que quero dizer com abstração ? Falo em termos de configuração, caso eu queria iniciar um projeto do total zero, devo configurar toda minha estrutura (babel, webpack), com reacte-react-app toda configuração já vem feita e isso agiliza o processo de criação da aplicação.