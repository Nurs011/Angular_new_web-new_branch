import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Title} from '@angular/platform-browser';
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss']
})
export class AdminPageComponent implements OnInit {

  constructor(public auth: AuthService,
              private router: Router,
              private title: Title) { }

  ngOnInit(): void {
    this.title.setTitle('Admin');
  }
  logout($event){
    event.preventDefault();
    this.auth.logout();
    this.router.navigate(['/admin', 'login']);

  }
}
