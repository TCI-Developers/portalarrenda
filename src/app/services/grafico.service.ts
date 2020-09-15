import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class GraficoService {

  constructor() { }

  showAlertError(title,text){
    return  Swal.fire({
       allowOutsideClick: false,
       icon: 'error',
       position: 'top-end',
       title,
       text,
       showConfirmButton: true,
     });
   }
 
   showAlertSuccess(title,text){
     return Swal.fire({
        allowOutsideClick: false,
        icon: 'success',
        position: 'top-end',
        title,
        text,
        showConfirmButton: true,
      });
    }
 
    showAlertSuccessTime(title,text){
      return Swal.fire({
       allowOutsideClick: false,
       icon: 'success',
       title,
       text,
       showConfirmButton: false,
       timer: 1500
     });
    }
 
    showAlertErrorTime(title,text){
     return Swal.fire({
      allowOutsideClick: false,
      icon: 'error',
      title,
      text,
      showConfirmButton: false,
      timer: 1500
    });
   }
 
   showAlertLoading(title,text,icon){
     Swal.fire({
       allowOutsideClick: false,
       icon,
       title,
       text,
     });
     return Swal.showLoading();
   }
 
   showAlertWarningConfirm(title,text){
     return Swal.fire({
       allowOutsideClick: false,
       position: 'top-end',
       icon: 'warning',
       title,
       text,
       showConfirmButton: true,
     });
   }

   showToast(title,icon){
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 1500,
      timerProgressBar: true,
      onOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
      }
    });
    return Toast.fire({
      icon,
      title
    });
   }
}
