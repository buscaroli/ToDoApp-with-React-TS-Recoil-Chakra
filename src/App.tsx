import { Heading, Container } from '@chakra-ui/react';
import { useRecoilValue } from 'recoil'
import { todoListAtom } from './state/todoListState';
import './App.css';
import TodoForm from './components/TodoForm';
import Todos from './components/Todos';
import { Todo } from './models/todo'


// const myList: Todo[] = [
//   new Todo('Walk the Dog'),
//   new Todo('Learn Typescript'),
//   new Todo('Review Data Structures'),
//   new Todo('Go to bed early')
// ]



function App() {

  const todoList = useRecoilValue(todoListAtom)

  return (
    
    <Container className="App" >
      <Heading mb={4}>Typescript App!</Heading>
      <TodoForm />
      <Todos items={todoList}/>
    </Container>
    
  );
}

export default App;
