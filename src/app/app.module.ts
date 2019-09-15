import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import {RouterModule,Routes} from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { BookingComponent } from './booking/booking.component';
const appRoutes: Routes = [
   {path :'booking/:userName',component:BookingComponent},
   {path :'user',component:UserComponent},
   {path :'',redirectTo:'/user',pathMatch:'full'}
  // {path :'**',component:PageNotFoundComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    BookingComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
