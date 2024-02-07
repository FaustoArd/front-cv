import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgIconsModule } from '@ng-icons/core';
import { heroUsers } from '@ng-icons/heroicons/outline';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
icon!:any;

ngOnInit(): void {
  
}

  constructor(private http:HttpClient){}

  
 
}
