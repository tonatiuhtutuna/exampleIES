import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent  {



  public loginForm: FormGroup = this.fb.group({
    username:['',[Validators.required]],
    password:['',[Validators.required]]
  })

  constructor( private fb: FormBuilder){

  }


  onSave():void{

    if(this.loginForm.invalid){
      console.log("No es correcto el envio");
      this.loginForm.markAllAsTouched();
      alert("Debes ingresar los datos completos");

      return;
    } else{
      console.log("Es correcto el envio");
      console.log(this.loginForm.value)
      this.loginForm.reset({currentRead:true});
      alert("Datos enviados con exito");

    }


  }



}


