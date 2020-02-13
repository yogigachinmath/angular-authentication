import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { first } from 'rxjs/operators';
import { NewsService } from '../services/news.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  loginData = {};
  loading = false;
  returnUrl = '';
  submitted = false;
  loginForm: FormGroup;
  isChecked = false;

  constructor(
    // private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService,
    private newsservice: NewsService
  ) { }

  ngOnInit() {
    // if (this.authService.isLogged) {
    //   this.router.navigate(['/']);
    // }
    // console.log(this.authService.isLogged, 'loggin component');
  }

  toggleVisibility(e) {
    if (e.target.checked) {
      this.isChecked = true;
    } else { this.isChecked = false; }
  }

  login() {
    this.submitted = true;
    this.loading = true;
    this.authService.login(this.loginData, this.isChecked).pipe(first()).subscribe(response => {
      this.authService.isLogged = true ;
      this.router.navigate(['']);
    }, err => {
      console.log(err);
      this.loading = false;
    });
  }
}
