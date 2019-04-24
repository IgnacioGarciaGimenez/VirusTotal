import {ScanEngineModel} from './scan-engine.model';

export class FileReportModel {
  public hash: string;
  public requestResult: string;
  public scans: { [name: string]: ScanEngineModel };

  constructor(hash: string, requestResult: string, scans: { [p: string]: ScanEngineModel }) {
    this.hash = hash;
    this.requestResult = requestResult;
    this.scans = scans;
  }
}
