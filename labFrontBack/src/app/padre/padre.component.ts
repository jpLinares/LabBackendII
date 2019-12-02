import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.scss'],
  
})
export class PadreComponent implements OnInit {
 // @Input() public inputPadre: string="inputPadre";
 public inputPadre: string="inputPadre";
  constructor() { }

  ngOnInit() {
    console.log("padre");
  }

 public juan(mensaje){
    console.log("onEmitirMsg");
    console.log("escuchó:" + mensaje);
  }

}
