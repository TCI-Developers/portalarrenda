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
    ruta: 'ecuenta'},
    {texto: 'Documentacion',
    ruta: 'documentos'}
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
      this.serviceGrafico.showAlertLoading("Obteniendo su estado de cuenta...","Esto puede tardar unos minutos,por favor espere. ","info");
      let credentiaal = JSON.parse(localStorage.getItem('credencial'));
      this.ecuentaService.getEstadoCuenta(credentiaal.rfc);
    }else if(ruta == 'documentos'){
      window.open('https://ichiban.rocks/old/Clientes/'+localStorage.getItem('record'), '', 'width=' + screen.width); 
    }else{
      this.router.navigateByUrl(ruta);
    }
  }
  
}
