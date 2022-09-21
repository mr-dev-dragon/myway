import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  Showmenu:boolean;
  Showmenu1:boolean;
  Showmenu2:boolean;
  Showmenu3:boolean;

  constructor() {
    
    this.Showmenu =false;
    this.Showmenu1 =false;
    this.Showmenu2 =false;
    this.Showmenu3 =false;
    
   }

  ngOnInit(): void {
  }

}
