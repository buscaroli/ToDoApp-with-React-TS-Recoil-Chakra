import { v4 as uuidv4 } from 'uuid'

export class Todo  {
  id: string;
  text: string;
  done: boolean;

  constructor(todoText: string, done: boolean = false) {
    this.text = todoText
    this.id = uuidv4().toString()
    this.done = done
  }
}
