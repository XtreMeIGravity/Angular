import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Foto } from "../models/Foto";
@Injectable({
  providedIn: 'root'
})
export class FotosService {
  constructor(private http: HttpClient) { }
  getPhotos(){
    return this.http.get<Foto[]>('https://jsonplaceholder.typicode.com/photos?_limit=10');
  }
}
