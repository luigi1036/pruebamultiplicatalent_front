import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Color } from '../../models/color';
import { ColorService } from '../../services/color.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  color: Color = new Color();
  errores: string[] = []

  constructor(private colorService: ColorService, private router: Router,
              private activetedRouter: ActivatedRoute) { }

  ngOnInit(): void {
  }

  create(){
    console.log(this.color)
    this.colorService.createColor(this.color).subscribe(response => {
      console.log(response)
      swal.fire('Nuevo Color', `Color ${response.color.name} creado con exito`, 'success');
      this.router.navigate(['/']);
    }, err => {
      console.log(err)
      this.errores = err.error as string[];
      console.log(this.errores);
    });
  }

  cargarColor(){
    this.activetedRouter.params.subscribe(params => {
      const id = params.id;
      if (id){
        this.colorService.getById(id).subscribe(color => this.color = color);
      }
    });
  }

  update(){
    this.colorService.update(this.color).subscribe(response => {
      console.log(response)
      swal.fire('Color Actualizado', `El Color se Actualizo con exito`, 'success');
      this.router.navigate(['/']);
    }, error => {
      console.log(error)
      this.errores = error.error as string[];
    });
  }

}
