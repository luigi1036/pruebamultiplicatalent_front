import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  modal: boolean = false;

  constructor() { }

  abrirModal(){
    console.log("llegue a la modal")
    this.modal = true;
    console.log(this.modal)
  };

  cerrarModal(){
    this.modal = false;
  }
}
