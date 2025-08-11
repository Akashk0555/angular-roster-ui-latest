import { Component, OnInit } from '@angular/core';
import { Employee } from '../../service/employee';

@Component({
  selector: 'app-dashboard',
  standalone: false,
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard implements OnInit {
  employees: Employee[] = [];
  selectedEmployee: Employee | null = null;
  newCommentText: string = '';
  newCommentAuthor: string = '';

  constructor(private employeeService: Employee) {}

  ngOnInit(): void {
    this.loadEmployees();
    console.log(this.employees);
  }

  loadEmployees(): void {
    this.employeeService.getEmployees().subscribe({
      next: (data) => {
        this.employees = data;
      },
      error: (err) => {
        console.error('Error fetching employees:', err);
      },
    });
  }
}
