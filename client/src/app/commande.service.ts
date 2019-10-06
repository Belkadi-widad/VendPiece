import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Commande } from './Commande';
 
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
 
@Injectable({
  providedIn: 'root'
})
export class CommandeService {   
   private cmdsUrl = 'http://localhost:3000/users/cmds';  // URL to web api

  constructor( 
    private http: HttpClient
  ) { }
 
  getCommandes(): Observable<Commande[]> {
    return this.http.get<Commande[]>(this.cmdsUrl)
  }
 
  getCommande(IdComd: number): Observable<Commande> {
    console.log(IdComd); 
    const url = `${this.cmdsUrl}/${IdComd}`;
    console.log(url); 
    return this.http.get<Commande>(url);
  }

  getCommandesNL(): Observable<Commande[]> {
    const url =   `${this.cmdsUrl}/NL`;

    return this.http.get<Commande[]>(url)
  }
 
  addCommande(customer: Commande): Observable<Commande> {
    console.log("heeey")
    return this.http.post<Commande>(this.cmdsUrl, customer, httpOptions);
  }
 
  deleteCommande (customer: Commande | number): Observable<Commande> {
    const id = typeof customer === 'number' ? customer: customer.IdComd;
    const url = `${this.cmdsUrl}/${id}`;
 
    return this.http.delete<Commande>(url, httpOptions);
  }
 
  updateCommande (customer: Commande): Observable<any> {
    return this.http.put(this.cmdsUrl, customer, httpOptions);
  }
  
}