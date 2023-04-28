import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CrudService } from 'src/service/crud.service';

@Component({
  selector: 'app-donors',
  templateUrl: './donors.component.html',
  styleUrls: ['./donors.component.css'],
})
export class DonorsComponent {
  donors: any = [];
  constructor(private crudService: CrudService, private router: Router) {}
  ngOnInit(): void {
    this.crudService.GetBooks().subscribe((res) => {
      this.donors = res;
      this.donors = this.donors
        .filter((donor: any) => donor.donation_amount > 0) // Filter out donors with empty user_name
        .sort((a: any, b: any) => b.donation_amount - a.donation_amount)
        .slice(0, 5);
    });
  }
}
