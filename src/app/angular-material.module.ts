import { NgModule } from '@angular/core';
import { MatToolbarModule, MatSidenavModule, MdButtonModule, MdIconModule } from '@angular/material';

const modules = [
  MatToolbarModule,
  MatSidenavModule,
  MdButtonModule,
  MdIconModule
];

@NgModule({
  imports: modules,
  exports: modules
})
export class AngularMaterialModule {}
