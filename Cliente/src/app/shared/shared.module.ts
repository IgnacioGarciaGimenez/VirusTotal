import {NgModule} from '@angular/core';

import {SelectFileComponent} from './select-file/select-file.component';
import {AppComponent} from '../app.component';

@NgModule({
  declarations: [
    SelectFileComponent
  ],
  imports: [],
  providers: [],
  exports: [SelectFileComponent]
})
export class SharedModule {
}

