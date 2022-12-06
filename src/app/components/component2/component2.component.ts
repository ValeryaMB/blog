import { Component } from '@angular/core';

@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.css']
})
export class Component2Component {

constructor(){ }
numero:any=0;

sueldos=[1700, 1600, 1900, 1880, 2000, 4555];
ngOnInit():void{
  this.numero=0;
}
}