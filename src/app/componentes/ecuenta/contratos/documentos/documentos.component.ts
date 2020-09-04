import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-documentos',
  templateUrl: './documentos.component.html',
  styleUrls: ['./documentos.component.css']
})
export class DocumentosComponent implements OnInit {
  @Input() argsDocumentos:any;
  argsSevicios:any [] = null;
  panelOpen;

  constructor() { }
  ngOnInit(): void {}

  async nextStep(pos){
    //this.servicioGrafico.showAlertLoading("","Cargando documentos...");
    if(this.panelOpen){
      if(this.argsDocumentos[pos].servicios){
        this.argsSevicios = this.argsDocumentos[pos].servicios;
      }
    }  
  }

}
