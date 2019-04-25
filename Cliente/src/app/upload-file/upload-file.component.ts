import {Component} from '@angular/core';
import {FileServices} from '../services/file.services';
import {el} from '@angular/platform-browser/testing/src/browser_util';
import {FileReportModel} from '../model/file-report.model';
import * as sha256 from 'fast-sha256';

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.scss']
})

export class UploadFileComponent {
  private file;
  private fileReport: FileReportModel;
  public errorOnFile = '';

  constructor(private fileServices: FileServices) {
  }

  public fileSelected(file) {
    this.file = file;
  }

  public analyzeFile() {
    if (this.file) {
      this.fileReport =  this.fileServices.uploadFileMocked(this.file)[0];
      console.log(this.fileReport);
    } else {
      this.errorOnFile = 'Debe seleccionar un archivo primero.';
    }
  }
}

