import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Employee {
  private baseUrl = 'http://localhost:8080/employees';

  constructor(private http: HttpClient) {}

  getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.baseUrl);
  }

  getEmployeeById(id: number): Observable<Employee> {
    return this.http.get<Employee>(`${this.baseUrl}/${id}`);
  }

  addComment(
    employeeId: number,
    comment: Partial<Comment>
  ): Observable<Comment> {
    return this.http.post<Comment>(
      `${this.baseUrl}/${employeeId}/comments`,
      comment
    );
  }

  deleteComment(employeeId: number, commentId: number): Observable<void> {
    return this.http.delete<void>(
      `${this.baseUrl}/${employeeId}/comments/${commentId}`
    );
  }
}
