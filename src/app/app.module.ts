import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { TrucoComponentComponentModule } from './truco-component/truco-component.module';

@NgModule({
  declarations: [	
    AppComponent
   ],
  imports: [
    BrowserModule,
    TrucoComponentComponentModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
