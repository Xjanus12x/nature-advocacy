import { Component, NgZone } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { CrudService } from 'src/service/crud.service';

@Component({
  selector: 'app-org-reg-form',
  templateUrl: './org-reg-form.component.html',
  styleUrls: ['./org-reg-form.component.css'],
})
export class OrgRegFormComponent {
  userDonationForm: FormGroup;
  date: any = new Date();
  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private crudService: CrudService
  ) {
    this.userDonationForm = this.formBuilder.group({
      org_name: [''],
      owner_name: [''],
      date_created: [''],
    });
  }

  ngOnInit() {}

  onSubmit(): void {
    if (this.userDonationForm.valid) {
      this.crudService.AddBook(this.userDonationForm.value).subscribe(
        () => {
          console.log('Data added successfully!');
          this.ngZone.run(() =>
            this.router.navigateByUrl('/organization-list')
          );
          alert('Success!');
        },
        (err) => {
          console.log(err);
        }
      );
    } else {
      alert('Please fill the form.');
    }
  }
}
