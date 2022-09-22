import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ServicesModule } from './services/services.module';
import { SharedModule } from './shared/shared.module';
import { BanderasModule } from './banderas/banderas.module';



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,

    BanderasModule,
    ServicesModule,
    SharedModule,
    BanderasModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
