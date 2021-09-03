import { Injectable } from '@angular/core';
import {Contact} from './contact';
// import 'rxjs/add/operator/map';
import {map} from 'rxjs/operators';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { pipe } from 'rxjs';
@Injectable(
//   {
//  providedIn: 'root'
//   }
 
)
export class ContactService {
  headers=new HttpHeaders();
  

  constructor(private http:HttpClient) { 
    this.headers.append('content-type','application/json');
  }
getContacts()
  {
    return this.http.get('http://127.0.0.1:3000/api/contacts');
  }

  addContact(newContact:any)
  {
    
    return this.http.post('http://127.0.0.1:3000/api/contact',newContact,{headers:this.headers});
    

    // return this.http.post('127.0.0.1:3000/api/contact',newContact,{headers:this.headers}).pipe(map(res=>res.json()));
  }

  deleteContact(id:any)
  {
    return this.http.delete('http://127.0.0.1:3000/api/contact/'+id);
    // return this.http.delete('http://127.0.0.1:3000/api/contact/'+id).map(res=>res.json());
  }
}













// getContacts()
// {
//   return this.http.get('127.0.0.1:3000/api/contacts').pipe(map(res=>
//     res.json()
//   ));
// }



// addContact(newContact)
// {
//   var headers=new HttpHeaders();
//   headers.append('content-type','application/json');
//   return this.http.post('127.0.0.1:3000/api/contact',newContact,{headers:headers}).map(res=>res.json());
// }