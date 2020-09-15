import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from '../documentos.component';
import { EcuentaService } from 'src/app/services/ecuenta.service';
import { ServiciosService } from 'src/app/services/servicios.service';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css']
})
export class ServiciosComponent implements OnInit {
  argsServicios: any;
  panelOpen;

  displayedColumns: string[] = ['importe', 'concepto', 'subtotal', 'iva'];
  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData,public ecuentaService: EcuentaService,private serviciosService:ServiciosService) { }

  ngOnInit(): void {
    this.argsServicios = this.ecuentaService.argsECuenta.data[this.data.contrato].doccontratos[this.data.documento];
  }

  solicitarDocumento(servicio){
    this.serviciosService.enviaCorreo(servicio);
  }

}
