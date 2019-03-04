import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UrlService } from '../../services/url.service';

@Component({
  selector: 'app-add-url-page',
  templateUrl: './add-url.component.html'
})
export class AddUrlComponent implements OnInit {

  addUrlForm: FormGroup;
  submitted = false;

  constructor(private _fb: FormBuilder, private urlService: UrlService) { }

  ngOnInit(): void {
    this.addUrlForm = this._fb.group({
      url: ['', Validators.required],
      name: ['', Validators.required],
      description: [''],
    });
  }

  // getter for easy access to the form fields
  get f() { return this.addUrlForm.controls; }

  onSubmit(): void {
    this.submitted = true;

    // stop here if form is invalid
    if (this.addUrlForm.invalid) {
      return;
    }
    const form = this.addUrlForm.value;
    this.urlService.addUrl({
      url: form.url,
      description: form.description,
      name: form.name
    });
  }

}
