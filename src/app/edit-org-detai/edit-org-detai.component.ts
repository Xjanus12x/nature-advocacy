import { Component, NgZone } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CrudService } from 'src/service/crud.service';

@Component({
  selector: 'app-edit-org-detai',
  templateUrl: './edit-org-detai.component.html',
  styleUrls: ['./edit-org-detai.component.css'],
})
export class EditOrgDetaiComponent {
  getId: any;
  updateForm: FormGroup;

  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private activatedRoute: ActivatedRoute,
    private crudService: CrudService
  ) {
    this.getId = this.activatedRoute.snapshot.paramMap.get('id');

    this.crudService.GetBook(this.getId).subscribe((res) => {
      this.updateForm.setValue({
        org_name: res['org_name'],
        owner_name: res['owner_name'],
        date_created: res['date_created'],
      });
    });

    this.updateForm = this.formBuilder.group({
      org_name: [''],
      owner_name: [''],
      date_created: [''],
    });
  }

  ngOnInit() {}

  onUpdate(): any {
    this.crudService.updateBook(this.getId, this.updateForm.value).subscribe(
      () => {
        console.log('Data updated successfully!');
        this.ngZone.run(() => this.router.navigateByUrl('/organization-list'));
      },
      (err) => {
        console.log(err);
      }
    );
  }
  goToRoute(route: string) {
    this.router.navigate([`/${route}`]);
  }
}
