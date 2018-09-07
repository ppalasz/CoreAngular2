import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpModule } from "@angular/http";
import { AppComponent } from "./app.component";
import { ApiDropdownComponent } from "./api-dropdown/api-dropdown.component";
import { ValuesService } from "./services/values.service";
import { TestComponentComponent } from './test-component/test-component.component';
import { NowComponent } from './now/now.component';


@NgModule({
  declarations: [
    AppComponent,
    ApiDropdownComponent,
    TestComponentComponent,
    NowComponent
  ],
  imports: [
    BrowserModule, HttpModule
  ],
  providers: [ValuesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
