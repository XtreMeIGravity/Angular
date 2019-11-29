import{ Component } from '@angular/core';

@Component({
    selector:'mi-componente',
    templateUrl:'./mi-componente.component.html'
})

export class MiComponente{

    public titulo:string;
    public comentario:string;
    public year:number;
    
    constructor(){
        this.titulo="TITULO :V";
        this.comentario="comentario";
        this.year=2020;
        console.log("Componente cargado");
        console.log( this.titulo ,this.comentario,this.year);
    }
}