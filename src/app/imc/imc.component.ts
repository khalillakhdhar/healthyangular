import { Component } from '@angular/core';

@Component({
  selector: 'app-imc',
  templateUrl: './imc.component.html',
  styleUrl: './imc.component.css'
})
export class ImcComponent {
  poids: number=0;
  taille: number=0;
  imc: number=0;
  message: string="";
  constructor() { }
  calculeIMC(){
    this.imc = this.poids/(this.taille*this.taille);
    this.imc=Math.round(this.imc);
    if(this.imc<18.5){
      this.message="maigre";
    }else if(this.imc<25){
      this.message="normal";
    }else if(this.imc<30){
      this.message="en surpoids";
    }else{
      this.message="obése";
    }
    this.poids=0;
    this.taille=0;
  
  }

}
