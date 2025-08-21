import { Component } from '@angular/core';

@Component({
  selector: 'app-remote-site-staffs',
  templateUrl: './remote-site-staffs.component.html',
  standalone: false,
  styleUrl: './remote-site-staffs.component.scss',
})
export class RemoteSiteStaffsComponent {
  clockInTime: string = '-- : --';


  // Method to handle clock-in action
  onClockIn() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    this.clockInTime = `${hours} : ${minutes}`;
  }
// --- Table Data ---
  // Sample data for the table
  headers = [
    'Date',
    'PROGRAM',
    'SITE',
    'COUNTRY',
    'SLO',
    'OPS MANAGER',
    'SHIFT',
    'PAYCODE',
    'COMMENTS',
  ];
// Sample rows for the table
  rows = [
    {
      date: new Date('2025-08-21T00:00:00Z'),
      col2: 'Training',
      col3: 'Pending',
      col4: 'New York',
      col5: 'Engineer',
      col6: 'Morning',
      col7: 'Robert',
      col8: 'Notes A',
    },
    {
      date: new Date(2025, 7, 21),
      col2: 'Meeting',
      col3: 'Completed',
      col4: 'California',
      col5: 'Analyst',
      col6: 'Evening',
      col7: 'Laura',
      col8: 'Notes B',
    },
    {
      date: new Date(2025, 7, 22),
      col2: 'Review',
      col3: 'In Progress',
      col4: 'Texas',
      col5: 'Manager',
      col6: 'Night',
      col7: 'David',
      col8: 'Notes C',
    },
  ];
// Method to format the date for display
  getFormattedDate(date: Date) {
    const weekday = date.toLocaleDateString('en-US', { weekday: 'short' });
    const day = date.getDate();
    const month = date.toLocaleString('en-US', { month: 'short' });
    const year = date.getFullYear().toString().slice(-2);
    return { weekday, day, monthYear: month + "'" + year };
  }

  // --- Column Resizing Logic ---
  private startX: number = 0;
  private startWidth: number = 0;
  private resizableElement: HTMLElement | null = null;

  startResizing(event: MouseEvent, element: HTMLElement) {
    this.startX = event.pageX;
    this.startWidth = element.offsetWidth;
    this.resizableElement = element;

    document.addEventListener('mousemove', this.resizeColumn);
    document.addEventListener('mouseup', this.stopResizing);
  }

  resizeColumn = (event: MouseEvent) => {
    if (this.resizableElement) {
      const newWidth = this.startWidth + (event.pageX - this.startX);
      this.resizableElement.style.width = newWidth + 'px';
    }
  };

  stopResizing = () => {
    document.removeEventListener('mousemove', this.resizeColumn);
    document.removeEventListener('mouseup', this.stopResizing);
    this.resizableElement = null;
  };
}
