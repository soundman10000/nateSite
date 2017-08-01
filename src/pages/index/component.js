import { useView } from 'aurelia-framework'
import style from './style.pcss'

@useView('./view.html')
export class Index{
  constructor(){
    this.style = style
  }
}