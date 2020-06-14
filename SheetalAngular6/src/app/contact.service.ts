import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';  
import { HttpHeaders } from '@angular/common/http';  
import { Observable } from 'rxjs';  
import { Contact } from './contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  url = 'http://localhost:55551/api/Contact';  
  constructor(private http: HttpClient) { }  
  getAllContact(): Observable<Contact[]> {  
    return this.http.get<Contact[]>(this.url + '/GetContactList');  
  }  
  getContactById(ContactId: string): Observable<Contact> {  
    return this.http.get<Contact>(this.url + '/GetContactDetailsById/' + ContactId);  
  }  
  createContact(Contact: Contact): Observable<Contact> {  
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
    return this.http.post<Contact>(this.url + '/AddContactDetails',  
    Contact, httpOptions);  
  }  
  updateContact(Contact: Contact): Observable<Contact> {  
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
    return this.http.put<Contact>(this.url + '/UpdateContactDetails',  
    Contact, httpOptions);  
  }  
  deleteContactById(Contactid: string): Observable<number> {  
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
    return this.http.delete<number>(this.url + '/DeleteContactDetails' +Contactid,  
 httpOptions);  
  }  
}

