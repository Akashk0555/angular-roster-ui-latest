import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Employee } from '../../models/employee.model';
import { EmployeeService } from '../../service/employeeService';
import { Comment } from '../../models/comment.model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddComment } from '../add-comment/add-comment';
@Component({
  selector: 'app-dashboard',
  standalone: false,
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard implements OnInit {
  @ViewChild('leftScroll') leftScroll!: ElementRef;
  @ViewChild('rightScroll') rightScroll!: ElementRef;

  employees: Employee[] = [];
  days: string[] = [];
  //  employees: any ;
  constructor(
    private employeeService: EmployeeService,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {
    this.loadEmployees();
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth(); // 0 = Jan

    // Get total days in the month
    const totalDays = new Date(year, month + 1, 0).getDate();

    // Format dates as dd-MMM-yyyy
    const formatter = new Intl.DateTimeFormat('en-GB', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
    });

    this.days = Array.from({ length: totalDays }, (_, i) => {
      const date = new Date(year, month, i + 1);
      return formatter.format(date).replace(/ /g, '-'); // dd-MMM-yyyy
    });

    //  const commentPayload: Comment = {
    //     author: 'Test User',
    //     text: 'This is a test comment', // or commentText if your backend expects it
    //     employeeId: 1,
    //     commentDate: '2025-08-11',
    //   };

    //   this.employeeService.addComment(1, commentPayload).subscribe({
    //     next: (response) => {
    //       console.log('✅ Comment added successfully:', response);
    //     },
    //     error: (err) => {
    //       console.error('❌ Error adding comment:', err);
    //     },
    //   });
  }
  isCollapsed = false;

  toggleTable() {
    this.isCollapsed = !this.isCollapsed;
  }

  ngAfterViewInit() {
    const leftEl = this.leftScroll.nativeElement;
    const rightEl = this.rightScroll.nativeElement;

    leftEl.addEventListener('scroll', () => {
      rightEl.scrollTop = leftEl.scrollTop;
    });

    rightEl.addEventListener('scroll', () => {
      leftEl.scrollTop = rightEl.scrollTop;
    });
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

  openAddComment(id:number) {
    const modalRef = this.modalService.open(AddComment, {
      windowClass: 'trans-back',
      backdrop: 'static',
    });

    modalRef.componentInstance.idFromDashboard=id
  }
}
