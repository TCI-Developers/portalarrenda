import { Component, OnInit } from '@angular/core';
import { EcuentaService } from 'src/app/services/ecuenta.service';

@Component({
  selector: 'app-ecuenta',
  templateUrl: './ecuenta.component.html',
  styleUrls: ['./ecuenta.component.css']
})
export class EcuentaComponent implements OnInit {
  tiles: any[] = [
    {id: 1, text: 'One', cols: 4, rows: 1, color: ''},
    {id: 2, text: 'Two', cols: 1, rows: 1, color: ''}
  ];
  constructor(public ecuentaService:EcuentaService) { }

  ngOnInit(): void {
  }

}
