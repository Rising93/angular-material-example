import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.css']
})
export class SidenavListComponent implements OnInit {
  links = [
    { path: '/', icon: 'home', title: 'Welcome'},
    { path: '/training', icon: 'fitness_center', title: 'Training'},
    { path: '/signup', icon: 'person_add', title: 'Sign Up'},
    { path: '/login', icon: 'face', title: 'Login'},
    { path: '/logout', icon: 'exit_to_app', title: 'Logout'},
  ];
  @Output() sideNavClose = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  onCloseSideNav() {
    this.sideNavClose.emit();
  }
}
