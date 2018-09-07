import { BrowserModule } from "@angular/platform-browser";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { Pipe, PipeTransform } from "@angular/core";
import { Component, OnInit, Attribute } from "@angular/core";
import { DatePipe } from "@angular/common";
import { NgModule } from "@angular/core";


@Component({
  selector: 'app-now',
  templateUrl: "./now.component.html",
  styleUrls: ["./now.component.css"]
})

export class NowComponent implements OnInit {

  public format;
  public today: Date;
  

  constructor(@Attribute("format") format) {
    this.format = format;
   

    setInterval(() => {
      this.today = new Date();
    }, 1);
  }



  ngOnInit() {
  }
} 
