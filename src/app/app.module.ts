import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {AgGridModule} from "ag-grid-angular/main";
import { AppComponent } from './app.component';
import { LogstreamComponent } from './logstream/logstream.component';

const appRoutes: Routes = [
  { path: 'logstream', component: LogstreamComponent },
  { path: '',
    redirectTo: '/logstream',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    LogstreamComponent
  ],
  imports: [
    BrowserModule,
    AgGridModule.withComponents([]),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
