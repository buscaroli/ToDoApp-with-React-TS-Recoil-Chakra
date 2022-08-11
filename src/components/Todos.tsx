import React from 'react'
import { List } from '@chakra-ui/react'
import { Todo } from '../models/todo'
import TodoItem from './TodoItem'


const Todos: React.FC<{items: Todo[]}> = (props) => {

  const todoList = props.items.map(item => 
    <TodoItem key={item.id} todo={item} />)
      
  return (
    <List>
      {todoList}
    </List>
  )
}

export default Todos
