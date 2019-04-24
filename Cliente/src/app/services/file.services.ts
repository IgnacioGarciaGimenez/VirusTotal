import {Injectable, Inject} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';



@Injectable()
export class FileServices {
  myAppUrl = '';


  constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this.myAppUrl = baseUrl;
  }

  uploadFile(file) {
    const hash = '42e449fbbbe98aba4c79d1434d0b11923379faba943e888e0966766379dcdf28';
    /*    let params = new HttpParams();
        params = params.append('hash', hash);*/
    return this.http.get(this.myAppUrl + 'api/VirusTotal/' + hash).subscribe(
      (data) => {
        // some code
        console.log('The file was analyze');
      },
      (error1 => {
        console.error('An error ocurred trying to get the file info');
        throwError(error1);
      })
    );
  }
  uploadFileToInternet(file) {
    const hash = '42e449fbbbe98aba4c79d1434d0b11923379faba943e888e0966766379dcdf28';
    /*    let params = new HttpParams();
        params = params.append('hash', hash);*/
    return this.http.get(this.myAppUrl + 'ui/files/' + hash).subscribe(
      (data) => {
        // some code
        console.log('The file was analyze');
      },
      (error1 => {
        console.error('An error ocurred trying to get the file info');
        throwError(error1);
      })
    );
  }

}
