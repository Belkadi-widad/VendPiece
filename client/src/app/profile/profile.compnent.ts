import{Component}  from '@angular/core'
import {AuthentificationService, UserDetails} from '../authenfication.service'

@Component(
    {
        templateUrl : './profile.component.html'
    }
)
export class ProfileComponent {
    details : UserDetails
    constructor (private auth:AuthentificationService){}
        ngOnInit() {
            this.auth.profile().subscribe(
                user => {
                    this.details = user ; 
                }, 
                err=> {
                    console.error(err); 
                }
            )
        }
}
