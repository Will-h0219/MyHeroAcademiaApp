import { Component } from '@angular/core';

interface Option {
  title: string,
  icon: string,
  route: string
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  menuOptions: Option[] = [
    {
      title: 'Characters',
      icon: 'list',
      route: '/home/characters'
    },
    {
      title: 'Search',
      icon: 'search',
      route: '/home/search'
    },
    {
      title: 'Login',
      icon: 'login',
      route: '/auth/login'
    }
  ]

  constructor() { }

}
