import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GreetingsComponent } from './greetings/greetings.component';
import { GreetComponent } from './greet/greet.component';
import { AboutComponent } from './about/about.component';
import { HelpComponent } from './help/help.component';
import { FormComponent } from './form/form.component';

@NgModule({
  declarations: [
    AppComponent,
    GreetingsComponent,
    GreetComponent,
    AboutComponent,
    HelpComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
