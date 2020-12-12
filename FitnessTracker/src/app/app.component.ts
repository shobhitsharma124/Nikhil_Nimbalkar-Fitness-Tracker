import { Component, OnChanges, OnInit } from '@angular/core';
import { AuthService } from './auth/auth.service';
import { SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'FitnessTracker';
  isLoggedIn:boolean = false;

  constructor(private authService : AuthService){

  }
  ngOnInit(){
    this.authService.loginStatus.subscribe((status)=>{
      this.isLoggedIn = status;
    });
    if(localStorage.getItem('user')==null){
      localStorage.setItem('user',JSON.stringify({}));
    }
  }




}
