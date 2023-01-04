import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OpeComponent } from './ope/ope.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    OpeComponent
  ],
  imports: [
    CommonModule,FormsModule
  ],
  exports: [
    OpeComponent
  ],
})
export class HomeModule { }
