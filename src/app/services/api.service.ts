import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/prod';
import { ILoginResponse } from '../interfaces/login-response';
import { Observable } from 'rxjs';
import { IContact } from '../interfaces/contact';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }

  login(user: string, password: string): Observable<ILoginResponse> {
    return this.httpClient.get<ILoginResponse>(`${environment.api}/Auth/Login`, {
      params: {
        login: user,
        senha: password
      }
    });
  }

  getContacts(): Observable<IContact[]> {
    return this.httpClient.get<IContact[]>(`${environment.api}/Contatos/GetContatos`, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    });
  }

  getContactsById(id: number): Observable<IContact> {
    return this.httpClient.get<IContact>(`${environment.api}/Contatos/GetContatoById`, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      },
      params: {
        idContato: id.toString()
      }
    });
  }

  createContact(contact: IContact): Observable<IContact> {
    return this.httpClient.post<IContact>(`${environment.api}/Contatos/CreateContato`, contact, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    });
  }

  updateContact(contact: IContact): Observable<boolean> {
    return this.httpClient.put<boolean>(`${environment.api}/Contatos/UpdateContato`, contact, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    });
  }

  deleteContact(contact: IContact): Observable<boolean> {
    if(!contact.id) {
      return new Observable<boolean>((observer) => {
        observer.next(false);
      });
    }

    return this.httpClient.delete<boolean>(`${environment.api}/Contatos/DeleteContato`, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      },
      params: {
        idContato: contact.id.toString()
      }
    });
  }
}
