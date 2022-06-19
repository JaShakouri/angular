import {Inject, Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root',
})
export class LoggingService {
  title: string = '';
  baseURL: string = '';

  constructor(@Inject('API_BASE_URL') base_url: string) {
    this.baseURL = base_url;
  }

  public log(message: string) {
    console.log("BaseURL: " + this.baseURL);
    console.log(this.title + ": " + message);
  }
}
