import { Component, OnInit } from '@angular/core';
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

    constructor(){

    }

    ngOnInit(){}

    clicBouton(){
        this.binding = 'Clic !!!';
    }

    //Vérification -- sur les champs
    public rechercher(){
        this.error='';
        if(!this.title || this.title.length <= 3){
            this.error = "Veuillez saisir un titre de 3 caractères minimum";
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
        this.films = [
            {
                Title : 'Avatar',
                Poster: 'assets/icon/favicon.png',
                Year: 2012,
            },
            {
                Title : 'Avatar 2',
                Poster: 'assets/icon/favicon.png',
                Year: 2028,
            },
            {
                Title : 'Avatar 3',
                Poster: 'assets/icon/favicon.png',
                Year: 2049,
            }

        ]
    }
}
