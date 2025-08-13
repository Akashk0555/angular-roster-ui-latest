import {
  Component,
  ElementRef,
  OnInit,
  AfterViewInit,
  ViewChild,
  ChangeDetectorRef,
  HostListener
} from '@angular/core';
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
export class Dashboard implements OnInit, AfterViewInit {

  @ViewChild('leftScroll') leftScroll!: ElementRef;
  @ViewChild('rightScroll') rightScroll!: ElementRef;

  employees: Employee[] = [];
  comments: any;
  commentsbydate: any;
  days: string[] = [];
  commentsMap: { [employeeId: number]: { [date: string]: Comment[] } } = {};
  visiblePopups: { [key: string]: boolean } = {};
  activePopup: { id: number; date: string } | null = null;
  isCollapsed = false;

  constructor(
    private employeeService: EmployeeService,
    private modalService: NgbModal,
    private cd: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.generateDays();
    this.loadAllData(); // ✅ Load everything on page load
  }

  ngAfterViewInit(): void {
    // Bind scroll events after DOM is ready
    setTimeout(() => {
      if (this.leftScroll && this.rightScroll) {
        const leftEl = this.leftScroll.nativeElement;
        const rightEl = this.rightScroll.nativeElement;

        leftEl.addEventListener('scroll', () => {
          rightEl.scrollTop = leftEl.scrollTop;
        });

        rightEl.addEventListener('scroll', () => {
          leftEl.scrollTop = rightEl.scrollTop;
        });
      }
    });
  }

  toggleTable(): void {
    this.isCollapsed = !this.isCollapsed;
  }

  // Generate all days of the current month
  private generateDays(): void {
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth();
    const totalDays = new Date(year, month + 1, 0).getDate();

    this.days = Array.from({ length: totalDays }, (_, i) => {
      const date = new Date(year, month, i + 1);
      return date.toISOString().split('T')[0];
    });
  }

  // Load all employees and their comments for the month
  private loadAllData(): void {
    this.employeeService.getEmployees().subscribe({
      next: (empData) => {
        this.employees = empData;

        // Fetch comments for all employees & days
        const requests: Promise<void>[] = [];
        for (const employee of this.employees) {
          for (const day of this.days) {
            requests.push(
              new Promise((resolve) => {
                this.employeeService.getCommentsByEmployeeAndDate(employee.id, day).subscribe({
                  next: (comments: Comment[]) => {
                    if (!this.commentsMap[employee.id]) {
                      this.commentsMap[employee.id] = {};
                    }
                    this.commentsMap[employee.id][day] = comments;
                    resolve();
                  },
                  error: (err) => {
                    console.error(`Error fetching comments for ${employee.id} on ${day}`, err);
                    resolve();
                  },
                });
              })
            );
          }
        }

        // Detect changes after all requests finish
        Promise.all(requests).then(() => {
          this.cd.detectChanges();
        });
      },
      error: (err) => {
        console.error('Error fetching employees:', err);
      },
    });
  }

  togglePopup(id: number, date: string): void {
    const key = `${id}_${date}`;
    this.visiblePopups[key] = !this.visiblePopups[key];
  }
  

  openAddComment(id: number, date: string): void {
    // Refresh comments for that date
    this.employeeService.getCommentsByEmployeeAndDate(id, date).subscribe({
      next: (data) => {
        if (!this.commentsMap[id]) {
          this.commentsMap[id] = {};
        }
        this.commentsMap[id][date] = data;
      }
    });

    this.employeeService.getComment(id).subscribe({
      next: (data) => {
        this.comments = data;
      }
    });

    const modalRef = this.modalService.open(AddComment, {
      windowClass: 'trans-back',
      backdrop: 'static',
    });

    modalRef.componentInstance.idFromDashboard = id;
    modalRef.componentInstance.dateFromDashboard = date;
  }

  showPopup(id: number, date: string): void {
    this.activePopup = { id, date };
  }

  hidePopup(): void {
    this.activePopup = null;
  }

   isAnyPopupVisible(): boolean {
  return Object.values(this.visiblePopups).some(v => v);
}

closeAllPopups() {
  this.visiblePopups = {};
}
}
