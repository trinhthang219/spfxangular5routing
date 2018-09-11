import { Customer } from "../../customer-models";

export interface ICustomerServices {
  getAllCustomer(): Promise<Customer[]>;
  getCustomer(id:number): Promise<Customer>;
}
