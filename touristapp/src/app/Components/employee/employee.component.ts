import { Component } from '@angular/core';
import { Employee } from 'src/app/Model/employee';
import { EmployeeService } from 'src/app/Services/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
})
export class EmployeeComponent {
  employees: Employee[] = [];

  ngOnInit(): void {
    this.service.getAllEmployees().subscribe((data: Employee[]) => {
      this.employees = data;
    });
  }

  constructor(private service: EmployeeService) {}
}
