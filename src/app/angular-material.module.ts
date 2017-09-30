import { NgModule } from '@angular/core';
import { MatToolbarModule, MatSidenavModule } from '@angular/material';

const modules = [
  MatToolbarModule,
  MatSidenavModule
];

@NgModule({
  imports: modules,
  exports: modules
})
export class AngularMaterialModule {}
