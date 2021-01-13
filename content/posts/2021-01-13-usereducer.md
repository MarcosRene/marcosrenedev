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

Primeiro, é difícil reutilizar o estado entre os componentes da nossa aplicação. E segundo, de acordo com o caminhar no desenvolvimento de nossas aplicações, alguns componentes vão ficando muito complexos e começam a ficar de menos compreensivos. Além de não possuir quebra de compatibilidade os hooks possuem uma API mais direta sobre conceitos do react(props, state, refs). [Hooks](https://pt-br.reactjs.org/docs/hooks-intro.html#motivation) para saber mais.

## Introdução 

Hoje falaremos sobre o hook [useReducer](https://pt-br.reactjs.org/docs/hooks-reference.html#usereducer), para mais informações clique no link. Basicamente, seu funcionamento é da seguinte forma: O usuário da nossa aplicação realiza alguma ação, um determinado componente dispara essa ação, os redutores(reducers) são responsáveis por capturar o valor do estado atual. Esse estado passa por uma efeito colateral e é retornado ao nosso redutor, que por fim, retorna o estado atualizado para nosso componente. 

### Fluxo

Na figura abaixo o fluxo de funcionamento do useReducer.

![Fluxo](/assets/images/fluxo.png "Fluxo de funcionamento do hook useReducer")

## Exemplo

Agora que já conseguimos entender o fluxo, vamos coloca-lo na prática. Vamos iniciar nosso hook, passando um estado inicial e uma função que é responsável por receber nossas ações.

```jsx
const initialState = {
  counter: 2,
  todos: [{
    id: 1,
    text: "One",
  }, {
    id: 2,
    text: "Two",
  }],
};

const [state, dispatch] = useReducer(reducer, initialState)
```

Perceba, que existe uma variável state que guardará nossa estado inicial e uma função dispatch que é responsável por disparar nossas ações e atualizar as informações do nosso estado.

```jsx
const initialState = {
  counter: 2,
  todos: [{
    id: 1,
    text: "One",
  }, {
    id: 2,
    text: "Two",
  }],
};

function reducer = (state, action) => {
  switch (action.type) {
    case "add":
      {
        const newCounter = state.counter + 1;
        const newTodo = {
          id: newCounter,
          text: action.text,
        };
        return {
          counter: newCounter,
          todos: [...state.todos, newTodo],
        };
      }
  }
}

const [state, dispatch] = useReducer(reducer, initialState)
```

Acabamos de adicionar nossas actions e observe que o primeiro parametro no useReducer é a função reducer.
