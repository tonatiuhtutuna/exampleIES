import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit{

  ngOnInit(): void {

  }
    public myForm: FormGroup = this.fb.group({
      name:['',[ Validators.required, Validators.minLength(3)] ],
      apellido:['',[Validators.required]],
      fumas:[false,[Validators.required]],
      currentRead:[true,[Validators.required]],
      lastTreeBooks:['',[Validators.required]],
      civil:['']
    })

    constructor( private fb: FormBuilder){
      function addField(){
        console.log("Agrega otro campo para escribir libro")
      }

    }

    onSave():void{

      if(this.myForm.invalid){
        console.log("No es correcto el envio");
        this.myForm.markAllAsTouched();
        alert("Error formulario invalido");
        return;
      } else{
        console.log("Es correcto el envio");
        console.log(this.myForm.value)
        this.myForm.reset({currentRead:true});
        alert("Datos enviados con exito");

      }


    }




}
