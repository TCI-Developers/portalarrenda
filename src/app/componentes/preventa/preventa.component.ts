import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { GraficoService } from 'src/app/services/grafico.service';
import { PreventaService } from 'src/app/services/preventa.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-preventa',
  templateUrl: './preventa.component.html',
  styleUrls: ['./preventa.component.css']
})
export class PreventaComponent implements OnInit {

  @ViewChild(MatTable) table: MatTable<any>;
  lectura: any;
  tiles: any[] = [
    {id: 1, text: 'One', cols: 3, rows: 6, color: ''},
    {id: 2, text: 'Two', cols: 1, rows: 6, color: ''}
  ];
  displayedColumns: string[] = ['folio', 'marca','status', 'recibo1', 'recibo2', 'recibo3'];
  dataSource;

  constructor(private router: Router, private serviceGrafico:GraficoService, private preventaService:PreventaService ) {

  }

  ngOnInit() {
    this.serviceGrafico.showAlertLoading("Espere....","Obteniendo preventas","info");
    this.preventaService.getPreventas().subscribe( (data: any) => {
      this.serviceGrafico.showAlertSuccessTime("","Preventas obtenidas");
        this.dataSource = new MatTableDataSource(data.data);
    },()=>{
      this.serviceGrafico.showAlertErrorTime("","Error al obtener preventas...");
    });
  }

  navegar(codigo, ruta) {
    localStorage.setItem('factura', JSON.stringify(codigo));
    this.router.navigateByUrl(ruta);
  }

  internet(url: string) {

    window.open(url);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  isObjectEmpty(object){
    return !!Object.keys(object).length;
  }

}
