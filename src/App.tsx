import { Heading, Container } from '@chakra-ui/react';
import React from 'react';
import './App.css';
import Todos from './components/Todos';
import { Todo } from './models/todo'

const myList: Todo[] = [
  new Todo('Walk the Dog'),
  new Todo('Learn Typescript'),
  new Todo('Review Data Structures'),
  new Todo('Go to bed early')
]

function App() {

  return (
    <Container className="App" >
      <Heading mb={4}>Typescript App!</Heading>
      <Todos items={myList}/>
    </Container>
  );
}

export default App;
