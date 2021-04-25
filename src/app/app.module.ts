import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { TopMenuComponent } from './components/header/top-menu/top-menu.component';
import { BottomMenuComponent } from './components/header/bottom-menu/bottom-menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { SelectLanguageComponent } from './components/header/top-menu/select-language/select-language.component';
import { DotaComponent } from './components/dota/dota.component';
import { CsComponent } from './components/cs/cs.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import {MatInputModule} from '@angular/material/input';
import { ChatComponent } from './components/chat/chat.component';
import { CrashControllerComponent } from './components/dota/crash-controller/crash-controller.component';
import { DotaInventoryComponent } from './components/dota/dota-inventory/dota-inventory.component';
import { ButtonAuthComponent } from './components/element/button-auth/button-auth.component';
import { CrashScheduleComponent } from './components/dota/crash-schedule/crash-schedule.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TopMenuComponent,
    BottomMenuComponent,
    SelectLanguageComponent,
    DotaComponent,
    CsComponent,
    ChatComponent,
    CrashControllerComponent,
    DotaInventoryComponent,
    ButtonAuthComponent,
    CrashScheduleComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    MatDialogModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatSelectModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
