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
  comments: any;
  commentsbydate: any;
  days: string[] = [];
  constructor(
    private employeeService: EmployeeService,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth(); // 0 = Jan

    // Get total days in the month
    const totalDays = new Date(year, month + 1, 0).getDate();
    this.days = Array.from({ length: totalDays }, (_, i) => {
      const date = new Date(year, month, i + 1);
      // console.log(date)
      const localDateString = date.toISOString().split('T')[0];
      return localDateString;
    });

    this.loadEmployees();
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

  // API for loading Employees
  loadEmployees(): void {
    this.employeeService.getEmployees().subscribe({
      next: (data) => {
        this.employees = data;
        this.loadAllComments(); // ✅ Load comments only after employees are ready
      },
      error: (err) => {
        console.error('Error fetching employees:', err);
      },
    });
  }

  commentsMap: { [employeeId: number]: { [date: string]: Comment[] } } = {};
  loadCommentByDate(id: number, date: string): void {
    this.employeeService.getCommentsByEmployeeAndDate(id, date).subscribe({
      next: (data: Comment[]) => {
        if (!this.commentsMap[id]) {
          this.commentsMap[id] = {};
        }
        this.commentsMap[id][date] = data;
      },
      error: (err) => {
        console.error('Error fetching comments:', err);
      },
    });
  }

  loadAllComments(): void {
    for (const employee of this.employees) {
      for (const day of this.days) {
        this.loadCommentByDate(employee.id, day);
      }
    }
  }

  visiblePopups: { [key: string]: boolean } = {};

  togglePopup(id: number, date: string): void {
    const key = `${id}_${date}`;
    this.visiblePopups[key] = !this.visiblePopups[key];
  }

  openAddComment(id: number, date: string) {
    this.loadCommentByDate(id, date);
    //console.log(`🗓️ Date clicked: ${date}`);

    this.employeeService.getComment(id).subscribe({
      next: (data) => {
        this.comments = data;
        console.log(this.comments);
      },
      error: (err) => {
        console.error('Error fetching employees:', err);
      },
    });
    const modalRef = this.modalService.open(AddComment, {
      windowClass: 'trans-back',
      backdrop: 'static',
    });

    modalRef.componentInstance.idFromDashboard = id;
    modalRef.componentInstance.dateFromDashboard=date;
  }

  activePopup: { id: number; date: string } | null = null;

showPopup(id: number, date: string): void {
  this.activePopup = { id, date };
}

hidePopup(): void {
  this.activePopup = null;
}

}
