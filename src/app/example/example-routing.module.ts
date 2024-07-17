import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { ConversionsComponent } from './pages/conversions/conversions.component';
import { DateComponent } from './pages/date/date.component';
import { FormComponent } from './pages/form/form.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutPageComponent,
    children:[
      {path:'welcome', component: WelcomeComponent},
      {path:'conversions', component: ConversionsComponent},
      {path:'date', component: DateComponent},
      {path:'form', component: FormComponent},
      {path:'**', redirectTo: 'welcome'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExampleRoutingModule { }
