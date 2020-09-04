import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EcuentaService } from 'src/app/services/ecuenta.service';
import { GraficoService } from 'src/app/services/grafico.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

botones: any  = [
  {texto: 'Consulta Facturas',
    ruta: 'facturas'},
    {texto: 'Notas de Credito',
    ruta: 'notas'},
    {texto: 'Complementos de Pago',
    ruta: 'pagos'},
    {texto: 'Poliza de Seguro',
    ruta: 'seguros'},
    {texto: 'Estado de cuenta',
    ruta: 'ecuenta'}
];

tiles: any[] = [
  {id: 1, text: 'One', cols: 3, rows: 1, color: ''},
  {id: 2, text: 'Two', cols: 1, rows: 1, color: ''}
];

  constructor(private router: Router,private ecuentaService:EcuentaService, private serviceGrafico: GraficoService) { }

  ngOnInit() {
  }

  async navegar(ruta: string) {
    if(ruta == 'ecuenta'){
      this.serviceGrafico.showAlertLoading("¡Espere!","Estamos obteniendo su estado de cuenta...");
      let credentiaal = JSON.parse(localStorage.getItem('credencial'));
      this.ecuentaService.getEstadoCuenta(credentiaal.rfc);
        
    }else{
      this.router.navigateByUrl(ruta);
    }
  }
  
}
