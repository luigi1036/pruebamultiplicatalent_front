import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Color } from '../../models/color';
import { ColorService } from '../../services/color.service';
import { ModalService } from './modal.service';

@Component({
  selector: 'app-detalle-color',
  templateUrl: './detalle-color.component.html',
  styleUrls: ['./detalle-color.component.css']
})
export class DetalleColorComponent implements OnInit {

  @Input() color: Color;

  constructor(private colorService: ColorService, private route: Router, 
               public modal: ModalService) { }

  ngOnInit(): void {
    console.log(this.color)
  }

  cerrarModal(){
    this.modal.cerrarModal();
  }

}
