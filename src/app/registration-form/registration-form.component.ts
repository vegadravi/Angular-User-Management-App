import { Component, OnInit, ɵflushModuleScopingQueueAsMuchAsPossible } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CustomvalidationService } from '../services/customvalidation.service';
import { ConfirmationService  } from 'primeng/api';
import { MessageService } from 'primeng/api';


@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.scss']
})
export class RegistrationFormComponent implements OnInit {
  registerForm: FormGroup = new FormGroup({}); 
  submitted = false;

  constructor(
    private fb: FormBuilder,
    private confirmationService:ConfirmationService,
    private customValidator: CustomvalidationService,
    private messageService: MessageService
  ) { 
    
  }

  ngOnInit() {
    this.registerForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, this.customValidator.patternValidator()]],
      confirmPassword: ['', [Validators.required]],
    },
    {
      validator: this.customValidator.MatchPassword('password', 'confirmPassword'),
    });
  }

  get registerFormControl() {
    return this.registerForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (this.registerForm.valid) {
      this.confirmationService.confirm({
        message: 'Are you sure you want to submit the registration form?',
        header: 'Confirm Submission',
        icon: 'pi pi-exclamation-triangle',
        accept: () => {
            //Actual logic to perform a confirmation
            this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Successfully Data save' });
            console.log(this.registerForm.value);
            this.registerForm.reset();
            this.submitted = false;
        }
    });
    }
  }
}
