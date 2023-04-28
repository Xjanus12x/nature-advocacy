import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { VideoComponent } from './video/video.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { OtherProjectsComponent } from './other-projects/other-projects.component';
import { OrganizationsComponent } from './organizations/organizations.component';
import { FooterComponent } from './footer/footer.component';
import { ContentComponent } from './content/content.component';
import { DonateFormComponent } from './donate-form/donate-form.component';
import { TopDonorsComponent } from './top-donors/top-donors.component';
import { DonorsComponent } from './donors/donors.component';
import { OrganizationListComponent } from './organization-list/organization-list.component';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { OrgRegFormComponent } from './org-reg-form/org-reg-form.component';
import { EditOrgDetaiComponent } from './edit-org-detai/edit-org-detai.component';
ContentComponent;
@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    VideoComponent,
    AboutUsComponent,
    OtherProjectsComponent,
    OrganizationsComponent,
    FooterComponent,
    ContentComponent,
    DonateFormComponent,
    TopDonorsComponent,
    DonorsComponent,
    OrganizationListComponent,
    OrgRegFormComponent,
    EditOrgDetaiComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
