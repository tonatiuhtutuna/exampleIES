import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css']
})
export class DateComponent  {
  public myForm: FormGroup = this.fb.group({
    startDate:[],
    endDate:[''],
    typeDate:[],
    plusDate:[]
  });

  public finalDate = '';
  public customDate = this.myForm.value.endDate;

  constructor( private fb: FormBuilder){
  }

  onSave():void{
    this.finalDate = this.getFinalDate(this.myForm.value);
  }

  getFinalDate(a: any){
    let dateI = a.startDate;
    let dateT = a.typeDate;
    let plusD = a.plusDate;

    if( dateT == "1" ){
      plusD = parseInt(plusD);
    }else if( dateT == "2"){
      plusD = ( parseInt(plusD) * 30);
    }else if(dateT == "3"){
      plusD = ( parseInt(plusD) * 365);
    }

    let date = new Date(dateI);
    let date2 = date.getTime()
    let date3 = date2.toString()
    let date4 = date3.substring(0,10)
    let fechaTS = parseInt(date4)
    let diasAdd = ( plusD * (86400));
    let fechaFinal = fechaTS + (diasAdd + 86400);
    let fechaTempla =  new Date(fechaFinal * 1000)

    return fechaTempla.toString();
  }


}
