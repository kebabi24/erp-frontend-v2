import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

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
import { NodeService } from 'src/app/services/nodeservice.service';
import { NewRoleComponent } from './new-role/new-role.component';
import { ListRolesComponent } from './list-roles/list-roles.component';
@NgModule({
  declarations: [NewRoleComponent, ListRolesComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {
        path: 'new-role',
        component: NewRoleComponent,
      },
      {
        path: 'list-roles',
        component: ListRolesComponent,
      },
    ]),
    CrudModule,
    TreeModule,
    SharedModule,
    NgbNavModule,
    NgbDropdownModule,
    NgbCollapseModule,
    NgbTooltipModule,
    SweetAlert2Module.forChild(),
  ],
  providers: [NodeService], // Add NodeService here
})
export class RoleModule {}
