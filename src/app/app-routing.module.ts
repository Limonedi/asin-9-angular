import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeModule } from './home/home.module';
import { OpeComponent } from './home/ope/ope.component';

const routes: Routes = [
  {path:'', redirectTo:'ope', pathMatch:'full'},
  {path:'ope', component: OpeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
