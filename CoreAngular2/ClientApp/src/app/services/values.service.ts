import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { map } from "rxjs/operators";
import { Observable } from "rxjs";


@Injectable()
export class ValuesService {
  private actionUrl: string;
  private apiRoot: string;
  

  constructor(private http: Http) {
    this.apiRoot = window.location.href;
    this.actionUrl = this.apiRoot + '/Data/sample.txt';//'/api/values/';
  }

  public getAllValues = (): Observable<any> => {

    const request = this.http
      .get(this.actionUrl)
      .pipe(
        map((e: Response) => e.json() as SomeValue[])
      );

    return (request);
  }
  
}

export class SomeValue {
  id: number;
  name: string;


}
