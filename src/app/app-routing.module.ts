import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from '../app/home/home.component';
import { MainLayoutComponent} from './_Layout/main-layout/main-layout.component'
import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { RegisterComponent } from './register/register.component';
import { RecoverPasswordComponent } from './recover-password/recover-password.component';
import { AuthLayoutComponent} from './_Layout/auth-layout/auth-layout.component'
import { NotFoundComponent } from './not-found/not-found.component';
import { AuthGuard } from './_helper/auth.guard';
import { UserComponent } from './user/user.component';
import { RoleComponent } from './role/role.component';
import { TvanComponent } from './tvan/tvan.component';
import { InvoiceBookComponent } from './invoice-book/invoice-book.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { TransactionComponent } from './transaction/transaction.component';
import { ReportInvoiceStatusComponent } from './report-invoice-status/report-invoice-status.component';
import { TransferComponent } from './transfer/transfer.component';
import { TenantComponent } from './tenant/tenant.component';
import { UserTenantComponent } from './user-tenant/user-tenant.component';


const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: '', component: HomeComponent, pathMatch: 'full', canActivate: [AuthGuard] },
      { path: 'Home', component: HomeComponent, canActivate: [AuthGuard] },
      { path: 'User', component: UserComponent, canActivate: [AuthGuard] },
      { path: 'Role', component: RoleComponent, canActivate: [AuthGuard] },
      { path: 'Tvan', component: TvanComponent, canActivate: [AuthGuard] },
      { path: 'InvoiceBook', component: InvoiceBookComponent, canActivate: [AuthGuard] },
      { path: 'Invoice', component: InvoiceComponent, canActivate: [AuthGuard] },
      { path: 'Transaction', component: TransactionComponent, canActivate: [AuthGuard] },
      { path: 'ReportInvoiceStatus', component: ReportInvoiceStatusComponent, canActivate: [AuthGuard] },
      { path: 'Transfer', component: TransferComponent, canActivate: [AuthGuard] },
      { path: 'Tenant', component: TenantComponent, canActivate: [AuthGuard] },
      { path: 'UserTenant', component: UserTenantComponent, canActivate: [AuthGuard] },
      { path: "not-found", component: NotFoundComponent, canActivate: [AuthGuard] },
    ]
  },
  {
    path: '',
    component: AuthLayoutComponent,
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'forgot-password', component: ForgotPasswordComponent },
      { path: 'register', component: RegisterComponent },
      { path: 'recover-password', component: RecoverPasswordComponent },
    ]
  },
  { path: '**', redirectTo: '/not-found' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
