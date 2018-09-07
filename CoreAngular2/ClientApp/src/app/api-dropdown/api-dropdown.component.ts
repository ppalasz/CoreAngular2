import { Component, OnInit } from "@angular/core";
import { NgModule } from "@angular/core";
import { ValuesService } from "../../app/services/values.service";

@Component({
  selector: "api-dropdown",
  templateUrl: "./api-dropdown.component.html",
  styleUrls: ["./api-dropdown.component.css"]
})



@NgModule({
  declarations: [
    
  ],
  imports: [
    
  ],
 
  
})
  
export class ApiDropdownComponent implements OnInit {
  
  public values;
  public selectedSku = 1;

  constructor(public valuesService: ValuesService) {
    setInterval(() => {
      this.valuesService.getAllValues().subscribe(values => this.values = values);
    }, 2000);
  }


  ngOnInit() {
    this.valuesService.getAllValues().subscribe(values => this.values = values);
  }
}
