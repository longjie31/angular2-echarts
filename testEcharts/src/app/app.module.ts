import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NgxEchartsModule} from 'ngx-echarts';
import {RouterModule, Routes} from '@angular/router';
import {PieComponent} from './pie/pie.component';
import {HmoeComponent} from './hmoe/hmoe.component';
import {ExponentialStrength} from './pie/exponentialStrength';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HighlightDirective} from './highlight.directive';
import {Ng2SmartTableModule} from 'ng2-smart-table';
import {SmartTabComponent} from './smart-tab/smart-tab.component';
import {UnlessDirectiveDirective} from './unless-directive.directive';
import {LineComponent} from './line/line.component';
import {FormComponent} from './form/form.component';
import {ReactiveFormComponent} from './reactive-form/reactive-form.component';
import {ProfileEditorComponent} from './profile-editor/profile-editor.component';
import {HeroFormComponent} from './hero-form/hero-form.component';
import {DynamicFormComponent} from './dynamic-form/dynamic-form.component';
import {DynamicFormQuestionComponent} from './dynamic-form-question/dynamic-form-question.component';
import {ObservableComponent} from './observable/observable.component';
import {DuoboComponent} from './duobo/duobo.component';
import {CustomerDashboardModule} from './customer-dashboard/customer-dashboard.module';
// import {ForbiddenNameDirective} from './forbidden-name.directive';
import {HttpClientModule} from '@angular/common/http';
import {UserService} from './user.service';

const routers: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HmoeComponent},
  {path: 'pie', component: PieComponent},
  {path: 'line', component: LineComponent},
  {path: 'smartTab', component: SmartTabComponent},
  {path: 'form', component: FormComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    PieComponent,
    HmoeComponent,
    ExponentialStrength,
    HighlightDirective,
    SmartTabComponent,
    UnlessDirectiveDirective,
    LineComponent,
    FormComponent,
    ReactiveFormComponent,
    ProfileEditorComponent,
    HeroFormComponent,
    DynamicFormComponent,
    DynamicFormQuestionComponent,
    ObservableComponent,
    DuoboComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxEchartsModule,
    // RouterModule.forRoot(routers, {enableTracing: true}),
    RouterModule.forRoot(routers),
    FormsModule,
    Ng2SmartTableModule,
    ReactiveFormsModule,
    CustomerDashboardModule,
    HttpClientModule
  ],
  providers: [
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
