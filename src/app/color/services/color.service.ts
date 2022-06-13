import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { Color } from '../models/color';
import { catchError, map, tap} from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class ColorService {

  private httpHeader = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient, private router: Router) { }

  getColores() :Observable<Color[]>{
    return this.http.get<Color[]>(`${environment.urlBacken}colores`).pipe(tap(response => console.log(response))
    )
  }

  createColor(color: Color): Observable<any>{
    return this.http.post<any>(`${environment.urlBacken}color`, color).pipe(
      catchError(e => {
        if(e.error.mensaje){
          console.log(e.error.mensaje);
          
        }
        swal.fire(e.error.mensaje, e.error.error, 'error');
        this.router.navigate(['/']);
        return throwError(e);
      })
    )
  }


  getById(id: number){
    return this.http.get<Color>(`${environment.urlBacken}/${id}`).pipe(
      catchError(e => {
        if(e.status != 401 && e.error.emnsaje){
        swal.fire('Error al Editar', e.error.mensaje, 'error');
        this.router.navigate(['/']);
        return throwError(e);
      }
      })
    );
  }

  delete(id){
    console.log(id)
    return this.http.delete<Color>(`${environment.urlBacken}${id}`).pipe(
      catchError(e => {
        if(e.error.mensaje){
          console.log(e.error.mensaje);
          
        }
        swal.fire('Error al Eliminar', e.error.mensaje, 'error');
        this.router.navigate(['/']);
        return throwError(e);
      })
    );
  }

  update(color: Color): Observable<Color>{
    return this.http.put(`${environment.urlBacken}${color.id}`, color).pipe(
      map((response: any) => response.color as Color),
      catchError(e => {
        if(e.error.mensaje){
          console.log(e.error.mensaje);
          
        }
        swal.fire('Error al Editar', e.error.mensaje, 'error');
        this.router.navigate(['/']);
        return throwError(e);
      })
    );
  }
}
