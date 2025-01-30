import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { User, updateUser } from '../interface/user';
import { Saque } from '../interface/saque';
import { DatumResultados, Resultados } from '../interface/resultados';
import { ListaAlumnos } from '../interface/ListaAlumnos';
import { RelacionAlumno, TodaLista, relacion } from '../interface/relacion';
import { ListaPendiente } from '../interface/alumnosPendientes';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private myAppUrl: string;
  private myApiUrl: string;

  constructor(
    private http: HttpClient,
  ) { 
    this.myAppUrl = environment.endpoint;
    this.myApiUrl = 'user';
  }

  getUser():Observable<User>{
    console.log('Cookies disponibles:', document.cookie);
    return this.http.get<User>(this.myAppUrl + this.myApiUrl , {
      withCredentials: true // Asegura que las cookies se envíen con la solicitud
    });
  }

  getAlumnosByProfesor(id:number):Observable<ListaAlumnos>{
    return this.http.get<ListaAlumnos>(this.myAppUrl + this.myApiUrl + '/teacher/alumnos/' + id, {
      withCredentials: true // Asegura que las cookies se envíen con la solicitud
    });
  }

  getListaSaques():Observable<Saque>{
    return this.http.get<Saque>(this.myAppUrl + this.myApiUrl + '/saque', {
      withCredentials: true // Asegura que las cookies se envíen con la solicitud
    });
  }

  getResultadosByIdAlumno(id:number):Observable<Resultados>{
    return this.http.get<Resultados>(this.myAppUrl + this.myApiUrl + '/resultados/alumno/' + id, {
      withCredentials: true // Asegura que las cookies se envíen con la solicitud
    });
  }

  postResultadosSaqueAlumno(user_id:number, saque_id:number):Observable<Resultados>{
    return this.http.post<Resultados>(this.myAppUrl + this.myApiUrl + '/resultados/solo/', {user_id, saque_id}, {
      withCredentials: true // Asegura que las cookies se envíen con la solicitud
    });
  }

  createResultados(resultados: Omit<DatumResultados, 'id' | 'created_at' | 'updated_at'>):Observable<DatumResultados>{
    return this.http.post<DatumResultados>(this.myAppUrl + this.myApiUrl + '/create', resultados, {
      withCredentials: true // Asegura que las cookies se envíen con la solicitud
    });
  }

  createRelacionProfesorAlumno(data:Omit<relacion, 'relacion_id'>):Observable<ListaAlumnos>{
    return this.http.post<ListaAlumnos>(this.myAppUrl + this.myApiUrl + '/teacher/create', data, {
      withCredentials: true // Asegura que las cookies se envíen con la solicitud
    });
  }
  getAlumnosList():Observable<TodaLista>{
    return this.http.get<TodaLista>(this.myAppUrl + this.myApiUrl + '/teacher/alumnosList', {
      withCredentials: true // Asegura que las cookies se envíen con la solicitud
    });
  }

  getRelacionForAlumno(id:number):Observable<RelacionAlumno>{
    return this.http.get<RelacionAlumno>(this.myAppUrl + this.myApiUrl + '/alumno/relacion/' + id, {
      withCredentials: true // Asegura que las cookies se envíen con la solicitud
    });
  }

  updateRelacion(ralacion_id:number, estado_relacion:number):Observable<relacion>{
    return this.http.post<relacion>(this.myAppUrl + this.myApiUrl + '/alumno/update_relacion/' + ralacion_id, {estado_relacion}, {
      withCredentials: true // Asegura que las cookies se envíen con la solicitud
    });
  }

  update(user: updateUser):Observable<updateUser>{
    return this.http.post<updateUser>(this.myAppUrl + this.myApiUrl + '/updateUser', user, {
      withCredentials: true // Asegura que las cookies se envíen con la solicitud
    });
  }

  uploadPhoto(formData: FormData):Observable<any>{ 
    return this.http.post<any>(this.myAppUrl + this.myApiUrl + '/uploadPhoto', formData, {
      withCredentials: true // Asegura que las cookies se envíen con la solicitud
    });
  }

  getRelacionIdProfesor(id:number):Observable<ListaPendiente>{
    return this.http.get<ListaPendiente>(this.myAppUrl + this.myApiUrl + '/profe/relacion/' + id, {
      withCredentials: true // Asegura que las cookies se envíen con la solicitud
    });
  }

  deleteRelacion(id:number):Observable<any>{
    return this.http.delete(this.myAppUrl + this.myApiUrl + '/profe/delete_relacion/' + id, {
      withCredentials: true // Asegura que las cookies se envíen con la solicitud
    });
  }

}
