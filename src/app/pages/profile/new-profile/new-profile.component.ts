import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Renderer2,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import {
  Column,
  GridOption,
  Formatter,
  Editor,
  Editors,
  FieldType,
  OnEventArgs,
  AngularGridInstance,
} from 'angular-slickgrid';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable, BehaviorSubject, Subscription, of } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import {
  NgbModal,
  NgbModalOptions,
  NgbDateStruct,
  NgbDatepickerModule,
  NgbAlertModule,
} from '@ng-bootstrap/ng-bootstrap';
import { SwalComponent } from '@sweetalert2/ngx-sweetalert2';

import {
  DataTablesResponse,
  IRoleModel,
  RoleService,
} from 'src/app/_fake/services/role.service';

import { SweetAlertOptions } from 'sweetalert2';
import { TreeNode } from 'primeng/api';
import { NodeService } from 'src/app/services/nodeservice.service';
import { Profile } from '../../../modules/core/erp';
import { JsonPipe } from '@angular/common';
import { UsersService } from 'src/app/modules/core/erp/_services/users.services';
@Component({
  selector: 'app-new-profile',
  templateUrl: './new-profile.component.html',
  styleUrls: ['./new-profile.component.scss'],
})
export class NewProfileComponent implements OnInit, AfterViewInit, OnDestroy {
  model: NgbDateStruct;

  files: TreeNode[];

  columnDefinitions: Column[] = [];

  gridOptions: GridOption = {};

  gridObj: any;

  angularGrid: AngularGridInstance;

  // selectedFiles: TreeNode[];

  selectedFiles: any[] = [];

  isCollapsed1 = false;

  isLoading = false;

  profile: any;

  profiles: [];

  profileForm: FormGroup;

  hasFormErrors = false;

  isExist = false;

  loadingSubject = new BehaviorSubject<boolean>(true);

  loading$: Observable<boolean>;

  @ViewChild('formModal')
  formModal: TemplateRef<any>;

  @ViewChild('noticeSwal')
  noticeSwal!: SwalComponent;

  swalOptions: SweetAlertOptions = {};

  modalConfig: NgbModalOptions = {
    modalDialogClass: 'modal-dialog modal-dialog-centered mw-650px',
  };

  private clickListener: () => void;

  constructor(
    private apiService: RoleService,
    private cdr: ChangeDetectorRef,
    private renderer: Renderer2,
    private modalService: NgbModal,
    private nodeService: NodeService,
    private profileFB: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private profileService: UsersService
  ) {}

  ngAfterViewInit(): void {}

  ngOnInit(): void {
    // this.roles$ = this.apiService.getRoles();
    this.nodeService.getFiles().then((data) => (this.files = data));
    this.loading$ = this.loadingSubject.asObservable();
    this.loadingSubject.next(false);
    this.createForm();
  }
  createForm() {
    this.loadingSubject.next(false);

    this.profile = new Profile();
    this.profileForm = this.profileFB.group({
      usrg_code: [this.profile.usrg_code, Validators.required],
      usrg_description: [this.profile.usrg_description, Validators.required],
      usrg_val_st_date: [this.profile.usrg_val_st_date],
      usrd_profile: [{ value: '', disabled: !this.isExist }],
      usrg_val_en_date: [this.profile.usrg_val_en_date],
    });
  }
  prepareGrid() {
    this.columnDefinitions = [
      {
        id: 'id',
        name: 'id',
        field: 'id',
        sortable: true,
        minWidth: 80,
        maxWidth: 80,
      },
      {
        id: 'usrg_code',
        name: 'code profil',
        field: 'usrg_code',
        sortable: true,
        filterable: true,
        type: FieldType.string,
      },
      {
        id: 'usrg_description',
        name: 'description',
        field: 'usrg_description',
        sortable: true,
        filterable: true,
        type: FieldType.string,
      },
    ];

    this.gridOptions = {
      enableAutoResize: true, // Allow the grid to resize
      enableSorting: true,
      autoResize: {
        container: '.demo-container',
      },
      enableCellNavigation: true,
      enableExcelCopyBuffer: true,
      enableFiltering: true,
      autoEdit: false,
      autoHeight: false,
      frozenColumn: 0,
      frozenBottom: true,
      enableRowSelection: true,
      enableCheckboxSelector: true,
      checkboxSelector: {
        // optionally change the column index position of the icon (defaults to 0)
        // columnIndexPosition: 1,

        // remove the unnecessary "Select All" checkbox in header when in single selection mode
        hideSelectAllCheckbox: true,

        // you can override the logic for showing (or not) the expand icon
        // for example, display the expand icon only on every 2nd row
        // selectableOverride: (row: number, dataContext: any, grid: any) => (dataContext.id % 2 === 1)
      },
      multiSelect: false,
      rowSelectionOptions: {
        // True (Single Selection), False (Multiple Selections)
        selectActiveRow: true,
      },
    };

    // fill the dataset with your data
    this.profileService
      .getAllProfiles()
      .subscribe((response: any) => (this.profiles = response.data));
  }
  open(content: any) {
    this.prepareGrid();
    this.modalService.open(content, { size: 'lg' });
  }
  onSubmit() {
    this.hasFormErrors = false;
    const controls = this.profileForm.controls;
    /** check form */
    if (this.profileForm.invalid) {
      Object.keys(controls).forEach((controlName) =>
        controls[controlName].markAsTouched()
      );

      this.hasFormErrors = true;
      return;
    }

    // tslint:disable-next-line:prefer-const
    let profile = this.prepareProfile();
    this.addProfile(profile);
    console.log(this.selectedFiles);
  }

  //reste form
  reset() {
    this.profile = new Profile();
    this.createForm();
    this.hasFormErrors = false;
  }
  removeCircularReferences() {
    const seen = new WeakSet();
    //@ts-ignore
    return (key, value) => {
      if (value != null && typeof value === 'object') {
        if (seen.has(value)) {
          return; // Remove circular reference
        }
        seen.add(value);
      }
      return value;
    };
  }
  prepareProfile(): Profile {
    const controls = this.profileForm.controls;
    const _profile = new Profile();
    _profile.usrg_code = controls.usrg_code.value;
    _profile.usrg_description = controls.usrg_description.value;
    //@ts-ignore
    _profile.usrg_val_st_date = controls.usrg_val_st_date.value
      ? `${controls.usrg_val_st_date.value.year}/${controls.usrg_val_st_date.value.month}/${controls.usrg_val_st_date.value.day}`
      : null;
    //@ts-ignore
    _profile.usrg_val_en_date = controls.usrg_val_en_date.value
      ? `${controls.usrg_val_en_date.value.year}/${controls.usrg_val_en_date.value.month}/${controls.usrg_val_en_date.value.day}`
      : null;
    this.selectedFiles.map((item) => {
      if (item.key.includes('-')) {
        this.selectedFiles = this.selectedFiles.filter(
          (itemToRemove) => item.key != itemToRemove.key
        );
      }
    });
    _profile.usrg_menus = JSON.stringify(
      this.selectedFiles,
      this.removeCircularReferences()
    );

    return _profile;
  }

  /**
   * Add profile
   *
   * @param _profile: ProfileModel
   */
  addProfile(_profile: Profile) {
    this.loadingSubject.next(true);
    console.log(_profile);
    this.profileService.addProfile(_profile).subscribe(
      (reponse) => console.log('response', Response),
      (error) => {
        // this.layoutUtilsService.showActionNotification(
        //   'Erreur verifier les informations',
        //   MessageType.Create,
        //   10000,
        //   true,
        //   true
        // );
        this.loadingSubject.next(false);
      },
      () => {
        // this.layoutUtilsService.showActionNotification(
        //   'Ajout avec succès',
        //   MessageType.Create,
        //   10000,
        //   true,
        //   true
        // );
        this.loadingSubject.next(false);
        this.router.navigateByUrl('/');
      }
    );
  }
  ngOnDestroy(): void {
    if (this.clickListener) {
      this.clickListener();
    }
    this.modalService.dismissAll();
  }

  angularGridReady(angularGrid: any) {
    console.log(angularGrid);
    this.angularGrid = angularGrid;
    this.gridObj = angularGrid.detail.slickGrid;
  }

  handleSelectedRowsChanged(e: any, event: any) {
    console.log(event);
    const controls = this.profileForm.controls;
    if (Array.isArray(event.detail.args.rows) && this.gridObj) {
      event.detail.args.rows.map((idx: any) => {
        const item = this.gridObj.getDataItem(idx);
        controls.usrd_profile.setValue(item.usrg_code || '');
      });
    }
  }
}
