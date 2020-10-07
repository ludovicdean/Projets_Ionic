import { Injectable } from '@angular/core';
import { stringify } from 'querystring';
import { Question } from '../models/question';

@Injectable()
export class OpenTriviaProvider{
    public getQuestions(numberQ : number, difficulte : string) : Promise<Array<Question>>{
        return new Promise(async(resolve, reject) => {
            resolve([
                {
                    category : "Cinéma",
                    type : "multiple",
                    difficulte : "easy",
                    question : "Dans la prélogie Star Wars, comment s'appelle le personnage le plus gaffeur ?",
                    correct_answer : "Jar Jar Binks",
                    incorrect_answers : ["Yoda","Obi-wan Kenobi","R2-D2"]
                },
                {
                    category : "Musique",
                    type : "multiple",
                    difficulte : "easy",
                    question : "Qui a composé la Marche Turque ?",
                    correct_answer : "Mozart",
                    incorrect_answers : ["L.v.Beethoven","J.Haydn","J.S. Bach"]
                },
                {
                    category : "Sciences",
                    type : "multiple",
                    difficulte : "easy",
                    question : "A quelle distance de la Terre se situe la Lune ?",
                    correct_answer : "380 000 km",
                    incorrect_answers : ["1 année-lumière","1 000 km","260 000 km"]
                }
            ]);
        })
    }
}