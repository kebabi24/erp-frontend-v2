import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewProfileComponent } from './new-profile/new-profile.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import {
  NgbNavModule,
  NgbDropdownModule,
  NgbCollapseModule,
  NgbTooltipModule,
} from '@ng-bootstrap/ng-bootstrap';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { SharedModule } from 'src/app/_metronic/shared/shared.module';
import { CrudModule } from 'src/app/modules/crud/crud.module';
import { TreeModule } from 'primeng/tree';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NodeService } from 'src/app/services/nodeservice.service';
import { UsersService } from 'src/app/modules/core/erp/_services/users.services';
import { HttpUtilsService } from 'src/app/modules/core/erp/_base/crud';
import { AngularSlickgridModule } from 'angular-slickgrid';
import { ListProfilesComponent } from './list-profiles/list-profiles.component';
import { ListProfileMobileComponent } from './list-profile-mobile/list-profile-mobile.component';
import { NewProfileMobileComponent } from './new-profile-mobile/new-profile-mobile.component';
import { NewProfileMenuMobileComponent } from './new-profile-menu-mobile/new-profile-menu-mobile.component';
import { SetProductPagesComponent } from './set-product-pages/set-product-pages.component';
@NgModule({
  declarations: [
    NewProfileComponent,
    ListProfilesComponent,
    ListProfileMobileComponent,
    NewProfileMobileComponent,
    NewProfileMenuMobileComponent,
    SetProductPagesComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {
        path: 'new-profile',
        component: NewProfileComponent,
      },
      {
        path: 'list-profiles',
        component: ListProfilesComponent,
      },
      {
        path: 'new-profile-mobile',
        component: NewProfileMobileComponent,
      },
      {
        path: 'set-product-pages',
        component: SetProductPagesComponent,
      },
      {
        path: 'list-profile-mobile',
        component: ListProfileMobileComponent,
      },
      {
        path: 'new-profile-menu-mobile',
        component: NewProfileMenuMobileComponent,
      },
    ]),
    AngularSlickgridModule.forRoot(),
    CrudModule,
    NgbModule,
    TreeModule,
    SharedModule,
    NgbNavModule,
    NgbDropdownModule,
    NgbCollapseModule,
    NgbTooltipModule,
    SweetAlert2Module.forChild(),
  ],
  providers: [NodeService, UsersService, HttpUtilsService], // Add NodeService here
})
export class ProfileModule {}
