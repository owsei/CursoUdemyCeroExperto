import { Component, OnInit } from '@angular/core';
import { PaisResponse } from '../interfaces/pais.interfaces';

@Component({
  selector: 'app-buscar-pais',
  templateUrl: './buscar-pais.component.html'
})
export class BuscarPaisComponent implements OnInit {

  buscando:boolean=false;
  errorBusqueda:boolean=false;
  busquedaRealizada:boolean=false;
  paisBuscado:any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
