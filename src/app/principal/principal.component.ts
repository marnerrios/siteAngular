import { ConnectionService } from '../app.service';
import { Component, HostListener, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {ModalComponent} from '../modal/modal.component';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent {
  contactForm: FormGroup;
  disabledSubmitButton: boolean = true;

  @ViewChild('modal') modal: ModalComponent;

  @HostListener('input') oninput() {
    if (this.contactForm.valid) {
      this.disabledSubmitButton = false;
      }
    }
  
    constructor(private fb: FormBuilder, private connectionService: ConnectionService) {
  
    this.contactForm = fb.group({
      'name': ['', Validators.required],
      'company': [''],
      'email': ['', Validators.compose([Validators.required, Validators.email])],
      'phone': ['', Validators.required],
      'message': [''],
      });
    }
  
    onSubmit() {
      this.connectionService.sendMessage(this.contactForm.value).subscribe(() => {
        //alert('Your message has been sent');
        this.contactForm.reset();
        this.disabledSubmitButton = true;
        this.modal.toggle();
      }, error => {
        console.log('Error', error);
      });
    }
  
}
