import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Params } from '@angular/router';
import { Cardproduct } from '../interfaces/cardproduct.interface'

@Injectable({
  providedIn: 'root'
})
export class CardproductService {
  API_URL = 'http://localhost:3000/products'

  constructor(private http: HttpClient) { }

  getProducts(name: string | null){
    const params: Params = {}

    if(name){
      params['name_like'] = name
    }
    return this.http.get<Cardproduct[]>(this.API_URL , {params})
  }
}

