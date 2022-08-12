import React, { useEffect, useState} from 'react'
import { FormControl, FormLabel, Input, Button} from '@chakra-ui/react'
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
    <FormControl
      
    >
      <FormLabel>To Do</FormLabel>
      <Input
        onChange={handleTextChange}
        placeholder="Walk the dog..."
        value={text} />
      <Button
        onClick={onFormSubmit}
        type="submit"
        backgroundColor={"blue.400"} 
        color={"white"} 
        my={4}>
          Add
      </Button>
    </FormControl>
  )
}

export default TodoForm
