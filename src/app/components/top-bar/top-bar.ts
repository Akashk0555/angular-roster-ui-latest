import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-top-bar',
  standalone: false,
  templateUrl: './top-bar.html',
  styleUrl: './top-bar.scss'
})
export class TopBar {
@Output() toggle = new EventEmitter<void>();

  toggleSidebar() {
    this.toggle.emit();
  }
}
