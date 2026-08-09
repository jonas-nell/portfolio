import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from "@angular/router";

@Component({
    selector: 'app-contact',
    imports: [ReactiveFormsModule, RouterLink],
    templateUrl: './contact.html',
    styleUrl: './contact.scss',
})
export class Contact {
    form: FormGroup;

    submitted = false;

    constructor(private fb: FormBuilder){
        this.form = this.fb.group({
            name: ['', [Validators.required, Validators.minLength(3)]],
            email: ['', [Validators.required, Validators.email]],
            message: ['', [Validators.required, Validators.minLength(10)]],
            privacyAccepted: [false, Validators.requiredTrue],
        });
    }

    get name() {
        return this.form.get('name')!;
    }

    get email(){
        return this.form.get('email')!;
    }

    get message(){
        return this.form.get('message')!;        
    }

    get privacyAccepted(){
        return this.form.get('privacyAccepted')!;
    }
    
    onSubmit(){
        this.submitted = true;

        if (this.form.invalid){
            this.form.markAllAsTouched();
            return;
        }
        // send email later:
        console.log('Placeholder: Form values:', this.form.value);

        this.form.reset();
        this.submitted = false;
    }

}
