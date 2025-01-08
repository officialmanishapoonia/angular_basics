import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phoneFormat'
})
export class PhoneFormatPipe implements PipeTransform {

  transform(value: string): string {
    if(!value){
      return '';
    }
    let phone = value.replace(/x\d+/, '');
    console.log(phone);
     phone = phone.replace(/\D/g, ''); 
   
      phone=`(${phone.substring(0, 3)}) ${phone.substring(3, 6)}-${phone.substring(6)}`;
   
    return phone;
  }

}
