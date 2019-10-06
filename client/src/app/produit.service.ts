import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Piece } from './Piece';


import { map} from "rxjs/operators";

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
 
@Injectable({
  providedIn: 'root'
})
export class ProduitService {   
   private piecesUrl = 'http://localhost:3000/users/pieces';  // URL to web api

  constructor( 
    private http: HttpClient
  ) { }
 
  getPieces(): Observable<Piece[]> {
    return this.http.get<Piece[]>(this.piecesUrl)
  }

  
  
  getPiecesRS(): Observable<Piece[]> {
    
    console.log("rah yadkhal lahna bssh")
    const url = `http://localhost:3000/users/rupture`;
    return this.http.get<Piece[]>(url)
    
  }
 
  getPiece(IdPiece: number): Observable<Piece> {
    console.log(IdPiece); 
    const url = `${this.piecesUrl}/${IdPiece}`;
    console.log(url); 
    return this.http.get<Piece>(url);
  }
 
  addPiece(customer: Piece): Observable<Piece> {
    console.log(customer)
    return this.http.post<Piece>(this.piecesUrl, customer, httpOptions);
  }
 
  deletePiece (customer: Piece | number): Observable<Piece> {
    const id = typeof customer === 'number' ? customer: customer.IdPiece;
    const url = `${this.piecesUrl}/${id}`;
 
    return this.http.delete<Piece>(url, httpOptions);
  }
 
  updatePiece (customer: Piece): Observable<any> {
    return this.http.put(this.piecesUrl, customer, httpOptions);
  }
}