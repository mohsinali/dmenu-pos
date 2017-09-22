import { CartComponent } from './cart/cart.component';
import { Router, Routes, Route, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TableNumberComponent } from './table-number/table-number.component';

const routes: Routes = [
  { path: "", component: TableNumberComponent },
  { path: "dashboard", component: DashboardComponent, children: [
    { path: "cart", component: CartComponent, outlet: 'aside' }
  ] }
]

export const publicRoutes = RouterModule.forRoot(routes);