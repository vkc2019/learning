import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParentComponent } from './viewchild/parent/parent.component';
import { ChildComponent } from './viewchild/child/child.component';
import { SideBarComponent } from './common/side-bar/side-bar.component';
import { TopNavComponent } from './common/top-nav/top-nav.component';
import { HighlightDirectiveComponent } from './directive/highlight-directive/highlight-directive.component';
import { HighlightDirectiveDirective } from './directive/highlight-directive.directive';
import { TwowaybindComponent } from './twowaybinding/twowaybind/twowaybind.component';
import { FormsModule } from '@angular/forms';
import { DocumentationComponent } from './common/documentation/documentation.component';
import { ImpLinksComponent } from './common/imp-links/imp-links.component';
import { DefaultRouteComponent } from './common/default-route/default-route.component';
import { FooterComponent } from './common/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildComponent,
    SideBarComponent,
    TopNavComponent,
    HighlightDirectiveComponent,
    HighlightDirectiveDirective,
    TwowaybindComponent,
    DocumentationComponent,
    ImpLinksComponent,
    DefaultRouteComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
