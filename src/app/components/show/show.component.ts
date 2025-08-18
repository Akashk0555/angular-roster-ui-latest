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
  { 
    name: 'Michael Johnson', site: 'New York', status: 'Approved by SLO', 
    role: 'Engineer', department: 'IT', shift: 'Morning', manager: 'Robert', 
    email: 'michael.johnson@example.com', phone: '123-456-7890' 
  },
  { 
    name: 'Jane Smith', site: 'California', status: 'Pending Approval', 
    role: 'Analyst', department: 'Finance', shift: 'Evening', manager: 'Laura', 
    email: 'jane.smith@example.com', phone: '987-654-3210' 
  },
  { 
    name: 'John Doe', site: 'Texas', status: 'Rejected', 
    role: 'Technician', department: 'Maintenance', shift: 'Night', manager: 'Chris', 
    email: 'john.doe@example.com', phone: '555-123-4567' 
  },
  { 
    name: 'Emily Davis', site: 'Chicago', status: 'Approved by OPS', 
    role: 'HR', department: 'Human Resources', shift: 'Morning', manager: 'Sarah', 
    email: 'emily.davis@example.com', phone: '444-987-6543' 
  },
  { 
    name: 'David Wilson', site: 'Florida', status: 'Approved by SLO', 
    role: 'Supervisor', department: 'Production', shift: 'Evening', manager: 'Mark', 
    email: 'david.wilson@example.com', phone: '333-222-1111' 
  },
  { 
    name: 'David Wilson', site: 'Florida', status: 'Approved by SLO', 
    role: 'Supervisor', department: 'Production', shift: 'Evening', manager: 'Mark', 
    email: 'david2.wilson@example.com', phone: '333-222-1112' 
  },
  { 
    name: 'David Wilson', site: 'Florida', status: 'Approved by SLO', 
    role: 'Supervisor', department: 'Production', shift: 'Evening', manager: 'Mark', 
    email: 'david3.wilson@example.com', phone: '333-222-1113' 
  },
  { 
    name: 'David Wilson', site: 'Florida', status: 'Approved by SLO', 
    role: 'Supervisor', department: 'Production', shift: 'Evening', manager: 'Mark', 
    email: 'david4.wilson@example.com', phone: '333-222-1114' 
  },
  { 
    name: 'David Wilson', site: 'Florida', status: 'Approved by SLO', 
    role: 'Supervisor', department: 'Production', shift: 'Evening', manager: 'Mark', 
    email: 'david5.wilson@example.com', phone: '333-222-1115' 
  }
];
}
