import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AngularMaterialModule } from './angular-material.module';

import { AppComponent } from './app.component';
import { AppTableComponent } from './app-table/app-table.component';

@NgModule({
  declarations: [
    AppComponent,
    AppTableComponent
  ],
  imports: [
    BrowserAnimationsModule,
    AngularMaterialModule
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
