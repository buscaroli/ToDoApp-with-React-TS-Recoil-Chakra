import { atom } from "recoil"
import { Todo } from "../models/todo"
import { persist } from "../utils/persistence"

// read the todos from localStorage, if empty will return a []
const storedList = persist('read', 'todos')

export const todoListAtom = atom({
  key: 'todoList',
  default: storedList
})
