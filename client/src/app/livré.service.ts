import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Livré} from './Livré';
 
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
 
@Injectable({
  providedIn: 'root'
})
export class LivréService {   
   private cmdsUrl = 'http://localhost:3000/users/li';  // URL to web api

  constructor( 
    private http: HttpClient
  ) { }
 
  getLivrés(): Observable<Livré[]> {
    return this.http.get<Livré[]>(this.cmdsUrl)
  }
 
  getLivré(num_bl: number,num_p : number ): Observable<Livré> {
    const url = `${this.cmdsUrl}/${num_bl}/${num_p} `;
    console.log(url + " holaaaa getLivré"); 

    return this.http.get<Livré>(url);
  }
 
  addLivré(customer: Livré): Observable<Livré> {
    console.log("heeey")
    return this.http.post<Livré>(this.cmdsUrl, customer, httpOptions);
  }
 
  deleteLivré (customer: Livré| number, customer1: Livré | number ): Observable<Livré> {
    const id = typeof customer === 'number' ? customer: customer.num_bl;
    const id2 = typeof customer1 === 'number' ? customer: customer1.num_p;
    const url = `${this.cmdsUrl}/${id}/${id2}`;
 
    return this.http.delete<Livré>(url, httpOptions);
    
  }
 
  updateLivré (customer: Livré): Observable<any> {
    return this.http.put(this.cmdsUrl, customer, httpOptions);
  }
  
}