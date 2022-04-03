import { Style } from "../style/Style"
import { Unode } from "./Unode"

class Container {
  style!: Style
  // scroll
  node: Array<Unode> = []
  constructor() {

  }
}

export { Container }