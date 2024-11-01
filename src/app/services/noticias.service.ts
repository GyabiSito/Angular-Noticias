import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  constructor(private http: HttpClient) { }

  getNoticias(parametros: any): Observable<any> {
    const API_KEY = "fef5167113ee4072a938860a4a0d9099";
    const URL = 'https://newsapi.org/v2/top-headlines?country='
      + parametros.pais + '&category=' + parametros.categoria + '&apiKey='+API_KEY;
    return this.http.get(URL);
  }
}
