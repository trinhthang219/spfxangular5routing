import { Injectable } from '@angular/core';
import { ICustomerServices } from "../interfaces/Icustomers.service";
import { Customer } from "../../customer-models";

@Injectable()
export class MockItemsService implements ICustomerServices {
  private readonly MOCK_DELAY: number = 1000;

  constructor() {
  }

  public async getAllCustomer(): Promise<Customer[]> {
    return new Promise<Customer[]>((resolve, reject) => {
      const items: Customer[] = [
        // { Id: 1, Title: "Mauris consectetur dapibus lectus non posuere" },
        // { Id: 2, Title: "Sed lacinia ligula ut consectetur varius" },
        // { Id: 3, Title: "Quisque elementum orci sed feugiat tristique" }
      ];

      setTimeout( () => {
        resolve(items);
      }, this.MOCK_DELAY);
    });
  }
  public async getCustomer(id :number): Promise<Customer> {
    return new Promise<Customer>((resolve, reject) => {
      const items: Customer[] = [
        // { Id: 1, Title: "Mauris consectetur dapibus lectus non posuere" },
        // { Id: 2, Title: "Sed lacinia ligula ut consectetur varius" },
        // { Id: 3, Title: "Quisque elementum orci sed feugiat tristique" }
      ];

      setTimeout( () => {
        resolve(items[0]);
      }, this.MOCK_DELAY);
    });
  }
}