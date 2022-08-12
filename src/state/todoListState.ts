import { atom } from "recoil"
import { Todo } from "../models/todo"


export const todoListAtom = atom({
  key: 'todoList',
  default: [
    new Todo('Walk the Dog')
  ]
})
