import React, { useEffect, useState} from 'react'
import { FormControl, FormLabel, Input, Button, InputRightElement, InputGroup} from '@chakra-ui/react'
import { AddIcon } from '@chakra-ui/icons'
import { useRecoilState } from 'recoil'
import { todoListAtom } from '../state/todoListState'
import { Todo } from '../models/todo'

const TodoForm: React.FC = () => {
  const [text, setText] = useState('')

  const [todoList, setTodoList] = useRecoilState(todoListAtom)

  const handleTextChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const todoText: string = e.target.value

    setText(todoText)
  }

  const onFormSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const newTodo = new Todo(text)
    console.log('newTodo: ', newTodo)
    // @ts-ignore
    setTodoList((prevState) => [newTodo, ...prevState])
    
  }

  useEffect(() => {
    console.log(text)
    console.log(todoList)
  }, [text, todoList])

  return (
    <FormControl mb="2rem">
      <FormLabel fontSize="2rem" textAlign="center" color="blue.600">To Do</FormLabel>
      <InputGroup size="lg">
        <Input
        onChange={handleTextChange}
        placeholder="Walk the dog..."
        value={text} />
        <InputRightElement>
          <Button
            onClick={onFormSubmit}
            type="submit"
            backgroundColor={"blue.400"} 
            color={"white"} 
            my={4}
            textAlign="center"
            leftIcon={<AddIcon ml="7px" w={6} h={6}/>}
            >
              
          </Button>
        </InputRightElement>
      
      </InputGroup>
      
    </FormControl>
  )
}

export default TodoForm
