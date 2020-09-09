import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { GraficoService } from './grafico.service';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  authGuard;
  constructor(private http:HttpClient,private router: Router,private servicioGrafico:GraficoService) { }

  auth(credencial){
    this.servicioGrafico.showAlertLoading("","Iniciando sesión...","info");
    this.http.post(environment.auth, credencial).subscribe(
      (data: any) => {
        this.authGuard = data.estatus;
          if (data.estatus) {      
            this.servicioGrafico.showAlertSuccessTime("Inicio exitoso","");
            const credencial: any = {rfc: data.rfc};
            localStorage.setItem('credencial', JSON.stringify(credencial));
            this.router.navigateByUrl('menu');
          } else {
            this.servicioGrafico.showAlertError("Error de autenticacion","Revisa tu usuario y/o contraseña y vuelve a intentarlo.");
          }
        });
  }

  isAuth(){
    return this.authGuard || localStorage.getItem("credencial") != null;
  }
}
