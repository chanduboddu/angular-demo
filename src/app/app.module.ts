import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpclientModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { PostsComponentComponent } from './posts-component/posts-component.component';
import { DataServiceService } from './data-service.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule,HttpclientModule] ,
  declarations: [ AppComponent, HelloComponent, PostsComponentComponent ],
  bootstrap:    [ AppComponent ],
  providers: [DataServiceService]
})
export class AppModule { }
