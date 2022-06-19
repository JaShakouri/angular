import {Component, OnInit} from '@angular/core';
import {LoggingService} from "../../data/services/logging.service";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  constructor(private loggingService: LoggingService) {
  }

  ngOnInit(): void {
  }

  public log() {
    this.loggingService.log("Users component log")
  }

}
