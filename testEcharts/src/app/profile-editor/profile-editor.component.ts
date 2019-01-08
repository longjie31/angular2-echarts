import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import {FormBuilder} from '@angular/forms';
import {Validators, FormArray} from '@angular/forms';

@Component({
  selector: 'app-profile-editor',
  templateUrl: './profile-editor.component.html',
  styleUrls: ['./profile-editor.component.scss']
})
export class ProfileEditorComponent implements OnInit {
  /*profileForm = new FormGroup(
    {// controls:控制的复数
      firstName: new FormControl(''), // formState:表单状态
      lastName: new FormControl(''),
      address: new FormGroup({
        street: new FormControl(''),
        city: new FormControl(''),
        state: new FormControl(''),
        zip: new FormControl('')
      })
    }
  );*/
  profileForm = this.formBuilder.group(
    {
      firstName: ['', Validators.required],
      lastName: [''],
      address: this.formBuilder.group({
        street: [''],
        city: [''],
        state: [''],
        zip: ['']
      }),
      aliases: this.formBuilder.array(
        [
          this.formBuilder.control('')
        ]
      )
    }
  );

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit() {
  }

  saveForm() {
    console.log(this.profileForm.value);
  }

  updateProfile() {
    this.profileForm.patchValue({
      firstName: '破军',
      address: {
        city: '攀枝花'
      }
    });
  }

  get aliases(): any {
    return this.profileForm.get('aliases') as FormArray;
  }

  addAliases() {
    this.aliases.push(this.formBuilder.control(''));
  }
}
