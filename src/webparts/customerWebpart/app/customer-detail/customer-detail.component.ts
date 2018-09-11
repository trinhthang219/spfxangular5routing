import { Component, Inject } from '@angular/core';
import { ConfigurationService } from "../shared/services/configuration.service";

@Component({
  selector: "customer-detail",
  template: require("./customer-detail.template.html") as string
})
export class CustomerDetailComponent {
  private title: string = "";
  constructor(private configurationService: ConfigurationService) {
    this.title = configurationService.description;
  }
}
