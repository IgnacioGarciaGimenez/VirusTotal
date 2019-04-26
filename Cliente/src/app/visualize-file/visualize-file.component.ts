import {Component, Input, OnInit} from '@angular/core';
import {FileServices} from '../services/file.services';
import {FileReportModel} from '../model/file-report.model';

@Component({
  selector: 'app-visualize-file',
  templateUrl: './visualize-file.component.html',
  styleUrls: ['./visualize-file.component.scss']
})

export class VisualizeFileComponent implements OnInit {
  @Input()
  public fileReport: FileReportModel;
  @Input()
  public fileName: string;

  constructor(private fileServices: FileServices) {
  }

  ngOnInit(): void {
    console.log(this.fileReport);
  }

}
