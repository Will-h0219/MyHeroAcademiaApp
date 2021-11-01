import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MhaAPIResponse, Character } from '../interfaces/characters.interface';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  private baseUrl: string = 'https://myheroacademiaapi.com/api';
  
  constructor(private http: HttpClient) { }

  getCharacters(page?: number): Observable<MhaAPIResponse> {
    let results = page
      ? this.http.get<MhaAPIResponse>(`${this.baseUrl}/character?page=${page}`)
      : this.http.get<MhaAPIResponse>(`${this.baseUrl}/character`);
    return results;
  }

  getCharacterById(id: string): Observable<Character> {
    return this.http.get<Character>(`${this.baseUrl}/character/${id}`);
  }
}
