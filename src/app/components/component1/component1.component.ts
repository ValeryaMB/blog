import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/router';
@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.css']
})
export class Component1Component implements OnInit {
constructor(private router: Route){ }

numero:any=0;

sueldos=[1700, 1600, 1900, 1880, 2000, 4555];

ngOnInit():void{
  localStorage.clear()
  this.numero=30;
  
}

almacenar()
{
  localStorage.setItem('valor_total', this.numero)
  localStorage.setItem('mensaje', 'almacenado')
}
}
