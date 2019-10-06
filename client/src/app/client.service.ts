import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Client } from './Client';
 import {PiecesParClient} from './PiecesParClient'; 
import {PiecesLivParClients} from './PiecesLivParClients'; 
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
 
@Injectable({
  providedIn: 'root'
})
export class ClientService {   
   private clsUrl = 'http://localhost:3000/users/cls';  // URL to web api
  constructor( 
    private http: HttpClient
  ) { }
 
  getClients(): Observable<Client[]> {
    return this.http.get<Client[]>(this.clsUrl)
  }
 
  getClient(IdClient: number): Observable<Client> {
    console.log(IdClient); 
    const url = `${this.clsUrl}/${IdClient}`;
    console.log(url); 
    return this.http.get<Client>(url);
  }

  getPiecesClient(IdClient: number): Observable<PiecesParClient[]> {
    console.log(IdClient); 
    const url = `${this.clsUrl}/${IdClient}/stat`;
    console.log(url); 
    return this.http.get<PiecesParClient[]>(url);
  } 

  getPiecesLivClient(IdClient: number): Observable<PiecesLivParClients[]> {
    console.log(IdClient); 
    const url = `${this.clsUrl}/${IdClient}/stats`;
    console.log(url); 
    return this.http.get<PiecesLivParClients[]>(url);
  } 

  addClient(customer: Client): Observable<Client> {
    console.log("heeey")
    return this.http.post<Client>(this.clsUrl, customer, httpOptions);
  }
 
  deleteClient (customer: Client | number): Observable<Client> {
    const id = typeof customer === 'number' ? customer: customer.IdClient;
    const url = `${this.clsUrl}/${id}`;
 
    return this.http.delete<Client>(url, httpOptions);
  }
 
  updateClient (customer: Client): Observable<any> {
    return this.http.put(this.clsUrl, customer, httpOptions);
  }
  
}