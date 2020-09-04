import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css']
})
export class ServiciosComponent implements OnInit {
  @Input() argsServicios:any;
  panelOpen;

  displayedColumns: string[] = ['importe', 'concepto', 'subtotal', 'iva'];
  constructor() { }

  ngOnInit(): void {

  }

}
