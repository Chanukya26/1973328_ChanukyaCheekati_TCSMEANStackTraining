import { Component, OnInit } from '@angular/core';
import{EmployeeService} from'../employee.service';
import{HttpClient} from '@angular/common/http';
import { HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
   title='JSon to Table Example';
   
  constructor(public empSer:EmployeeService) { }

  ngOnInit(): void {
  }
  storeUser(empRef:any){
    console.log(empRef)
    this.empSer.storeEmployee(empRef);
  }
  
}
