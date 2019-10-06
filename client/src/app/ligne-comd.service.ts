import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LC } from './LC';
import {BonLiv} from './BonLiv'
import {BonLivService} from './BonLiv.service'
 
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
 
@Injectable({
  providedIn: 'root'
})
export class LCService {   
   private cmdsUrl = 'http://localhost:3000/users/lc';  // URL to web api

  constructor( 
    private http: HttpClient,
    private bl :BonLivService, 
  ) { }
 
  getLCommandes(num_ar_com: number): Observable<LC[]>
   {
    const url2='http://localhost:3000/users/cmds'
    const url1 =`${url2}/${num_ar_com}`;
    const url = `${url1}/lc`;
    console.log("Helooo"); 
    return this.http.get<LC[]>(url)
  }

  getLCommandesPNL(num_ar_com : number): Observable<LC[]> {
    const url = `${this.cmdsUrl}/piecesNL/${num_ar_com}`;
    return this.http.get<LC[]>(url)
  }

  getBLLC(IdBl : number ){
    console.log("heeeeeeeeey")
    const url1= 'http://localhost:3000/users/lc/piecesNL'
   const url =`${url1}/${IdBl}`
   return this.http.get<BonLiv>(url) 
  }
 
  getLCommande(num_ar_com: number,num_p : number ): Observable<LC> {
    const url = `${this.cmdsUrl}/${num_ar_com}/${num_p}`;
    console.log(url); 
    return this.http.get<LC>(url);
  }
 
  addLCommande(customer: LC): Observable<LC> {
    console.log("heeey")
    return this.http.post<LC>(this.cmdsUrl, customer, httpOptions);
  }
 
  deleteLCommande (customer: LC | number, customer1: LC | number ): Observable<LC> {
    const id = typeof customer === 'number' ? customer: customer.num_ar_com;
    const id2 = typeof customer1 === 'number' ? customer: customer1.num_p;
    const url = `${this.cmdsUrl}/${id}/${id2}`;
 
    return this.http.delete<LC>(url, httpOptions);
  }
 
  updateCommande (customer: LC): Observable<any> {
    return this.http.put(this.cmdsUrl, customer, httpOptions);
  }
  
}