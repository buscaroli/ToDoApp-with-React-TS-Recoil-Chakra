import { Todo } from "../models/todo"

export const persist = (action: string, key: string, payload: Todo[] | null) => {
  switch(action) {
    case 'read':
      const data = JSON.parse(localStorage.get(key)) ?? null
      if (data) {
        return data
      } else {
        return []
      }
    case 'write':
      localStorage.set(key, JSON.stringify(payload))
      break
    default:
      throw new Error('Action not recognised while trying to access Local Storage')
  }
  
}
