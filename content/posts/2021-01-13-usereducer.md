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

Primeiro, é difícil reutilizar o estado entre os componentes da nossa aplicação. E segundo, de acordo com o caminhar no desenvolvimento de nossas aplicações, alguns componentes vão ficando muito complexos e começam a ficar de menos compreensivos. Além de não possuir quebra de compatibilidade os hooks possuem uma API mais direta sobre conceitos do react(props, state, refs), uso de classe é inexistente com a chegada dos [hooks](https://pt-br.reactjs.org/docs/hooks-intro.html#motivation).

## Introdução

Hoje falaremos sobre o hook [useReducer](https://pt-br.reactjs.org/docs/hooks-reference.html#usereducer), para mais informações clique no link. Basicamente, seu funcionamento é da seguinte forma: O usuário da nossa aplicação realiza alguma ação, um determinado componente dispara essa ação, os redutores(reducers) são responsáveis por capturar o valor do estado atual. Esse estado passa por uma efeito colateral e é retornado ao nosso redutor, que por fim, retorna o estado atualizado para nosso componente. 

### Fluxo

Na figura abaixo o fluxo de funcionamento do useReducer.

![Fluxo](/assets/images/fluxo.png "Fluxo de funcionamento do hook useReducer")

## Exemplo

Agora que já conseguimos entender o fluxo, vamos prática. Iniciamos o hook passando um estado inicial e uma função que é responsável por receber nossas ações.

```jsx
import React, { useState, useReducer } from 'react';

const initialState = {
  todos: [
    {
      title: 'Marcos',
    },
  ],
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (<div/>);
}

export default App();
```

Perceba, que existe uma variável state que guardará nossa estado inicial e uma função dispatch que é responsável por disparar nossas ações e pegar as informações atualizadas do nosso estado.

```jsx
import React, { useState, useReducer } from 'react';

const initialState = {
  todos: [
    {
      title: 'Marcos',
    },
  ],
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'add': {
      return {
        ...state,
        todos: [...state.todos, { title: action.title }],
      };
    }
    default:
      return state;
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (<div/>);
}

export default App();
```

Acabamos de adicionar nossas actions e observe que o primeiro parametro no useReducer é a função reducer.

```jsx
import React, { useState, useReducer } from 'react';

const initialState = {
  todos: [
    {
      title: 'Marcos',
    },
  ],
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'add': {
      return {
        ...state,
        todos: [...state.todos, { title: action.title }],
      };
    }
    default:
      return state;
  }
};

function App() {
  const [title, setTitle] = useState('');
  const [state, dispatch] = useReducer(reducer, initialState);

  const addTodo = () => {
    dispatch({ type: 'add', title: title });
    setTitle('');
  };

  return (
    <div
      style={{
        displey: 'flex',
        flexDirection: 'column',
      }}
    >
      <input
        value={title}
        type="text"
        onChange={(e) => setTitle(e.target.value)}
      />
      <button onClick={addTodo}>AddTodo</button>

      {state.todos.map(({ title }) => (
        <ul key={title}>
          <li>{title}</li>
        </ul>
      ))}
    </div>
  );
}

export default App;
```

Finalizado, assim fica nosso arquivo App.js. Veja que no nosso button temos um propriedade onClick, onde passamos uma função que irá disparar nossa action do tipo add e adicionar um novo valor ao array de objetos.

## Conclusão

O useReducer surgiu como uma opção para gerenciamento de estado das aplicações react. Quando comparado ao Redux, se torna bem menos trabalhoso e mais simples de implementar, mas isso não quer dizer que o Redux não seja uma boa opção. Claro, que ambos possuem pós e contras e isso pode ser notado ao longo das aplicações que você for desenvolvendo, qual a sua real necessidade.