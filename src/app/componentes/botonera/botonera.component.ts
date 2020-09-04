import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-botonera',
  templateUrl: './botonera.component.html',
  styleUrls: ['./botonera.component.css']
})
export class BotoneraComponent implements OnInit {
  ruta;
  constructor(private router: Router) {
    this.ruta = this.router.url.substring(1,this.router.url.length);  
   }

  ngOnInit(): void {
  }
  regresar() {
    window.history.back();
  }

  cerrar(){
    localStorage.removeItem('factura');
    localStorage.removeItem('credencial');
    this.router.navigateByUrl('login');
  }

}
