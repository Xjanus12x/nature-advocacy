import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CrudService } from './../../service/crud.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { NgZone } from '@angular/core';
@Component({
  selector: 'app-donate-form',
  templateUrl: './donate-form.component.html',
  styleUrls: ['./donate-form.component.css'],
})
export class DonateFormComponent {
  userDonationForm: FormGroup;
  date: any = new Date();
  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private crudService: CrudService
  ) {
    this.userDonationForm = this.formBuilder.group({
      user_name: [''],
      user_email: [''],
      donation_amount: [''],
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
          this.ngZone.run(() => this.router.navigateByUrl('/'));
          alert('Thank you for your donation!');
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
