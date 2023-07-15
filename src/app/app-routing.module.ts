import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParentComponent } from './viewchild/parent/parent.component';
import { HighlightDirectiveComponent } from './directive/highlight-directive/highlight-directive.component';
import { TwowaybindComponent } from './twowaybinding/twowaybind/twowaybind.component';
import { ImpLinksComponent } from './common/imp-links/imp-links.component';
import { DefaultRouteComponent } from './common/default-route/default-route.component';

const routes: Routes = [
  {
    path: 'angular',
    children: [
      {
        path: 'view-child',
        component: ParentComponent,
      },
      {
        path: 'directive',
        component: HighlightDirectiveComponent,
      },
      {
        path: 'two-way-binding',
        component: TwowaybindComponent,
      },
    ],
  },
  {
    path: 'imp-links',
    component: ImpLinksComponent,
  },
  {
    path: '**',
    component: DefaultRouteComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
