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
  idP:string = 'ID'
  
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
    if (this.idProvincia != '') {
      this.apiservice.getProvinciasbyid(this.idProvincia).subscribe(resp => {
        this.provincia = resp
      })
      this.apiservice.getTemperaturaProvincia(this.idProvincia).subscribe(resp => {
        this.tiempo = resp
      })
    }
  }

}
