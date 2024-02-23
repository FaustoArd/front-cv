import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgIconsModule } from '@ng-icons/core';
import { heroUsers } from '@ng-icons/heroicons/outline';
import { NgxCaptureService } from 'ngx-capture';
import { tap } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
icon!:any;
@ViewChild ('screen', { static:true})  screen: any;
toBeDownloaded:boolean= false;
ngOnInit(): void {
  
}

  constructor(private captureService:NgxCaptureService){}

  captureScreen():void{
   
    this.captureService
    .getImage(this.screen.nativeElement, true)
    .pipe(
    
      tap((img) => this.captureService.downloadImage(img))
    )
    .subscribe();
     
  }

  downloadValue(){
    this.toBeDownloaded = true;
  }
 
}
