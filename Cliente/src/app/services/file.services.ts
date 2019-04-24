import {Injectable, Inject} from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';


@Injectable()
export class FileServices {
  myAppUrl = '';


  constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this.myAppUrl = baseUrl;
  }

  analyzeFile(file) {
    return this.http.get(this.myAppUrl + 'api/User').subscribe(
      (data) => {
        // some code
        console.log('The file was analyze');
      },
      (error1 => {
        console.error('An error ocurred trying to get the file info')
        throwError(error1);
      })
    );
  }

}
