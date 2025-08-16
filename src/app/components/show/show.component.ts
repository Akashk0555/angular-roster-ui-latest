import { Component } from '@angular/core';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrl: './show.component.scss',
  standalone:false
})
export class ShowComponent {
name:string='Akash Kumar';
isEmployee = false; 
isCollapsed=false;
toggleTable(): void {
    this.isCollapsed = !this.isCollapsed;
  }

employees = [
  { name: 'Michael Johnson', site: 'New York', status: 'Approved by SLO', role: 'Engineer', department: 'IT', shift: 'Morning', manager: 'Robert' },
  { name: 'Jane Smith', site: 'California', status: 'Pending Approval', role: 'Analyst', department: 'Finance', shift: 'Evening', manager: 'Laura' },
  { name: 'John Doe', site: 'Texas', status: 'Rejected', role: 'Technician', department: 'Maintenance', shift: 'Night', manager: 'Chris' },
  { name: 'Emily Davis', site: 'Chicago', status: 'Approved by OPS', role: 'HR', department: 'Human Resources', shift: 'Morning', manager: 'Sarah' },
  { name: 'David Wilson', site: 'Florida', status: 'Approved by SLO', role: 'Supervisor', department: 'Production', shift: 'Evening', manager: 'Mark' },
   { name: 'David Wilson', site: 'Florida', status: 'Approved by SLO', role: 'Supervisor', department: 'Production', shift: 'Evening', manager: 'Mark' },
    { name: 'David Wilson', site: 'Florida', status: 'Approved by SLO', role: 'Supervisor', department: 'Production', shift: 'Evening', manager: 'Mark' },
     { name: 'David Wilson', site: 'Florida', status: 'Approved by SLO', role: 'Supervisor', department: 'Production', shift: 'Evening', manager: 'Mark' },
      { name: 'David Wilson', site: 'Florida', status: 'Approved by SLO', role: 'Supervisor', department: 'Production', shift: 'Evening', manager: 'Mark' }
];
}
