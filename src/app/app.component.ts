import { Component, OnInit } from '@angular/core';
import { fotosService } from "./services/fotos.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor( public fotosService:fotosService){
  }
  ngOnInit(){
    this.fotosService.getPhotos().subscribe(
      photos => console.log(photos),
      err => console.log(err)
    )
  }
  public title = 'Hola :D  ';
}
