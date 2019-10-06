import {Injectable} from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable, of} from 'rxjs' 
import {map} from 'rxjs/operators'
import {Router} from '@angular/router'
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';

export interface UserDetails {
    id : number 
    username : string
    password : string
    Email :string
    service : string
    exp: number
    iat :  number

}
interface TokenResponse{
    token : string
}

export interface TokenPayload {
    id : number 
    username : string
    password : string
    Email :string
    service : string

}

@Injectable()
 export class AuthentificationService {
 private token : string 

 constructor(private http: HttpClient , private router : Router ){}

private saveToken(token : string) : void {
    localStorage.setItem('userToken',token); 
    this.token=token 
}

private getToken() : string {
    if(!this.token)
    {
        this.token=localStorage.getItem('userToken')
    }
    return this.token
}

public getUserDetails() : UserDetails{
const token =this.getToken()
let payload 
if(token)
{
    payload=token.split('.')[1]
    payload=window.atob(payload)
    return JSON.parse(payload)
}
else {
    return null; 
}

}

public isLoggedIn() : boolean
{
    const user = this.getUserDetails();
    if(user){
        return user.exp > Date.now() /1000
    }
    else {
        return false ; 
    }
}
public ServiceComm() : boolean
{
    const user = this.getUserDetails();
    if(user)
    {  if(user.service=="Service commerciale" && this.isLoggedIn()){
        return true}
        else { return false ; }
       
    }

    else {
        return false ; 
    }
}

public Magasinier() : boolean
{
    const user = this.getUserDetails();
    if(user)
{
    if(user.service=="Magasinier" && this.isLoggedIn() ){
        return true
    }
}
    return false ; 
}

public ServiceComp() : boolean
{
    const user = this.getUserDetails();
    if(user)
    {  if(user.service=="Service comtabilite" && this.isLoggedIn())
      {
        return true}
        else { return false ; }
       
    }

    else {
        return false ; 
    }
}

public register(user : TokenPayload) : Observable<any>
{
console.log("dkhal XD");
const base = this.http.post(`/users/register`,user)
const request =base.pipe( 
    map((data : TokenResponse)=>
    {
        if(data.token)
        { 
            this.saveToken(data.token)
        }
        return data 
    })
)
return request

}
public login(user : TokenPayload) : Observable<any>
{
console.log("dkhal XD");
const base = this.http.post(`/users/login`,user)
const request =base.pipe( 
    
    map((data : TokenResponse)=>
    {   
        if(data.token)
        {   
            this.saveToken(data.token)
        }
        return data 
    })
)
return request

}

public profile() : Observable<any>{


    
    return this.http.get(`/users/profile`,{
       headers : {Authorization : `${this.getToken()}` }
    })
}

public logOut() : void {

    this.token=''
    window.localStorage.removeItem('userToken')
    this.router.navigateByUrl('/')
}


 }
