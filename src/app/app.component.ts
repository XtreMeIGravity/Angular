import { Component, OnInit } from '@angular/core';
import { FotosService } from "./services/fotos.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  albumsId=[1,2,3]


  constructor(public fotosService: FotosService) {}
  public title = 'Hola :D  ';
}
