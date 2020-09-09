import { Component, OnInit } from '@angular/core';
import { EcuentaService } from 'src/app/services/ecuenta.service';
import { GraficoService } from 'src/app/services/grafico.service';

@Component({
  selector: 'app-contratos',
  templateUrl: './contratos.component.html',
  styleUrls: ['./contratos.component.css']
})
export class ContratosComponent implements OnInit {
  argsContratos:any[] = null;
  panelOpenState;
  argsDocumentos;
  indexContrato;
  constructor(public ecuentaService:EcuentaService,private servicioGrafico: GraficoService) { }

  ngOnInit(): void {
    if(this.ecuentaService.argsECuenta)
      this.argsContratos = this.ecuentaService.argsECuenta.data;

    console.log(this.ecuentaService.argsECuenta.data);
      
  }

  async nextStep(pos){
    //this.servicioGrafico.showAlertLoading("","Cargando documentos...");
    if(this.panelOpenState){
      if(this.argsContratos[pos].doccontratos){
        this.argsDocumentos = this.argsContratos[pos].doccontratos;
        this.indexContrato = pos;
      }
    }  
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.argsContratos = this.ecuentaService.argsECuenta.data.filter(contrato => contrato.id_contrato.toLowerCase().includes(filterValue.trim().toLowerCase()));   
  }
}
