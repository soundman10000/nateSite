import { useView, customElement } from 'aurelia-framework'
import style from './style.pcss'

@useView('./view.html')
@customElement('about-us')
export class AboutUs{
  constructor(){
    this.style = style
    this.aboutUs = 'Jason'
  }
}