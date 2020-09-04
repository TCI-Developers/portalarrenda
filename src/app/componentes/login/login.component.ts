import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';
import { LoginService } from 'src/app/services/login.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  tiles: any[] = [
    {id: 1, text: 'One', cols: 3, rows: 5, color: ''},
    {id: 2, text: 'Two', cols: 1, rows: 5, color: ''}
  ];
  password = '';
  usuario = '';
  constructor(private router: Router,
              private http: HttpClient,private loginService: LoginService) { }

  ngOnInit() {
    const valida: any = JSON.parse(localStorage.getItem('credencial'));
    if (valida) {
      this.router.navigateByUrl('menu');
    }
  }


  navegar() {
    const credencial = {
      usuario: this.usuario,
      contrasena: this.password
    };
    this.loginService.auth(credencial);
  }

  valida() : boolean{
    return this.usuario !== '' && this.password !== '' ? true : false;
      // if(this.usuario !== '' && this.password !== ''){
      //   return true;
      // }
      // else{
      //   return false;
      // }
  }

}
