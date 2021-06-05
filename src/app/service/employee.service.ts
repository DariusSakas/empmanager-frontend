import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from '../model/employee';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  private backendUrl = environment.apiBaseUrl;
  constructor(private http: HttpClient) {}
  public getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.backendUrl);
  }
  public addEmployee(employee: Employee): Observable<Employee> {
    return this.http.post<Employee>(this.backendUrl, employee);
  }
  public updateEmployee(employee: Employee): Observable<Employee> {
    return this.http.put<Employee>(this.backendUrl, employee);
  }
  public deleteEmployee(employeeId: number): Observable<void> {
    return this.http.delete<void>(`${this.backendUrl}/${employeeId}`);
  }
}
