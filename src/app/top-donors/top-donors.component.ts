import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CrudService } from 'src/service/crud.service';

@Component({
  selector: 'app-top-donors',
  templateUrl: './top-donors.component.html',
  styleUrls: ['./top-donors.component.css'],
})
export class TopDonorsComponent {
  topDonors: any = [];
  searchString: string = '';
  constructor(private crudService: CrudService, private router: Router) {}
  ngOnInit(): void {
    this.crudService.GetBooks().subscribe((res) => {
      this.topDonors = res;
      this.topDonors = this.topDonors
        .filter((donor: any) => donor.donation_amount > 0) 
        .sort((a: any, b: any) => b.donation_amount - a.donation_amount)
        .slice(0, 5);
    });
  }
  goToRoute(route: string) {
    this.router.navigate([`/${route}`]);
  }
}
