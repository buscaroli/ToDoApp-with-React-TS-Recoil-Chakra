import { Todo } from "../models/todo"

export const persist = (action: string, key: string, payload?: Todo[]) => {
  switch(action) {
    case 'read':
      const data: string | null = localStorage.getItem(key)
      
      if (data) {
        return JSON.parse(data)
      } else {
        return []
      }
      
    case 'write':
      localStorage.setItem(key, JSON.stringify(payload))
      break
    
    case 'reset':
      localStorage.setItem(key, JSON.stringify([]))
      break
    default:
      throw new Error('Action not recognised while trying to access Local Storage')
  }
  
}
