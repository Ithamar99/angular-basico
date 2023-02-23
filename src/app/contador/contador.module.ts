import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from '../app.component';
import { ContadorComponent } from './contador/contador.component';


@NgModule  ({

    declarations: [
       
        ContadorComponent
    ],

    exports: [
        ContadorComponent
        
    ]

})
export class ContadorModule {
    
}