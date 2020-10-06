import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  pseudo : string = '';
  difficulte : string ='';
  error : string = '';
  isVisible : boolean = false;
  isVisibleQuestion : boolean = true;
  isVisibleNextQuestion : boolean = true;

  constructor() {}

  public verifierInfos(){
    
    if(!this.difficulte && !this.pseudo){
      this.error = 'Veuillez renseigner votre pseudo et la difficulté choisis';
      return; 
    }
    
    if(!this.difficulte){
      this.error = 'Veuillez renseigner le niveau de difficulté choisi !';
      return;
    }

    if(!this.pseudo || this.pseudo.length < 3){
      this.error = 'Veuillez renseigner un pseudo de plus de 3 caractères';
      return;
    }
    this.isVisible = true;
    this.isVisibleQuestion = false;
    
  }

  public reponse(){
    this.isVisibleNextQuestion = false;
  }

}
