import { Component, OnInit } from '@angular/core';
import { Client } from '../Client';
import { ClientService } from '../client.service';
 
import { Location } from '@angular/common';
 
@Component({
  selector: 'app-add-cmd',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css']
})
 
export class AddClientComponent{
 
  client = new Client();
  submitted = false;
 
  constructor(
    private clientService: ClientService,
    private location: Location
  ) { }
 
  newClient(): void {
    this.submitted = false;
    this.client = new Client();
  }
 
 addClient() {
   this.submitted = true;
   console.log("heeey2")

   this.save();
 }
 
  goBack(): void {
    this.location.back();
  }
 
  private save(): void {
    this.clientService.addClient(this.client)
        .subscribe();
  }
}