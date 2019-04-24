import {Component} from '@angular/core';
import {FileServices} from '../services/file.services';
import {el} from '@angular/platform-browser/testing/src/browser_util';

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.scss']
})

export class UploadFileComponent {
  private file;
  public errorOnFile = '';

  constructor(private fileServices: FileServices) {
  }

  public fileSelected(file) {
    this.file = file;
  }

  public analyzeFile() {
    if (this.file) {
      console.log(this.fileServices.uploadFileMocked(this.file));
    } else {
      this.errorOnFile = 'Debe seleccionar un archivo primero.';
    }
  }
}
