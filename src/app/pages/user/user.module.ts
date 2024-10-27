import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { UserListingComponent } from './user-listing/user-listing.component';
import { RouterModule } from '@angular/router';
// import { UserDetailsComponent } from './user-details/user-details.component';
import { CrudModule } from 'src/app/modules/crud/crud.module';
import { SharedModule } from 'src/app/_metronic/shared/shared.module';
import {
  NgbCollapseModule,
  NgbDropdownModule,
  NgbModule,
  NgbNavModule,
  NgbTooltipModule,
} from '@ng-bootstrap/ng-bootstrap';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { NewUserComponent } from './new-user/new-user.component';
import { ListUsersComponent } from './list-users/list-users.component';
import { NewUserMobileComponent } from './new-user-mobile/new-user-mobile.component';
import { ListUsersMobileComponent } from './list-users-mobile/list-users-mobile.component';
import { AngularSlickgridModule } from 'angular-slickgrid';
import { TreeModule } from 'primeng/tree';
import { NodeService } from 'src/app/services/nodeservice.service';
import { UsersService } from 'src/app/modules/core/erp/_services/users.services';
import {
  HttpUtilsService,
  TypesUtilsService,
  InterceptService,
} from 'src/app/modules/core/erp/_base/crud';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { SiteService } from 'src/app/modules/core/erp/_services/site.service';
import { InlineSVGModule } from 'ng-inline-svg-2';

@NgModule({
  declarations: [
    NewUserComponent,
    ListUsersComponent,
    NewUserMobileComponent,
    ListUsersMobileComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {
        path: 'new-user',
        component: NewUserComponent,
      },
      {
        path: 'list-users',
        component: ListUsersComponent,
      },
      {
        path: 'new-user-mobile',
        component: NewUserMobileComponent,
      },
      {
        path: 'list-users-mobile',
        component: ListUsersMobileComponent,
      },
      // {
      //   path: ':id',
      //   component: UserDetailsComponent,
      // },
    ]),
    AngularSlickgridModule.forRoot(),
    TreeModule,
    CrudModule,
    SharedModule,
    MatButtonModule,
    NgbNavModule,
    NgbModule,
    NgbDropdownModule,
    NgbCollapseModule,
    NgbTooltipModule,
    InlineSVGModule,
    SweetAlert2Module.forChild(),
  ],
  providers: [
    NodeService,
    UsersService,
    SiteService,
    HttpUtilsService,
    InterceptService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptService,
      multi: true,
    },
  ], // Add NodeService here
})
export class UserModule {}
