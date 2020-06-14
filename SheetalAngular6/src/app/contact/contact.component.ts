import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { ContactService } from '../contact.service';
import { Contact } from '../contact';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  dataSaved = false;
  contactForm: any;
  allContacts: Observable<Contact[]>;
  contactIdUpdate = null;
  massage = null;

  constructor(private formbulider: FormBuilder, private contactService: ContactService) { }

  ngOnInit() {
    this.contactForm = this.formbulider.group({
      FirstName: ['', [Validators.required]],
      LastName: ['', [Validators.required]],
      Email: ['', [Validators.required]],
      PhoneNumber: ['', [Validators.required]],
      // IsActive: ['', [Validators.required]],
    });
    this.loadAllContacts();
  }
  loadAllContacts() {
    this.allContacts = this.contactService.getAllContact();
  }
  onFormSubmit() {
    this.dataSaved = false;
    const contact = this.contactForm.value;
    this.CreateContact(contact);
    this.contactForm.reset();
  }
  loadContactToEdit(contactId: string) {
    this.contactService.getContactById(contactId).subscribe(contact => {
      this.massage = null;
      this.dataSaved = false;
      this.contactIdUpdate = contact.Id;
      this.contactForm.controls['FirstName'].setValue(contact.FirstName);
      this.contactForm.controls['LastName'].setValue(contact.LastName);
      this.contactForm.controls['Email'].setValue(contact.Email);
      this.contactForm.controls['PhoneNumber'].setValue(contact.PhoneNumber);
      this.contactForm.controls['IsActive'].setValue(contact.IsActive);
    });

  }
  CreateContact(contact: Contact) {
    if (this.contactIdUpdate == null) {
      this.contactService.createContact(contact).subscribe(
        () => {
          this.dataSaved = true;
          this.massage = 'Record saved Successfully';
          this.loadAllContacts();
          this.contactIdUpdate = null;
          this.contactForm.reset();
        }
      );
    } else {
      contact.Id = this.contactIdUpdate;
      this.contactService.updateContact(contact).subscribe(() => {
        this.dataSaved = true;
        this.massage = 'Record Updated Successfully';
        this.loadAllContacts();
        this.contactIdUpdate = null;
        this.contactForm.reset();
      });
    }
  }
 
  deleteContact(contactId: string) {
    if (confirm("Are you sure you want to delete this ?")) {  
    this.contactService.deleteContactById(contactId).subscribe(() => {
      this.dataSaved = true;
      this.massage = 'Record Deleted Succefully';
      this.loadAllContacts();
      this.contactIdUpdate = null;
      this.contactForm.reset();

    });
  }
}
  resetForm() {
    this.contactForm.reset();
    this.massage = null;
    this.dataSaved = false;
  }
}
