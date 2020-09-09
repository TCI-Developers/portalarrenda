import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { GraficoService } from './grafico.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class EcuentaService {

  argsECuenta:any ;
  constructor(private http:HttpClient,private serviceGrafico: GraficoService, private router:Router) { }
  getEstadoCuenta(rfc){
    let data = {rfc};
    this.http.post(environment.ecuenta,data).subscribe(async (response:any) => {
      if(response){
        if(response.estatus){
          this.serviceGrafico.showAlertSuccessTime("","Estado de cuenta obtenido");
          this.argsECuenta = await response;
          await this.router.navigateByUrl('ecuenta');
        }else{
          this.serviceGrafico.showAlertError("Error",response.response);
        }
      }     
    });
      
  }
}
