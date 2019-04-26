import {ScanEngineModel} from './scan-engine.model';

export class FileReportModel {
  public hash: string;
  public requestResult: number;
  public scans: { [name: string]: ScanEngineModel };

  constructor(hash: string, requestResult: number, scans: { [p: string]: ScanEngineModel }) {
    this.hash = hash;
    this.requestResult = requestResult;
    this.scans = scans;
  }
}
