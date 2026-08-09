import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from "@angular/router";
import emailjs from '@emailjs/browser';

@Component({
    selector: 'app-contact',
    imports: [ReactiveFormsModule, RouterLink],
    templateUrl: './contact.html',
    styleUrl: './contact.scss',
})
export class Contact {
    form: FormGroup;

    submitted = false;
    sending = false;
    sendError = false;

    private readonly SERVICE_ID = 'service_0zfv1pk';
    private readonly TEMPLATE_ID = 'template_emhljpx';
    private readonly PUBLIC_KEY = 'dKlu2Rv5rGj1nE4_0';

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
        this.sendError = false;

        if (this.form.invalid){
            this.form.markAllAsTouched();
            return;
        }

        this.sending = true;

        const templateParams = {
            name: this.name.value,
            email:this.email.value,
            message: this.message.value,
        };

        emailjs.send(this.SERVICE_ID, this.TEMPLATE_ID, templateParams, {
            publicKey: this.PUBLIC_KEY,
        })
        .then(() => {
            this.form.reset();
            this.submitted = false;
        })
        .catch((err) => {
            console.error('EmailJS error:', err);
            this.sendError = true;
        })
        .finally(() => {
            this.sending = false;
        });
    }

}
