import { Component, OnInit } from '@angular/core';
import {ContactService} from '../contact.service';
import {Contact} from '../contact';
@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css'],

})
export class ContactsComponent implements OnInit {
  contacts:any;
  // contact:Contact;
  first_name:string="";
  last_name:string="";
  phone:string="";
  constructor(private contactservice:ContactService) { }

  ngOnInit(): void {
    this.getContacts();
  }

getContacts()
{
  this.contactservice.getContacts().subscribe((responses)=>{
    this.contacts=responses;
    console.log("our response is=====>",this.contacts);
  }
    
  );
}
addContact()
{
  const newContact={
    first_name:this.first_name,
    last_name:this.last_name,
    phone:this.phone
  }
  this.contactservice.addContact(newContact)
  .subscribe(
    contact=>{
     
      this.contacts.push(contact);
      this.getContacts();

      // this.contactservice.getContacts().subscribe(
      //   contacts=>
      //     this.contacts=contacts
      // );
    }
  );   
}

  deleteContact(id:any)
  {
    var contacts=this.contacts;
    this.contactservice.deleteContact(id).subscribe(
      data=>{
        // if(data.n==1)
        // {
          for(var i=0;i<contacts.length;i++)
          {
            if(contacts[i]._id==id)
            {
              contacts.splice(i,1);
            }
          }
        // }
      }
    )
  }


}











// contacts:Contact[];
//   contact:Contact;
//   first_name:string;
//   last_name:string;
//   phone:string;