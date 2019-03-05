import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UrlService } from '../../services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-url-page',
  templateUrl: './add-url.component.html'
})
export class AddUrlComponent implements OnInit {

  addUrlForm: FormGroup;
  submitted = false;
  errorMessage: string;

  constructor(private fb: FormBuilder, private urlService: UrlService, private router: Router) { }

  ngOnInit(): void {
    this.addUrlForm = this.fb.group({
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
      this.errorMessage = 'Form is invalid!';
      return;
    }

    const form = this.addUrlForm.value;
    const result = this.urlService.addUrl({
      url: form.url,
      description: form.description,
      name: form.name
    });

    if (result) {
      this.router.navigateByUrl('/');
      return;
    }
    this.errorMessage = 'Something went wrong!';
  }

}
