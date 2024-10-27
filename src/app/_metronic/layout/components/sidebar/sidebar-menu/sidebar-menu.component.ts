import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar-menu',
  templateUrl: './sidebar-menu.component.html',
  styleUrls: ['./sidebar-menu.component.scss'],
})
export class SidebarMenuComponent implements OnInit {
  user: any;
  userParsed: any;
  menusItems: any;
  constructor() {}
  isChildrenArray(children: any): boolean {
    return Array.isArray(children) && children.length < 0;
  }
  ngOnInit(): void {
    this.user = localStorage.getItem('user');
    this.userParsed = JSON.parse(this.user);
    this.menusItems = JSON.parse(this.userParsed.user.profile.usrg_menus);
    console.log(this.menusItems);
  }
}
