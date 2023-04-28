import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { OtherProjectsService } from './other-projects.service';

@Component({
  selector: 'app-other-projects',
  templateUrl: './other-projects.component.html',
  styleUrls: ['./other-projects.component.css'],
})
export class OtherProjectsComponent {
  projects: any;
  constructor(
    private otherProjects: OtherProjectsService,
    private router: Router
  ) {}

  ngOnInit() {
    this.otherProjects.getData().subscribe((data: any) => {
      this.projects = data;
      console.log(this.projects);
    });
  }

  goToRoute(route: string) {
    this.router.navigate([`/${route}`]);
  }
}
