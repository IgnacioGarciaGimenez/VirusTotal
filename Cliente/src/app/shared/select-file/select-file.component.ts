import {Component, ElementRef, ViewChild, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-select-file',
  templateUrl: 'select-file.component.html',
  styleUrls: ['select-file.component.scss']
})

export class SelectFileComponent {
  @ViewChild('fileInput')
  public fileInput: ElementRef;
  @Input()
  public accept: string;
  @Input()
  public maxSize = 10;
  @Input()
  public placeholder = 'Preciona el botón "Adjuntar" ->';
  @Output()
  public fileSelected: EventEmitter<object> = new EventEmitter<object>();

  constructor() {
  }

  public onChange(event): void {
    const files = event.target.files;
    const file = files[0];

    const promiseReturnFile = new Promise((resolve) => {
      const reader = new FileReader();
      reader.onload = () => {
        const arrayBuffer = reader.result as ArrayBuffer;
        const array = new Uint8Array(arrayBuffer);
        const fileArray = Array.from(array);
        resolve(fileArray);
      };
      reader.readAsArrayBuffer(file);
    });
    promiseReturnFile.then((arrayArchivo) => {
      const fileSelected = {
        file: {
          fileName: file.name,
          mediaType: file.type,
          buffer: arrayArchivo
        }
      };
      this.fileSelected.emit(fileSelected);
    });

  }
}
