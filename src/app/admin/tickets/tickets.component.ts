import { Component } from '@angular/core';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.scss']
})
export class TicketsComponent {

  ticketsList:any=[
    {
      sno:1,
      ticketId:234567,
      title:'Issue with food',
      createdBy:'Rajesh',
      createdTime:'11-07-2024',
      status:'Pending'
    },
    {
      sno:2,
      ticketId:123456,
      title:'Issue with food',
      createdBy:'berlin',
      createdTime:'11-07-2024',
      status:'Opened'
    }
  ]

}
