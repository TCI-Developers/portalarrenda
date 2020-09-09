import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ServiciosComponent } from './servicios/servicios.component';

export interface DialogData {
  contrato: number;
  documento: number;
}

@Component({
  selector: 'app-documentos',
  templateUrl: './documentos.component.html',
  styleUrls: ['./documentos.component.css']
})
export class DocumentosComponent implements OnInit {
  @Input() indexContrato:any;
  @Input() argsDocumentos:any;
  argsSevicios:any [] = null;
  panelOpen;

  constructor(public dialog: MatDialog) { }
  ngOnInit(): void {
    
  }

  openDialog(index) {
    const dialogRef = this.dialog.open(ServiciosComponent,{width: '95%',data:{contrato: this.indexContrato,documento: index}});
    // dialogRef.afterClosed().subscribe(result => {
    //   console.log(`Dialog result: ${result}`);
    // });
  }

  isObjectEmpty(object){
    return !!Object.keys(object).length ? object : 0;
  }

}
