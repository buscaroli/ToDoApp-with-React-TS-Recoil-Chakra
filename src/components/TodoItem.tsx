import React, { EventHandler } from 'react'
import { Checkbox, ListItem, Text, Flex } from '@chakra-ui/react'
import { Todo } from '../models/todo'
import { useRecoilState } from 'recoil'
import { todoListAtom } from '../state/todoListState'

const TodoItem: React.FC<{todo: Todo}> = (props) =>  {
  const [todos, setTodos] = useRecoilState(todoListAtom)


  const onCheckboxClick = () => {
    
    const updatedDoneState = {
      id: props.todo.id,
      text: props.todo.text,
      done: !props.todo.done
    }
    
    setTodos(prevState => prevState.map(x => {
      if (x.id === props.todo.id) {
        return updatedDoneState
      } else {
        return x
      }
    }))
    
  }

  return (
    <ListItem mb="2">
      <Flex justifyContent="center">
        <Text fontSize="xl" >
         {props.todo.text}
        </Text>
      <Checkbox
        onChange={onCheckboxClick}
        // isChecked={props.todo.done}
        ms="4" 
        colorScheme="teal"
        ></Checkbox>
      </Flex>
    </ListItem>
  )
}

export default TodoItem
