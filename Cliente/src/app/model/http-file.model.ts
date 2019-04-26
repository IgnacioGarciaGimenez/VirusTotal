export class HttpFileModel {
  public fileName: string;
  public mediaType: string;
  public buffer;

  constructor(fileName: string, mediaType: string, buffer) {
    this.fileName = fileName;
    this.mediaType = mediaType;
    this.buffer = buffer;
  }
}
