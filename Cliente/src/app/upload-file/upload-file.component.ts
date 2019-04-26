import {Component} from '@angular/core';
import {FileServices} from '../services/file.services';
import {el} from '@angular/platform-browser/testing/src/browser_util';
import {FileReportModel} from '../model/file-report.model';
import * as sha256 from 'fast-sha256';
import {HttpFileModel} from '../model/http-file.model';
import {throwError} from 'rxjs';

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.scss']
})

export class UploadFileComponent {
  private file;
  private fileReport: FileReportModel;
  public errorOnFile = '';
  public programmerMode = true;

  constructor(private fileServices: FileServices) {
  }

  public fileSelected(file) {
    this.file = file;
  }

  public analyzeFile() {
    if (this.file) {
      const hash = this.generateHash(this.file);
      this.fileServices.analyzeHash(hash).subscribe(
        (dataR) => {
          const fileR =  this.fileServices.handleFileReportResponse(dataR);
          this.manageFileReportResponse(fileR);
        },
        (error1 => {
          console.error('An error ocurred trying to get the file info');
          throwError(error1);
        })
      );
    } else {
      this.errorOnFile = 'Debe seleccionar un archivo primero.';
    }
  }

  public analyzeHashedFile() {
    if (this.file) {
      const fileR = this.fileServices.analyzeHashMocked();
      this.manageFileReportResponse(fileR);
    } else {
      this.errorOnFile = 'Debe seleccionar un archivo primero.';
    }
  }

  private manageFileReportResponse(fileR: FileReportModel){
    if (fileR.requestResult === 1) {
      // the file data was on the Database
      this.fileReport = fileR;
    } else {
      this.fileServices.uploadFile(this.file).subscribe(
        (dataR) => {
          this.fileReport =  this.fileServices.handleFileReportResponse(dataR);
          this.manageFileReportResponse(fileR);
        },
        (error1 => {
          console.error('An error ocurred trying to upload the file');
          throwError(error1);
        })
      );
    }
  }

  private generateHash(file: HttpFileModel): string {
    // Aca iria el código, sin tan solo tuviera uno
    const hash = '42e449fbbbe98aba4c79d1434d0b11923379faba943e888e0966766379dcdf28';
    return hash;
  }
  public changeProgrammerMode() {
    this.programmerMode = !this.programmerMode;
  }
}

