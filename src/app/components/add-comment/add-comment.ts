import { Component, Input } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { EmployeeService } from '../../service/employeeService';

@Component({
  selector: 'app-add-comment',
  standalone: false,
  templateUrl: './add-comment.html',
  styleUrl: './add-comment.scss',
})
export class AddComment {
  rosterForm!: FormGroup;
  maxChars = 1000;
  remainingChars = this.maxChars;
  @Input() idFromDashboard: any;
  constructor(private fb: FormBuilder, private activeModal: NgbActiveModal,
    private employeeService:EmployeeService
  ) {}

  ngOnInit() {
    this.rosterForm = this.fb.group({
      author: ['Akash'],
      text: [''],
      commentDate: ['1990-08-11'],
    });

    this.rosterForm.get('comment')?.valueChanges.subscribe((value) => {
      const length = value?.length || 0;
      this.remainingChars = this.maxChars - length;
    });

    console.log(this.idFromDashboard)
    
  }

  cancel() {
    this.activeModal.dismiss();
  }

  submit() {
    
    const formValue = this.rosterForm.value;
    console.log(formValue)
    this.employeeService.addComment(this.idFromDashboard, formValue).subscribe({
        next: (response) => {
          console.log('✅ Comment added successfully:', response);
        },
        error: (err) => {
          console.error('❌ Error adding comment:', err);
        },
      });

    
  }
}
