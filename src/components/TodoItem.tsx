import React, { EventHandler } from 'react'
import { Checkbox, ListItem, Text, Flex, Button} from '@chakra-ui/react'
import { CloseIcon } from '@chakra-ui/icons'
import { Todo } from '../models/todo'
import { useRecoilState } from 'recoil'
import { todoListAtom } from '../state/todoListState'

const TodoItem: React.FC<{todo: Todo}> = (props) =>  {
  const [todos, setTodos] = useRecoilState(todoListAtom)


  const onCheckboxClick: () => void = () => {
    
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
    })
    )
  }

  const onDelBtnClick: () => void = () => {
    setTodos(prevState => prevState.filter(x => x.id !== props.todo.id))
  }

  return (
    <ListItem mb="4">
      <Flex justifyContent="space-between">
        <Flex justifyContent="space-between">
          <Checkbox
            onChange={onCheckboxClick}
            // isChecked={props.todo.done} 
            colorScheme="teal"
          >  
          </Checkbox>

          <Text fontSize="xl" mx="2rem">
           {props.todo.text}
          </Text>
        </Flex>

        <Button
        onClick={onDelBtnClick}
          w="12"
          colorScheme="red"
          leftIcon={<CloseIcon ml="7px" w={5} h={5}/>}
        >
        </Button>
      </Flex>
    </ListItem>
  )
}

export default TodoItem
