import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { AngularMaterialsModule } from '../angular-materials/angular-materials.module';



@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    RouterModule,
    AngularMaterialsModule
  ],
  exports: [
  ]
})
export class SharedModule { }