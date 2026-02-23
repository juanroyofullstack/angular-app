import { Component } from '@angular/core';
import {
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';

type SubmitState = 'idle' | 'sending' | 'sent' | 'error';

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  form: FormGroup;
  submitState: SubmitState = 'idle';

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', [Validators.required, Validators.minLength(3)]],
      message: [
        '',
        [
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(1000),
        ],
      ],
    });
  }

  get name() {
    return this.form.get('name')!;
  }
  get email() {
    return this.form.get('email')!;
  }
  get subject() {
    return this.form.get('subject')!;
  }
  get message() {
    return this.form.get('message')!;
  }

  isInvalid(controlName: string): boolean {
    const control = this.form.get(controlName)!;
    return control.invalid && (control.dirty || control.touched);
  }

  onSubmit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.submitState = 'sending';

    // Simulate async submission (replace with real HTTP call)
    setTimeout(() => {
      this.submitState = 'sent';
      this.form.reset();
    }, 1200);
  }

  onReset(): void {
    this.submitState = 'idle';
    this.form.reset();
  }
}
