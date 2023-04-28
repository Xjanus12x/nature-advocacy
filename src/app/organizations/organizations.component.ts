import { Component } from '@angular/core';
import { OrganizationsService } from './organizations.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-organizations',
  templateUrl: './organizations.component.html',
  styleUrls: ['./organizations.component.css'],
})
export class OrganizationsComponent {
  orgs: any;
  constructor(
    private organizations: OrganizationsService,
    private router: Router
  ) {}
  goToRoute(route: string) {
    this.router.navigate([`/${route}`]);
  }
  ngOnInit() {
    this.organizations.getData().subscribe((data: any) => {
      this.orgs = data;
    });
  }
}
