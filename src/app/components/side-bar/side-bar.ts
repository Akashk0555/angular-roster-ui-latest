import { Component, Input } from '@angular/core';
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
 @Input() isCollapsed = false;

  menuItems = [
    {
      title: 'Dashboard',
      icon: 'fas fa-home',
      expanded: false,
      submenus: [
        { title: 'Overview' },
        { title: 'Stats' }
      ]
    },
    {
      title: 'Settings',
      icon: 'fas fa-cog',
      expanded: false,
      submenus: [
        { title: 'Profile' },
        { title: 'Account' }
      ]
    }
  ];

  toggleSubmenu(item: any) {
    item.expanded = !item.expanded;
  }
}
