import React from 'react'
import { ListItem } from '@chakra-ui/react'
import { Todo } from '../models/todo'
 

const TodoItem: React.FC<{todo: Todo}> = (props) =>  {
  return (
    <ListItem fontSize="xl" mb="2">{props.todo.text}</ListItem>
  )
}

export default TodoItem
