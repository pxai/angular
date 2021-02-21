import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AboutComponent } from './about/about.component';
import { GreetingsComponent } from './greetings/greetings.component';

const routes: Routes = [
  {
      path: "",
      component: GreetingsComponent
  },
  {
      path: "about/:year",
      component: AboutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
