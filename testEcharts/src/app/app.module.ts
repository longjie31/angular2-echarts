import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NgxEchartsModule} from 'ngx-echarts';
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
import {HttpClientModule} from '@angular/common/http';
import {UserService} from './user.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AnimationComponent} from './animation/animation.component';
import {ZtreeComponent} from './ztree/ztree.component';
import {HistogramComponent} from './histogram/histogram.component';
import {GreenHandComponent} from './green-hand/green-hand.component';
import {TypeScriptComponent} from './type-script/type-script.component';

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
        AnimationComponent,
        ZtreeComponent,
        HistogramComponent,
        GreenHandComponent,
        TypeScriptComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NgxEchartsModule,
        // RouterModule.forRoot(routers, {enableTracing: true}),
        FormsModule,
        Ng2SmartTableModule,
        ReactiveFormsModule,
        CustomerDashboardModule,
        HttpClientModule,
        BrowserAnimationsModule
    ],
    providers: [
        UserService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
