import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from '../app/home/home.component';
import { MainLayoutComponent } from './_Layout/main-layout/main-layout.component'
import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { RegisterComponent } from './register/register.component';
import { RecoverPasswordComponent } from './recover-password/recover-password.component';
import { AuthLayoutComponent } from './_Layout/auth-layout/auth-layout.component'
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
import { RoleEnum } from './_consts/RoleEnum'


const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: '', component: HomeComponent, pathMatch: 'full', canActivate: [AuthGuard] },
      { path: 'Home', component: HomeComponent, canActivate: [AuthGuard] },
      { path: 'User', component: UserComponent, canActivate: [AuthGuard], data: { roles: [RoleEnum.User] } },
      { path: 'Role', component: RoleComponent, canActivate: [AuthGuard], data: { roles: [RoleEnum.Role] } },
      { path: 'Tvan', component: TvanComponent, canActivate: [AuthGuard], data: { roles: [RoleEnum.Tvan] } },
      { path: 'InvoiceBook', component: InvoiceBookComponent, canActivate: [AuthGuard], data: { roles: [RoleEnum.InvoiceBook] } },
      { path: 'Invoice', component: InvoiceComponent, canActivate: [AuthGuard], data: { roles: [RoleEnum.Invoice] } },
      { path: 'Transaction', component: TransactionComponent, canActivate: [AuthGuard], data: { roles: [RoleEnum.Transaction] } },
      { path: 'ReportInvoiceStatus', component: ReportInvoiceStatusComponent, canActivate: [AuthGuard], data: { roles: [RoleEnum.ReportInvoiceStatus] } },
      { path: 'Transfer', component: TransferComponent, canActivate: [AuthGuard], data: { roles: [RoleEnum.Transfer] } },
      { path: 'Tenant', component: TenantComponent, canActivate: [AuthGuard], data: { roles: [RoleEnum.Tenant] } },
      { path: 'UserTenant', component: UserTenantComponent, canActivate: [AuthGuard], data: { roles: [RoleEnum.UserTenant] } },
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
