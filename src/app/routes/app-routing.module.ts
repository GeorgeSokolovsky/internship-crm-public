import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewsTableComponent } from '../news-list/news-table/news-table.component';
import { NewsDetailsComponent } from '../news-details/news-details/news-details.component';

const routes: Routes = [
  { path: '', redirectTo: 'news', pathMatch: 'full' },
  { path: 'news', component: NewsTableComponent },
  { path: 'details/:id', component: NewsDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
