import { Component, Inject } from '@angular/core';


@Component({
  selector: 'app-open-shifts',
  standalone: false,
  templateUrl: './open-shifts.html',
  styleUrl: './open-shifts.scss'
})
export class OpenShifts {
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
  

   getFormattedDate(date: Date) {
    const weekday = date.toLocaleDateString('en-US', { weekday: 'short' });
    const day = date.getDate();
    const month = date.toLocaleString('en-US', { month: 'short' });
    const year = date.getFullYear().toString().slice(-2);
    return { weekday, day, monthYear: month + "'" + year };
  }

}
