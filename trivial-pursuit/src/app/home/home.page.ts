import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Question } from '../models/question';
import { OpenTriviaProvider } from '../providers/openTrivia.provider';

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
  numberQ : number;
  questions : Array<Question>;
  index : number = 0;
  questionCourante : Question;

  constructor(private alertCtrl : AlertController, private openTriviaProvider : OpenTriviaProvider) {}

  public async verifierInfos(){

    if(!this.pseudo || this.pseudo.length < 3){
      // this.error = 'Veuillez renseigner un pseudo de plus de 3 caractères';
      const alert = await this.alertCtrl.create({
        header : 'Informations incorrectes',
        message : "Veuillez renseigner un pseudo de plus de 3 caractères !",
        buttons : ['OK']
      });
      alert.present();
      return;
    }
    
    if(!this.difficulte){
      // this.error = 'Veuillez renseigner le niveau de difficulté choisi !';
      const alert = await this.alertCtrl.create({
        header : 'Informations incorrectes',
        message : "Veuillez renseigner le niveau de difficulté choisi !",
        buttons : ['OK']
      });
      alert.present();
      return;
    }

    await this.chargerQuestions();

    this.shuffle(this.questions);

    this.isVisible = true;
    this.isVisibleQuestion = false;

    this.afficherQuestion();
    
  }

  public reponse(){
    this.isVisibleNextQuestion = false;
  }

  public async chargerQuestions(){
    this.openTriviaProvider.getQuestions(this.numberQ, this.difficulte)
    .then((questions)=>{this.questions=questions})
    .catch(async (error)=>{const alert = await this.alertCtrl.create({
      header : 'Erreur chargement', 
      message : "Problème de chargement des questions.", 
      buttons : ['OK']
    });
    alert.present();
    });
}

public afficherQuestion(){
  this.questionCourante = this.questions[this.index];
  
  this.index++;
}

public shuffle(questions){
  var indexCourant = questions.length;
  var valeurTemporaire;
  var indexAleatoire;

  while (0 !== indexCourant) {
    indexAleatoire = Math.floor(Math.random() * indexCourant);
    indexCourant = indexCourant - 1;
    valeurTemporaire = questions[indexCourant];
    questions[indexCourant] = questions[indexAleatoire];
    questions[indexAleatoire] = valeurTemporaire;
  }
}
}
