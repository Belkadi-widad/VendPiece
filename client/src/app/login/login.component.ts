import {Component} from '@angular/core'
import {AuthentificationService, TokenPayload} from '../authenfication.service'
import { Router } from '@angular/router'
import { error } from 'util';

@Component({
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']

})
export class LoginComponent {
    credentials : TokenPayload= {
        id: 0 , 
        username : '',
        password: '', 
        Email: '', 
        service: ''

    }

    constructor(private auth: AuthentificationService , private router: Router)
    {

    }
    login(){
        this.auth.login(this.credentials).subscribe(
            ()=> { this.router.navigateByUrl('/profile'); 
            },
            err => {
                console.error(err); 
            }
        )
    }
} 
