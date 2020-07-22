import { Routes } from '@angular/router';
import { ContactusComponent } from '../contactus/contactus.component';
import { MenuComponent } from '../menu/menu.component';
import { AboutusComponent } from '../aboutus/aboutus.component';
import { HomeComponent } from '../home/home.component';

export const appRoutes: Routes = [
  { path: 'Home',  component: HomeComponent },
  { path: 'Menu',     component: MenuComponent },
  {path: 'Aboutus',  component: AboutusComponent},
  { path: '', redirectTo: '/Home', pathMatch: 'full' },
  { path: 'contactus', component: ContactusComponent },
];
