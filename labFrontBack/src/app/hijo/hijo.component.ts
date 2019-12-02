import { Component, OnInit,Input ,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.scss'],
})
export class HijoComponent implements OnInit {
@Output() public emisor = new EventEmitter();
@Input() public lblHijo: string="lblHijo";

  constructor() { }

  ngOnInit() {
    console.log("hijo");
  }

 public pablo() {
  console.log("EmitirMsg");
  this.emisor.emit('Este dato viajará hacia el padre');
  console.log("Después EmitirMsg");
 }

}
