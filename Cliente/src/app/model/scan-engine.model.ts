export class ScanEngineModel {
  public detected: boolean;
  public version: string;
  public malware: string;

  constructor(detected: boolean, version: string, malware: string) {
    this.detected = detected;
    this.version = version;
    this.malware = malware;
  }
}
