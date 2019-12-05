import { NgModule } from "@angular/core";
import {  
    MatButtonModule, MatCardModule, MatToolbarModule, MatInputModule, MatSelectModule, MatSidenavModule
} from "@angular/material";

@NgModule({
    imports:[
        MatButtonModule,
        MatCardModule,
        MatToolbarModule,
        MatInputModule,
        MatSelectModule,
        MatSidenavModule
    ],
    exports:[
        MatButtonModule,
        MatCardModule,
        MatToolbarModule,
        MatInputModule,
        MatSelectModule,
        MatSidenavModule
    ]
})
export class MaterialModule {
}