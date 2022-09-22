import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Name, BanderasResponse } from '../interfaces/paises.interfaces';

@Component({
  selector: 'app-listado-paises',
  templateUrl: './listado-paises.component.html'
})
export class ListadoPaisesComponent implements OnInit {

  paises:any[]=[];
  constructor(private countriesServices:CountriesService) { }

  ngOnInit(): void {
    this.paises = this.countriesServices.getPaisesEuropeos();
  }
  get resultadosPaisesEuropeos(){
    let countries= this.countriesServices.countries;
    countries.sort((a, b) => {
      if (a.name.common == b.name.common) {
        return 0;
      }
      if (a.name.common < b.name.common) {
        return -1;
      }
      return 1;
    });

  return countries;
  }


}
