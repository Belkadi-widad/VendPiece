import {Component} from '@angular/core'
import {AuthentificationService, TokenPayload} from '../authenfication.service'
import { Router } from '@angular/router'
import { error } from 'util';

@Component({
    templateUrl: './register.component.html',  
    styleUrls: ['./register.component.css']


})

export class RegisterComponent {
    credentials : TokenPayload= {
        id: 0 , 
        username : '',
        password: '', 
        Email: '', 
        service :''
    }

    constructor(private auth: AuthentificationService , private router: Router)
    {

    }
    register(){
        this.auth.register(this.credentials).subscribe(
            ()=> { this.router.navigateByUrl('/profile')
            },
            err => {
                console.error(err); 
            }
        )
    }
} 
