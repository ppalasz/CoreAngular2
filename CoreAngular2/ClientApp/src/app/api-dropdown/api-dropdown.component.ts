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

  constructor(public valuesService: ValuesService) {
  }


  ngOnInit() {
    this.valuesService.getAllValues().subscribe(values => this.values = values);
  }
}
