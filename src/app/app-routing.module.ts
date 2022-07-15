import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudiesComponent } from './component/studies/studies.component';

const routes: Routes = [

  
    { path: '', pathMatch: 'full', component: StudiesComponent }
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
