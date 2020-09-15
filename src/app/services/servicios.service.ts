import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { GraficoService } from './grafico.service';

@Injectable({
  providedIn: 'root'
})
export class ServiciosService {

  constructor(private http:HttpClient,private serviceGrafico: GraficoService) { }

  enviaCorreo(servicio){
    let data = {
      'record':servicio.record_id_,
      'cliente':servicio.documento_controlado___clientes___nombre,
      'contrato':servicio.documento_controlado___id_contrato,
      'documento':servicio.related_documento_controlado,
      'servicio':servicio.related_conceptos
    };
    this.serviceGrafico.showAlertLoading("Espere...","enviando solicitud","");
    this.http.post(environment.solicitud,data).subscribe( (response:any) => {
      console.log(response);
        if(response.status){
          this.serviceGrafico.showToast("Solicitud enviada","success");
        }else{
          this.serviceGrafico.showToast("Error al enviar solicitud","error");
        }
    });
  }
}
