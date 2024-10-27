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
import { Profile, User } from '../../../modules/core/erp';
import { JsonPipe } from '@angular/common';
import { UsersService } from 'src/app/modules/core/erp/_services/users.services';
import { SiteService } from 'src/app/modules/core/erp/_services/site.service';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrl: './new-user.component.scss',
})
export class NewUserComponent {
  model: NgbDateStruct;

  files: TreeNode[];

  columnDefinitions: Column[] = [];

  gridOptions: GridOption = {};

  gridObj: any;

  angularGrid: AngularGridInstance;

  datasite: [];

  columnDefinitionssite: Column[] = [];

  gridOptionssite: GridOption = {};

  gridObjsite: any;

  angularGridsite: AngularGridInstance;

  // selectedFiles: TreeNode[];

  selectedFiles: any[] = [];

  isCollapsed1 = false;

  isLoading = false;

  user: any;

  users: [];

  profiles: [];

  userForm: FormGroup;

  hasFormErrors = false;

  isExist = false;

  loadingSubject = new BehaviorSubject<boolean>(true);

  loading$: Observable<boolean>;

  error = false;

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
    private userFB: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private userService: UsersService,
    private siteService: SiteService
  ) {}

  ngAfterViewInit(): void {}

  ngOnInit(): void {
    // this.roles$ = this.apiService.getRoles();

    this.loading$ = this.loadingSubject.asObservable();
    this.loadingSubject.next(false);
    this.createForm();
  }
  createForm() {
    this.loadingSubject.next(false);

    this.user = new User();
    this.userForm = this.userFB.group({
      // usrd_code: [this.user.usrd_code, Validators.required],
      usrd_name: [
        { value: this.user.usrd_name, disabled: !this.isExist },
        Validators.required,
      ],
      usrd_user_name: [this.user.usrd_user_name, Validators.required],
      usrd_pwd: [
        { value: this.user.usrd_pwd, disabled: true },
        Validators.required,
      ],
      usrd_pwd_new: [{ value: '', disabled: true }],
      usrd_email: [{ value: this.user.usrd_email, disabled: !this.isExist }],
      usrd_phone: [{ value: this.user.usrd_phone, disabled: !this.isExist }],
      usrd_profile: [
        { value: this.user.usrd_profile, disabled: !this.isExist },
        Validators.required,
      ],
      usrd_site: [
        { value: this.user.usrd_site, disabled: !this.isExist },
        Validators.required,
      ],
      usrd_active: [
        { value: this.user.usrd_active, disabled: !this.isExist },
        Validators.required,
      ],
      usrd_domain: [{ value: this.user.usrd_domain, disabled: !this.isExist }],
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
    this.userService
      .getAllProfiles()
      .subscribe((response: any) => (this.profiles = response.data));
  }
  open(content: any) {
    this.prepareGrid();
    this.modalService.open(content, { size: 'lg' });
  }
  onSubmit() {
    this.hasFormErrors = false;
    const controls = this.userForm.controls;
    /** check form */
    // if (this.userForm.invalid) {
    //   Object.keys(controls).forEach((controlName) =>
    //     controls[controlName].markAsTouched()
    //   );

    //   this.hasFormErrors = true;
    //   return;
    // }
    if (controls.usrd_pwd.value !== controls.usrd_pwd_new.value) {
      alert(
        "Mot de passe saisi n'est pas egale au nouveau mot de passe veuillez resaisir"
      );
      // this.message = "Mot de passe erronee";
      this.hasFormErrors = true;

      return;
    }

    // tslint:disable-next-line:prefer-const
    let address = this.prepareUser();
    this.addUser(address);
  }
  onChangeCode() {
    const controls = this.userForm.controls;

    this.userService
      .getByOne({ usrd_code: controls.usrd_code.value })
      .subscribe((res: any) => {
        console.log('aa', res.data);

        if (res.data) {
          this.isExist = true;
        } else {
          controls.usrd_name.enable();
          controls.usrd_user_name.enable();

          controls.usrd_email.enable();
          controls.usrd_phone.enable();
          controls.usrd_domain.enable();
          controls.usrd_profile.enable();
          controls.usrd_active.enable();
          controls.usrd_site.enable();
        }
      });
  }
  onChangeUser() {
    const controls = this.userForm.controls;

    this.userService
      .getByOne({ usrd_user_name: controls.usrd_user_name.value })
      .subscribe((res: any) => {
        console.log('aa', res.data);

        if (res.data) {
          alert('Cet Utilisateur exist déja');
          controls.usrd_user_name.setValue(null);
          // document.getElementById("user").focus();
        } else {
          controls.usrd_name.enable();
          controls.usrd_user_name.enable();
          controls.usrd_email.enable();
          controls.usrd_phone.enable();
          controls.usrd_domain.enable();
          controls.usrd_profile.enable();
          controls.usrd_active.enable();
          controls.usrd_site.enable();
          controls.usrd_pwd.enable();
          controls.usrd_pwd_new.enable();
        }
      });
  }
  //reste form
  reset() {
    this.user = new User();
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
  prepareUser(): User {
    const controls = this.userForm.controls;
    const _user = new User();
    _user.usrd_code = controls.usrd_user_name.value;
    _user.usrd_name = controls.usrd_name.value;
    _user.usrd_user_name = controls.usrd_user_name.value;
    _user.usrd_pwd = controls.usrd_pwd.value;
    _user.usrd_email = controls.usrd_email.value;
    _user.usrd_phone = controls.usrd_phone.value;
    _user.usrd_domain = controls.usrd_domain.value;
    _user.usrd_profile = controls.usrd_profile.value;
    _user.usrd_active = controls.usrd_active.value;
    _user.usrd_site = controls.usrd_site.value;

    return _user;
  }
  /**
   * Add user
   *
   * @param _user: UserModel
   */
  addUser(_user: User) {
    this.loadingSubject.next(true);
    this.userService.addUser(_user).subscribe(
      (reponse) => console.log('response', Response),
      (error) => {
        alert('Erreur, vérifier les informations');
        this.loadingSubject.next(false);
      },
      () => {
        // this.layoutUtilsService.showActionNotification("Ajout avec succès", MessageType.Create, 10000, true, true);
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
    const controls = this.userForm.controls;
    if (Array.isArray(event.detail.args.rows) && this.gridObj) {
      event.detail.args.rows.map((idx: any) => {
        const item = this.gridObj.getDataItem(idx);
        controls.usrd_profile.setValue(item.usrg_code || '');
      });
    }
  }

  angularGridReadysite(angularGrid: any) {
    this.angularGrid = angularGrid;
    this.gridObjsite = angularGrid.detail.slickGrid;
  }

  handleSelectedRowsChangedsite(e: any, event: any) {
    const controls = this.userForm.controls;
    console.log(event);
    if (Array.isArray(event.detail.args.rows) && this.gridObjsite) {
      event.detail.args.rows.map((idx: any) => {
        const item = this.gridObjsite.getDataItem(idx);
        console.log(item.si_site);
        // TODO : HERE itterate on selected field and change the value of the selected field
        controls.usrd_site.setValue(item.si_site || '');
      });
    }
  }

  changeSite() {
    const controls = this.userForm.controls; // chof le champs hada wesh men form rah
    const si_site = controls.usrd_site.value;
    if (si_site != '*') {
      this.siteService.getByOne({ si_site }).subscribe(
        (res: any) => {
          console.log(res);
          const { data } = res;

          if (!data) {
            // this.layoutUtilsService.showActionNotification("ce Site n'existe pas!", MessageType.Create, 10000, true, true);
            this.error = true;
          } else {
            this.error = false;
          }
        },
        (error: any) => console.log(error)
      );
    }
  }

  prepareGridsite() {
    this.columnDefinitionssite = [
      {
        id: 'id',
        field: 'id',
        excludeFromColumnPicker: true,
        excludeFromGridMenu: true,
        excludeFromHeaderMenu: true,

        minWidth: 50,
        maxWidth: 50,
      },
      {
        id: 'id',
        name: 'id',
        field: 'id',
        sortable: true,
        minWidth: 80,
        maxWidth: 80,
      },
      {
        id: 'si_site',
        name: 'Site',
        field: 'si_site',
        sortable: true,
        filterable: true,
        type: FieldType.string,
      },
      {
        id: 'si_desc',
        name: 'Designation',
        field: 'si_desc',
        sortable: true,
        filterable: true,
        type: FieldType.string,
      },
    ];

    this.gridOptionssite = {
      enableAutoResize: true, // Allow the grid to resize
      enableSorting: true,
      autoResize: {
        container: '.demo-container-site',
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
    this.siteService
      .getAll()
      .subscribe((response: any) => (this.datasite = response.data));
  }

  opensite(contentsite: any) {
    this.prepareGridsite();
    this.modalService.open(contentsite, { size: 'lg' });
  }
}
