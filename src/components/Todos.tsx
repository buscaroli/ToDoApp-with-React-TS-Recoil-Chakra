import React from 'react'
import { ListItem, List } from '@chakra-ui/react'
import { Todo } from '../models/todo'
import { isTemplateSpan } from 'typescript'

const Todos: React.FC<{items: Todo[]}> = (props) => {
  return (
    <List>
      {props.items.map( item => 
        <ListItem key={item.id} fontSize='xl'>
          {item.text}
        </ListItem>)}
    </List>
  )
}

export default Todos
