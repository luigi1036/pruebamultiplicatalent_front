import { Component, Input, OnInit } from '@angular/core';
import { Color } from '../../models/color';
import { ColorService } from '../../services/color.service';
import { ModalService } from '../detalle-color/modal.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {

  colores: Color[] = []; 
  colorSeleccionado: Color;

  constructor(private colorService: ColorService, private modal: ModalService) { }

  ngOnInit(): void {
    this.getColores();
  }

  getColores(){
    this.colorService.getColores().subscribe(response => this.colores = response)
  }

  verColor(color: Color){
    console.log(color)
    this.colorSeleccionado = color;
    this.modal.abrirModal();
  }

  delete(color){
    this.alerta(color);
  }


  alerta(color){
    swal.fire({
      title: `Esta Seguro Eliminar ${color.name}`,
      text: 'Esta Acciòn no se puede Revertir',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, Eliminar',
      cancelButtonText: 'NO',
    }).then((result) => {
      if (result.isConfirmed) {
        this.colorService.delete(color.id).subscribe( response => {
          this.colores = this.colores.filter(col => col !== color);
          swal.fire(
            'Eliminado',
            `El Usuario ${color.name} se Elimino `,
            'success'
          );
        });
      }
    });
  }

}
