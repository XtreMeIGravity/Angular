import { Component, OnInit } from '@angular/core';
import { FotosService } from "../../services/fotos.service";
import { Foto } from 'src/app/models/Foto';


@Component({
  selector: 'app-fotos',
  templateUrl: './fotos.component.html',
  styleUrls: ['./fotos.component.css']
})
export class FotosComponent implements OnInit {
  photos: any[] = [];

  constructor(public fotosService: FotosService) { }

  ngOnInit() {
    this.fotosService.getPhotos()
      .subscribe(
        photos => {
          console.log(photos);
          this.photos = photos;
        },
        err => console.log(err)
      )
  }
}
