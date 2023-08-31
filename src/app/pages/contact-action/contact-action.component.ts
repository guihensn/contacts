import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IContact } from 'src/app/interfaces/contact';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-contact-action',
  templateUrl: './contact-action.component.html',
  styleUrls: ['./contact-action.component.scss']
})
export class ContactActionComponent {
  action: string = 'create';
  contact: IContact;
  errorMessages: string[] = [];

  constructor(private apiService: ApiService, private route: ActivatedRoute, private router: Router) {
    this.contact = {
      id: 0,
      nome: '',
      email: '',
      telefone: '',
      foto: '',
      dataCadastro: new Date()
    };

    this.route.params.subscribe(async (params) => {
      this.action = params['action'];
      
      if (this.action === 'edit') {
        this.apiService.getContactsById(params['id']).subscribe((response: IContact) => {
          this.contact = response;
        });
      }
    });
  }

  validateFields():boolean {
    this.errorMessages = [];

    if (!this.contact.email) this.errorMessages.push('Email vazio');
    if (!this.contact.nome) this.errorMessages.push('Nome vazio');
    if (!this.contact.telefone) this.errorMessages.push('Telefone vazio');

    return this.errorMessages.length === 0;
  }

  update(){
    if(this.validateFields() === false) return;

    this.apiService.updateContact(this.contact).subscribe((response) => {
      if(response){
        this.router.navigate(['/contacts/list']);
      }
    });
  }

  create(){
    if(this.validateFields() === false) return;

    this.apiService.createContact(this.contact).subscribe((response) => {
      if(response){
        this.router.navigate(['/contacts/list']);
      }
    });
  }

  delete(){
    if(this.validateFields() === false) return;

    this.apiService.deleteContact(this.contact).subscribe((response) => {
      if(response){
        this.router.navigate(['/contacts/list']);
      }
    });
  }
}
