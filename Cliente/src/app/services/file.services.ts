import {Injectable, Inject} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {Mock} from 'protractor/built/driverProviders';
import {MockDataServices} from '../mock-data/mock-data.services';
import {FileReportModel} from '../model/file-report.model';
import {HttpFileModel} from '../model/http-file.model';


@Injectable()
export class FileServices {
  myAppUrl = '';


  constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string, private mockDataServices: MockDataServices) {
    this.myAppUrl = baseUrl;
  }

  uploadFile(file: HttpFileModel) {
    return this.http.post(this.myAppUrl + 'api/values', file.fileName);
  }

  analyzeHash(hash: string) {
    return this.http.get(this.myAppUrl + 'api/VirusTotal/' + hash);
  }

  analyzeHashMocked() {
    return this.mockDataServices.getFileMocked().map(this.handleFileReportResponse)[0];
  }

  analyzeHashOnInternet(hash: string) {
    const virusTotalUrl = 'https://www.virustotal.com/';
    return this.http.get(virusTotalUrl + 'ui/files/' + hash).subscribe(
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

  public handleFileReportResponse(res: any): FileReportModel {
    return new FileReportModel(
      res.hash,
      res.requestResult,
      res.scans);
  }
}
