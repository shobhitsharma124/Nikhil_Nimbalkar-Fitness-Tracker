import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { User } from './auth.model';

@Injectable()
export class AuthService{

    constructor(private http : HttpClient ){}

    private mainUser = new User('Nikhil','Nimbalkar','Pune','nsv.nimbalkar@gmail.com','7038948969','melkor','9730996489Abc!');
    private guestUser = new User('Guest','Guest','Earth','abc@xyz.com','88888888888','guest',null);
    users:User[] = [this.mainUser];

    currentuser:User;

    isLoggedIn = false;

    loginStatus:EventEmitter<boolean> = new EventEmitter();

    addUser(newUser:User){
        this.users.push(newUser);
    }

    getUsers(){
        return this.users;
    }

    performLoginAsGuest(){
        this.currentuser = this.guestUser;
        localStorage.setItem('user',JSON.stringify(this.currentuser));
        localStorage.setItem('isLoggedIn',JSON.stringify(true));
        this.isLoggedIn = true;
        this.loginStatus.emit(this.isLoggedIn);
    }

    performLogin(username:string,password:string){
        console.log("in login");
        this.users.forEach((user)=>{
            if(user.username == username){
                if(user.password == password){
                    this.currentuser = user;
                    this.isLoggedIn = true;
                    localStorage.setItem('user',JSON.stringify(this.currentuser));
                    localStorage.setItem('isLoggedIn',JSON.stringify(this.isLoggedIn));
                    this.loginStatus.emit(this.isLoggedIn);
                }
                else{
                    console.log("Incorrect Password!");
                }
            }
            else{
                console.log("Incorrect Username!");
            } 
        })
    }

    performLogout(){
        const httpOptions = {
            headers: new HttpHeaders({
              'Content-Type':  'application/json',
              Authorization: 'my-auth-token'
            })
          };
        this.isLoggedIn = false;
        this.currentuser = null;
        // localStorage.setItem('isLoggedIn',JSON.stringify(this.isLoggedIn));
        // localStorage.setItem('user',JSON.stringify({}));
        const appointments = JSON.parse(localStorage.getItem('appointments'));
        // this.http.delete("http://localhost:3004/appointments",httpOptions).subscribe((res)=>{
        //     console.log(res);
            
        // })
        for (let index = 0; index < appointments.length; index++) {
            const element = appointments[index];
            this.http.post("http://localhost:3004/appointments",element).subscribe((res)=>{
            console.log(res);
            
        })};

        this.loginStatus.emit(this.isLoggedIn);
    
        localStorage.clear();
    }

}