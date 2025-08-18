import { Component, Input } from '@angular/core';

interface MenuItem {
  title: string;
  icon: string;
  expanded: boolean;
  submenus?: { title: string, route?: string }[];
}

@Component({
  selector: 'app-side-bar',
  standalone: false,
  templateUrl: './side-bar.html',
  styleUrl: './side-bar.scss'
})
export class SideBar {
  @Input() isCollapsed = false;

  menuItems: MenuItem[] = [
    {
      title: 'Dashboard',
      icon: 'fas fa-home',
      expanded: false,
      submenus: [
        { title: 'Overview', route: 'dashboard/overview' },
        { title: 'Stats', route: 'dashboard/stats' }   // ✅ Added route
      ]
    },
    {
      title: 'Settings',
      icon: 'fas fa-cog',
      expanded: false,
      submenus: [
        { title: 'Profile', route: 'settings/profile' },   // you can add routes here too if needed
        { title: 'Account', route: 'settings/account' }
      ]
    }
  ];

  toggleSubmenu(item: MenuItem) {
    item.expanded = !item.expanded;
  }
}
