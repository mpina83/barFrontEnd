import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


import {AppComponent} from './app.component';
import {NavMenuComponent} from './components/navmenu/navmenu.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {ClientsComponent} from './components/clients/clients.component';
import {EquipmentsComponent} from './components/equipments/equipments.component';
import {RepairsComponent} from './components/repairs/repairs.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NavMenuComponent,
    ClientsComponent,
    EquipmentsComponent,
    RepairsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    NgbModule.forRoot(),
    RouterModule.forRoot([
      {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
      {path: 'dashboard', component: DashboardComponent},
      {path: 'clients', component: ClientsComponent},
      {path: 'equipments', component: EquipmentsComponent},
      {path: 'repairs', component: RepairsComponent}
    ])
  ],
  providers: [
    { provide: 'BASE_URL', useFactory: getBaseUrl }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function getBaseUrl() {
  return 'http://localhost:5000/';
}
