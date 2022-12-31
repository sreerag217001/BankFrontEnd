import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  @Input() item:string| undefined
  //input()- it is used to hold data from parent component
  @Output() onCancel = new EventEmitter();
  //output()- it is used to hold data from child component
  @Output() onDelete = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
cancel(){
  // alert('clicked')
  this.onCancel.emit()
  //oncancel- Userdefined event
}
delete(){
  // alert('delete clicked')
  this.onDelete.emit(this.item)
}
}
