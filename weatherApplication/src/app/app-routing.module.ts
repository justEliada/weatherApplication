import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MonthlyViewComponent } from './components/monthly-view/monthly-view.component';
import { WeeklyViewComponent } from './components/weekly-view/weekly-view.component';

const routes: Routes = [
  {
    path: "monthly-view", component: MonthlyViewComponent
  },
  {
    path: "weekly-view", component: WeeklyViewComponent
  },
  // {
  //   path: "monthly-view", component: MonthlyViewComponent -> Here needed a homepage component
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
