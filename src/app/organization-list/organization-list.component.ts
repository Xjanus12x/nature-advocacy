import { Component, NgZone } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CrudService } from 'src/service/crud.service';

@Component({
  selector: 'app-organization-list',
  templateUrl: './organization-list.component.html',
  styleUrls: ['./organization-list.component.css'],
})
export class OrganizationListComponent {
  orgRegistrationForm: any = undefined;
  org_name: string = '';
  orgList: any = [];
  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private crudService: CrudService
  ) {}

  goToRoute(route: string) {
    this.router.navigate([`/${route}`]);
  }

  ngOnInit(): void {
    // this.crudService.GetBooks().subscribe((res) => {
    //   this.orgList = res;
    // });
    this.crudService.GetBooks().subscribe((res) => {
      this.orgList = res;
      this.orgList = this.orgList.filter(
        (donor: any) => donor.org_name.length > 0
      );
    });
  }
  delete(id: any, i: any) {
    console.log(id);
    if (window.confirm('Do you want to go ahead?')) {
      this.crudService.deleteBook(id).subscribe((res) => {
        this.orgList.splice(i, 1);
      });
    }
  }
}
