import { Component, OnInit } from '@angular/core';
import {MessageService} from '../../Services/message/message.service';

@Component({
  selector: 'app-messgase',
  templateUrl: './messgase.component.html',
  styleUrls: ['./messgase.component.css']
})
export class MessgaseComponent implements OnInit {

  constructor(public messageService : MessageService ) {}

  ngOnInit(): void {
  }

}
