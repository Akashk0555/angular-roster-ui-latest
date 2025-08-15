import { Component } from '@angular/core';
interface MenuItem {
  title: string;
  icon: string;
  expanded: boolean;
  submenus?: { title: string }[];
}
@Component({
  selector: 'app-side-bar',
  standalone: false,
  templateUrl: './side-bar.html',
  styleUrl: './side-bar.scss'
})
export class SideBar {
isCollapsed = false;

  menuItems: MenuItem[] = [
    {
      title: 'Home',
      icon: 'fas fa-home',
      expanded: false,
      submenus: [
        { title: 'Dashboard' },
        { title: 'Analytics' }
      ]
    },
    {
      title: 'Profile',
      icon: 'fas fa-user',
      expanded: false,
      submenus: [
        { title: 'View Profile' },
        { title: 'Edit Profile' }
      ]
    },
    {
      title: 'Settings',
      icon: 'fas fa-cog',
      expanded: false,
      submenus: [
        { title: 'General' },
        { title: 'Security' }
      ]
    }
  ];

  toggleSidebar() {
    this.isCollapsed = !this.isCollapsed;
  }

  toggleSubmenu(item: MenuItem) {
    item.expanded = !item.expanded;
  }
}
