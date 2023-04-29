import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from './content/content.component';
import { DonateFormComponent } from './donate-form/donate-form.component';
import { DonorsComponent } from './donors/donors.component';
import { OrganizationListComponent } from './organization-list/organization-list.component';
import { OrgRegFormComponent } from './org-reg-form/org-reg-form.component';
import { EditOrgDetaiComponent } from './edit-org-detai/edit-org-detai.component';
import { MoreContentComponent } from './more-content/more-content.component';

const routes: Routes = [
  { path: '', component: ContentComponent },
  { path: 'donate-form', component: DonateFormComponent },
  { path: 'donors', component: DonorsComponent },
  { path: 'organization-list', component: OrganizationListComponent },
  { path: 'org-reg', component: OrgRegFormComponent },
  { path: 'edit-book/:id', component: EditOrgDetaiComponent },
  { path: 'more-content', component: MoreContentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
