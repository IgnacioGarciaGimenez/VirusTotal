import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {UploadFileComponent} from './upload-file/upload-file.component';
import {SharedModule} from './shared/shared.module';
import {HttpClientModule} from '@angular/common/http';
import {FileServices} from './services/file.services';

@NgModule({
  declarations: [
    AppComponent,
    UploadFileComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'ng-cli-universal'}),
    HttpClientModule,
    BrowserModule,
    SharedModule
  ],
  bootstrap: [AppComponent],
  providers: [FileServices],
})
export class AppModule {
}
