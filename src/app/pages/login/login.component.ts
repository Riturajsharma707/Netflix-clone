import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

declare var google : any;
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  private router = inject(Router);
  ngOnInit(): void {
    google.accounts.id.initialize({
        client_id:'931983524989-bgjrp6at0lk1sd6l9ff6uuch68e7ap12.apps.googleusercontent.com',
        callback:(res:any)=>this.handleLogin(res),
      })

      google.accounts.id.renderButton(document.getElementById("google-btn"),{
        theme:'filled_blue',
        size:'large',
        shape:'rectangel',
        width:350
      })
  }

  private decodeToken(token:string){
    return JSON.parse(atob(token.split(".")[1])); 
  }

  handleLogin(response:any){
    if(response){
      //decode the token
      const payload = this.decodeToken(response.credential);
      //store in the session
      sessionStorage.setItem("loggedInUser",JSON.stringify(payload));
      //navigate to home/browser
      this.router.navigate(['browse'])
    }

  }

}
