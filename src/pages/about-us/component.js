import { useView, customElement } from 'aurelia-framework'
import style from './style.pcss'

@useView('./view.html')
@customElement('about-us-index')
export class AboutUsIndex{
  constructor(){
    this.style = style
  }
}