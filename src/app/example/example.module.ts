import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ExampleRoutingModule } from './example-routing.module';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { ConversionsComponent } from './pages/conversions/conversions.component';
import { DateComponent } from './pages/date/date.component';
import { FormComponent } from './pages/form/form.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';



@NgModule({
  declarations: [
    LayoutPageComponent,
    ConversionsComponent,
    DateComponent,
    FormComponent,
    WelcomeComponent
  ],
  imports: [
    CommonModule,
    ExampleRoutingModule,
    ReactiveFormsModule
  ]
})
export class ExampleModule { }
