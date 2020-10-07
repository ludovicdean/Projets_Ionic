import { Injectable } from '@angular/core';
import { resolve } from 'dns';
import { Film } from '../models/film';

@Injectable()
export class FilmsProvider{

    public search(title:string, year:number, type:string) : Promise<Array<Film>>{
        return new Promise((resolve, reject)=>{
            resolve([
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
            ]);
        });
    }

}