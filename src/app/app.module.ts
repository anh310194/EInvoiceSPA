import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SiteHeaderComponent } from './_Layout/site-header/site-header.component';
import { SiteMenuComponent } from './_Layout/site-menu/site-menu.component';
import { SiteFooterComponent } from './_Layout/site-footer/site-footer.component';
import { MainLayoutComponent } from './_Layout/main-layout/main-layout.component';
import { AuthLayoutComponent } from './_Layout/auth-layout/auth-layout.component';
import { ControlSidebarComponent } from './_Layout/control-sidebar/control-sidebar.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProcessingComponent } from './_modal/processing/processing.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { RecoverPasswordComponent } from './recover-password/recover-password.component';
import { RegisterComponent } from './register/register.component';
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

@NgModule({
  declarations: [
    AppComponent,
    SiteHeaderComponent,
    SiteMenuComponent,
    SiteFooterComponent,
    MainLayoutComponent,
    AuthLayoutComponent,
    ControlSidebarComponent,
    LoginComponent,
    HomeComponent,
    ProcessingComponent,
    NotFoundComponent,
    ForgotPasswordComponent,
    RecoverPasswordComponent,
    RegisterComponent,
    UserComponent,
    RoleComponent,
    TvanComponent,
    InvoiceBookComponent,
    InvoiceComponent,
    TransactionComponent,
    ReportInvoiceStatusComponent,
    TransferComponent,
    TenantComponent,
    UserTenantComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
