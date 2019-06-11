import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HmoeComponent} from './hmoe/hmoe.component';
import {PieComponent} from './pie/pie.component';
import {LineComponent} from './line/line.component';
import {SmartTabComponent} from './smart-tab/smart-tab.component';
import {FormComponent} from './form/form.component';
import {ZtreeComponent} from './ztree/ztree.component';
import {HistogramComponent} from './histogram/histogram.component';

const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: HmoeComponent},
    {path: 'pie', component: PieComponent},
    {path: 'line', component: LineComponent},
    {path: 'smartTab', component: SmartTabComponent},
    {path: 'form', component: FormComponent},
    {path: 'zTree', component: ZtreeComponent},
    {path: 'histogram', component: HistogramComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
