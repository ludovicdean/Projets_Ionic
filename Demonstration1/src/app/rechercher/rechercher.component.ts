import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { FilmsProvider } from '../providers/film.provider';
@Component({
    selector:'app-rechercher',
    templateUrl: './rechercher.component.html',
    styleUrls: ['./rechercher.component.scss'],
})
export class RechercherComponent implements OnInit{
    public binding : string = 'Bonjour tout le monde !';
    public title : string = '';
    public year : number;
    public type : string = '';
    public error : string = '';//cf fonction rechercher
    public films = [];
    constructor(private alertCtrl : AlertController, 
        private rechercherFilm : FilmsProvider){

    }

    ngOnInit(){}

    clicBouton(){
        this.binding = 'Clic !!!';
    }

    //Vérification -- sur les champs
    public async rechercher(){
        this.error='';
        if(!this.title || this.title.length <= 3){
            this.error = "Veuillez saisir un titre de 3 caractères minimum";
            const alert = await this.alertCtrl.create({
                header : 'Informations manquantes',
                message : "Veuillez saisir un titre de 3 caractères minimum",
                buttons : ['OK']
            });
            alert.present();
            return;
        }
        if(!this.year || (this.year < 1900 || this.year > 2050)){
            this.error = 'Veuillez saisir une année comprise entre 1900 et 2050';
            return;
        }
        if(this.type === undefined){
            this.error='Veuillez choisir un type de média';
            return;
        }
        this.lancerRecherche();

    }

    private lancerRecherche(){
        this.rechercherFilm.search(this.title, this.year, this.type)
        .then((resultat) => {
            this.films = resultat;
        })
        .catch(async (err) => {
            const alert = await this.alertCtrl.create({
                header : 'Erreur appel Service',
                message : 'Impossible de récupérer les films',
                buttons : ['OK']
            });
            alert.present();
            
        });
    }
}
