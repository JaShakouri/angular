import {
  Component, Inject
} from '@angular/core';
import {COMPANY_SERVICE_TOKEN, DEVICE_NAME_TOKEN} from "./app.module";
import {CompanyService} from "../data/services/company.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(
    @Inject(COMPANY_SERVICE_TOKEN) private companyService: CompanyService,
    @Inject(DEVICE_NAME_TOKEN) private deviceName: string) {
    console.log(deviceName);
  }

}
