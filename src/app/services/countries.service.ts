import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { BanderasResponse } from '../banderas/interfaces/paises.interfaces';
import { PaisResponse } from '../banderas/interfaces/pais.interfaces';


@Injectable({
  providedIn: 'root'
})
export class CountriesService {


  private _countries:BanderasResponse[]=[];

  private resultados:any[]=[];

  private servicioURL:string="https://restcountries.com/v3.1/";

  constructor(private http:HttpClient) {

    // if (localStorage.getItem('countries'))
    //   this._countries =JSON.parse(localStorage.getItem('countries')!);
  }

  get countries(){
    return [...this._countries];
  }

  getPaisesEuropeos(){
    if (this._countries.length==0)
    {
      //const params= HttpParams().set('api_key')

      this.http.get<BanderasResponse[]>(`${this.servicioURL}all`)
      .subscribe((resp)=>{
        console.log(resp);
        this._countries= resp;
        //localStorage.setItem('countries',JSON.stringify(this._countries));
      });  
      return [...this._countries];
    }
    else
    {
      return [...this._countries]
    }
  };


  getCountry(country:string){

    const params= new HttpParams().set('country',country);
    console.log(params);

    var countryResponse:PaisResponse;
    this.http.get<PaisResponse>(`${this.servicioURL}name/`,{params})
    .subscribe((resp)=>{
      console.log(resp);
      countryResponse= resp;
      return countryResponse
    });  
  }

}
