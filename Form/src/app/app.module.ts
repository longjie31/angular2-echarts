import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';

import { FormsModule,ReactiveFormsModule} from '@angular/forms';
import { FormsDemoAppComponent } from './forms-demo-app/forms-demo-app.component';
import { DemoFormSkuComponent } from './demo-form-sku/demo-form-sku.component';
import { DemoFormSkuBuilderComponent } from './demo-form-sku-builder/demo-form-sku-builder.component';
@NgModule({
  declarations: [
    AppComponent,
    FormsDemoAppComponent,
    DemoFormSkuComponent,
    DemoFormSkuBuilderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
