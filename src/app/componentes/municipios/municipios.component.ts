import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ApiserviceService } from '../../services/apiservice.service'
import { Municipio } from '../../interfaces/municipio';
import { TiempoMunicipio } from '../../interfaces/tiempomunicipio';

@Component({
  selector: 'app-municipios',
  templateUrl: './municipios.component.html',
  styleUrls: ['./municipios.component.css']
})
export class MunicipiosComponent implements OnInit {

  myControl = new FormControl();
  idMunicipio: string = ''
  municipios: Array<String> = []

  municipio: Municipio = {
    codmuni: '',
    codprov: '',
    nombre: ''
  }

  tiempoM: TiempoMunicipio = {
    codmuni: '',
    fecha: '',
    maxima: '',
    minima: '',
    lluvia: ''
  }

  constructor( public apiservice: ApiserviceService) { }

  ngOnInit(): void {

    this.apiservice.getMunicipios().subscribe(resp => {
      this.municipios = resp
    })
  }

  buscarMunicipio(): void {
    if (this.idMunicipio != '') {
      this.apiservice.getTemperaturaMunicipios(this.idMunicipio).subscribe(resp => {
        this.tiempoM = resp
      })

      this.apiservice.getMunicipiosbyid(this.idMunicipio).subscribe(resp => {
        this.municipio = resp
      })
    }
  }
}