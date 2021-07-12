import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PreventaService {

  constructor(private http: HttpClient) { 

  }

  getPreventas(){
    let storage:any = JSON.parse(localStorage.getItem('credencial'));
    const credencial = {
      rfc: storage.rfc
    };
    return this.http.post('https://tciconsultoria.com/portalarrenda/preventas.php', credencial);
  } 
}
