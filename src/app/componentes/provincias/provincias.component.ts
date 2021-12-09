import { Component, OnInit } from '@angular/core';
import { Provincia } from '../../interfaces/provincia';
import { TiempoProvincia } from '../../interfaces/tiempoprovincia';
import { ApiserviceService } from '../../services/apiservice.service'

@Component({
  selector: 'app-provincias',
  templateUrl: './provincias.component.html',
  styleUrls: ['./provincias.component.css']
})
export class ProvinciasComponent implements OnInit {
  provincias: Array<String> = []

  idProvincia:string = ''
  idProvinciaFormat:string = ''
  
  provincia: Provincia = {
    codprov: '',
    nombre: '',
    codauton: '',
    comunidad: '',
    capital: ''
  }

  tiempo: TiempoProvincia = {
    codprov: '',
    hoy: '',
    manana: '',
    fecha: ''
  }



  constructor(public apiservice: ApiserviceService) { }

  ngOnInit(): void {

    this.apiservice.getProvincias().subscribe(resp => {
      this.provincias = resp
    })
  }

  buscarProvincia(): void {
    this.idProvinciaFormat = this.idProvincia.toString().substring(0,2)
    if (this.idProvincia != '') {
      this.apiservice.getProvinciasbyid(this.idProvinciaFormat).subscribe(resp => {
        this.provincia = resp
      })
      this.apiservice.getTemperaturaProvincia(this.idProvinciaFormat).subscribe(resp => {
        this.tiempo = resp
      })    
    }
  }


}
