import {Component, OnInit} from '@angular/core';
import {LoggingService} from "../../data/services/logging.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  // providers: [LoggingService]
})
export class HomeComponent implements OnInit {

  constructor(private loggingService: LoggingService) {
  }

  ngOnInit(): void {
  }

  public log() {
    this.loggingService.log("Home component log")
  }

  public onChange(e: Event) {
    this.loggingService.title = (e.target as HTMLInputElement).value;
  }

}
