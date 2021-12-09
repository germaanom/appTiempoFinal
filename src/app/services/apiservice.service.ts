import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

//Interfaces
import { Municipio } from '../interfaces/municipio'
import { Provincia } from '../interfaces/provincia'
import { TiempoProvincia } from '../interfaces/tiempoprovincia'
import { TiempoMunicipio } from '../interfaces/tiempomunicipio';

import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  constructor(private http: HttpClient) {

  }

  getProvinciasbyid(id: string): Observable<Provincia> {
    return this.http.get<Provincia>('http://localhost:5000/provincias/' + id)
  }

  getMunicipiosbyid(id: string): Observable<Municipio> {
    return this.http.get<Municipio>('http://localhost:5000/municipios/' + id)
  }

  getTemperaturaProvincia(id: string): Observable<TiempoProvincia> {
    return this.http.get<TiempoProvincia>('http://localhost:5000/tiempoprovincia/' + id)
  }

  getTemperaturaMunicipios(id: string): Observable<TiempoMunicipio> {
    return this.http.get<TiempoMunicipio>('http://localhost:5000/tiempomunicipio/' + id)
  }

  getProvincias(): Observable<Array<String>> {
    return this.http.get<Array<String>>('http://localhost:5000/provincias')
  }
  
  getMunicipios(): Observable<Array<String>> {
    return this.http.get<Array<String>>('http://localhost:5000/municipios/')
  }


}
