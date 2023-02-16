import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../Model/employee';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  url: string = 'http://localhost:6262';
  constructor(private empproxy: HttpClient) {}
  public getAllEmployees(): Observable<Employee[]> {
    return this.empproxy.get<Employee[]>(this.url);
  }
}
