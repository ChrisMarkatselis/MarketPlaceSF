import { OrderListModule } from 'primeng/orderlist';
import { SidebarModule } from 'primeng/sidebar';
import { ToastModule } from 'primeng/toast';
import { ChartModule } from 'primeng/chart';
import { ButtonModule } from 'primeng/button';
import { SlideMenuModule } from 'primeng/slidemenu';
import { MenuModule } from 'primeng/menu';
import { TableModule } from 'primeng/table';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { SymbolTableComponent } from './components/symbol-table/symbol-table.component';
import { SymbolWatchlistComponent } from './components/symbol-watchlist/symbol-watchlist.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SharedModule } from './shared/shared.module';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    SymbolTableComponent,
    SymbolWatchlistComponent,
    DashboardComponent
  ],
  imports: [
    SharedModule,
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    TableModule,
    ButtonModule,
    ToastModule,
    MenuModule,
    BrowserAnimationsModule,
    SidebarModule,
    OrderListModule,
    SlideMenuModule,
    MessageModule,
    MessagesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
