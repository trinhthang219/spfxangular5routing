import { ConfigurationService } from "../shared/services/configuration.service";
import { Component, OnInit ,  AfterViewInit, OnChanges , OnDestroy} from "@angular/core";
// import { CustomerServices  } from "../customers-services/customer.services";
import { Customer } from "../customer-models";
import { CustomerServices } from "../customer-services";

@Component({
  selector: "customer",
  template: require("./customer.template.html") as string,
  providers:[CustomerServices]
})
export class CustomerComponent implements OnInit, AfterViewInit, OnChanges ,OnDestroy {
  private title: string = "";
  constructor(private configurationService: ConfigurationService , 
    private customerServices: CustomerServices) {
    this.title = configurationService.description;
  }
  public customer: Customer[];
  public selectedCustomer: Customer;
  public getAllCustomers(): void {
    this.customerServices.getAllCustomer().then(result => {this.customer = result ; console.log( "abc " + result);} );
  }
  public getCustomerById(): void {
    this.customerServices.getCustomer(1).then(result => {this.selectedCustomer = result;});
  }
  public ngOnInit(): void {
    console.log("customer work");
    this.getAllCustomers();
  }
  public ngAfterViewInit():void {
    console.log("after view init");
  }

  public ngOnChanges():void{
    console.log("on change");
  }
  public ngOnDestroy():void{
    console.log("on destroy");
  }
}
