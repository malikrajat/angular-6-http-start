import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import 'rxjs/Rx';
import {Observable} from "rxjs/Observable";

@Injectable()
export class ServerService {

  constructor(
    private http: Http
  ) { }
  storeServer(server: any[]) {
    const header = new Headers({
      "Content-Type": "application/json",
      "Token": "Rajat"
    })
    /*
    return this.http.post('https://ng5-blog.firebaseio.com/server.json', server, {
      headers: header
    });
  */
    return this.http.put('https://ng5-blog.firebaseio.com/server.json', server, {
      headers: header
    });
  }
  getServer() {
    return this.http.get('https://ng5-blog.firebaseio.com/server')
      .map(
        (responce: Response) => {
          const data = responce.json();
          return data;
        }
      )
      .catch(
        (error: Response) => {
          return Observable.throw('Something went wrong');
        }
      )
  }
}
