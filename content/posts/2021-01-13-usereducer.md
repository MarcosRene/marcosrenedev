---
title: "useReducer "
description: "Há alguns meses atrás o react vem passando por diversas melhorias
  em sua arquitetura, que impactou principalmente no seu gerenciamento de
  estado. "
date: 2021-01-13 01:37:36
thumbnail: assets/images/react.png
tag: react
---
## Por que utilizar hooks ?

Primeiro, é difícil reutilizar o estado entre os componentes da nossa aplicação. E segundo, de acordo com o caminhar no desenvolvimento de nossas aplicações, alguns componentes vão ficando muito complexos e começam a ficar de menos compreensivos. 

## Introdução

Hoje falaremos sobre o hook [useReducer](https://pt-br.reactjs.org/docs/hooks-reference.html#usereducer), para mais informações clique no link. Basicamente, seu funcionamento é da seguinte forma: O usuário da nossa aplicação realiza alguma ação, um determinado componente dispara essa ação, os redutores(reducers) são responsáveis por capturar o valor do estado atual. Esse estado passa por uma efeito colateral e é retornado ao nosso redutor, que por fim, retorna o estado atualizado para nosso componente. 

### Fluxo

Na figura abaixo o fluxo de funcionamento do useReducer.

