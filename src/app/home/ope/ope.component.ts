import { Component } from '@angular/core';

@Component({
  selector: 'app-ope',
  templateUrl: './ope.component.html',
  styleUrls: ['./ope.component.css']
})
export class OpeComponent {
  valor1: number;
  valor2: number;
  operacion: string;
  constructor() {
    this.valor1 = 0;
    this.valor2 = 0;
    this.operacion = '';
}}
