import { useView, customElement } from 'aurelia-framework'
import style from './style.pcss'

@useView('./view.html')
@customElement('welcome-banner')
export class WelcomeBanner{
  constructor(){
    this.style = style
  }
}