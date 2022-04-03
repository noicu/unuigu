import { Event } from "./Event"

/*
*
*节点组件
*/
class Unode {
  // events
  constructor(parameters) {

  }

  onEvent(name: string) {
    console.log(name)
  }

  regEvent(fun: Event) {

  }
}

export { Unode }