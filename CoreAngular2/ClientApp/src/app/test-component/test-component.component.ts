import { BrowserModule } from "@angular/platform-browser";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { Pipe, PipeTransform } from "@angular/core";
import { Component, OnInit } from "@angular/core";
import { DatePipe } from "@angular/common";

@Component({
  selector: 'app-test-component',
  templateUrl: './test-component.component.html',
  styleUrls: ['./test-component.component.css']
  
})


export class TestComponentComponent implements OnInit {
  
  public today: Date;
  

  constructor() {
    
    this.today = new Date();
    
    setInterval(() => {
      this.today = new Date();
    }, 1000);
  }

  ngOnInit() {
  }

}
