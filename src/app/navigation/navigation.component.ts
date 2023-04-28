import { Component, OnInit, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
})
export class NavigationComponent implements OnInit {
  constructor(private router: Router, private el: ElementRef) {}

  goToRoute(route: string) {
    this.router.navigate([`/${route}`]);
  }
  ngOnInit(): void {}
  scrollTo(id:string) {
    const aboutUsElement =
      this.el.nativeElement.ownerDocument.getElementById(`${id}`);
    aboutUsElement.scrollIntoView({
      behavior: 'smooth',
    });
  }
}
