import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IContact } from 'src/app/interfaces/contact';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.scss']
})
export class ContactsListComponent {
  contacts?: IContact[];

  constructor(private apiService: ApiService, private router: Router) {
    this.apiService.getContacts().subscribe((response: IContact[]) => {
      this.contacts = response;
    });
  }

  logout(){
    localStorage.removeItem('token');
    localStorage.removeItem('expirationDate');
    this.router.navigate(['/login']);
  }

  hideContactImage(contact: IContact){
    console.log(contact);
    contact.foto = '';
  }
}
