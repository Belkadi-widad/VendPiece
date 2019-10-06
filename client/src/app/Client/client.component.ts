import { Component, OnInit } from '@angular/core';
import { Client } from '../Client';
import { ClientService } from '../client.service';
import { DataSource } from '@angular/cdk/collections';

 
@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
   styleUrls: ['./client.component.css']
})
 
export class ClientComponent // implements OnInit 
{
 
 clients: Client[];
 
  constructor(private clientService: ClientService) {}
  dataSource = new ClientDataSource(this.clientService);
  displayedColumns = ['IdClient','NomCl','PrenomCl' ,'AdressCl','Email'];
 
 /* ngOnInit(): void {
     this.getClients();
  }
*/
  getClients() {
    return this.clientService.getClients()
               .subscribe(
                 pieces => {
                  console.log(pieces);
                  this.clients = pieces
                 }
                );
 }
}

export class ClientDataSource extends DataSource<any> {
  constructor(private api: ClientService) {
    super()
  }

  connect() {
    return this.api.getClients()
  }

  disconnect() {

  }
}