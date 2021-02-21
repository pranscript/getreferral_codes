import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MaterialModule} from './material-module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms'; 
import { SearchPipe} from './search.pipe'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RefinfoComponent } from './refinfo/refinfo.component';
import { TabsComponent } from './tabs/tabs.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { SidenavPipe } from './sidenav.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SearchPipe,
    SidenavPipe,
    RefinfoComponent,
    TabsComponent,
    HeaderComponent,
    FooterComponent,
    SidenavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
