import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Http,Response,RequestOptions,Headers} from "@angular/http";

@Component({
  selector: 'app-demo-form-sku-builder',
  templateUrl: './demo-form-sku-builder.component.html',
  styleUrls: ['./demo-form-sku-builder.component.css']
})
export class DemoFormSkuBuilderComponent implements OnInit {
  myForm:FormGroup;
  sku:AbstractControl;
  productName:string;
  constructor(fb:FormBuilder) {
    this.myForm = fb.group({
      'sku':['破军', Validators.compose([Validators.required, DemoFormSkuBuilderComponent.skuValidator])],
      'productName':['',Validators.required]
    });
    this.sku = this.myForm.controls['sku'];
    this.sku.valueChanges.subscribe(
      (value:string)=>{
        console.log('sku字段变化的值：',value);
      }
    );
    this.myForm.valueChanges.subscribe((form:any)=>{
      console.log('表单字段变化的值：',form);
    })
  }
  onSubmit(value:string):void{
    console.log('提交的值:',value);
  }
  static skuValidator (control: FormControl):{[s:string]:boolean}{
    if(!control.value.match(/^123/)){
      return{invalidSku:true};
    }else{
      return{invalidSku:false};
    }
  }
  ngOnInit() {
    let control = new FormControl('sku',Validators.required);
  }

}
