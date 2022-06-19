import { Component, OnInit } from '@angular/core';
import {LoggingService} from "../../data/services/logging.service";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  constructor(private loggingService: LoggingService) { }

  ngOnInit(): void {
  }

  public log(){
    this.loggingService.log("User component log")
  }

}
