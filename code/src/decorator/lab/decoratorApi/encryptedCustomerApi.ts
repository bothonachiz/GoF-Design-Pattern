import { Customer } from '../customer';
import { CustomerApi } from './customerApi';

export class EncryptedCustomerApi implements CustomerApi {
  private api: CustomerApi;

  constructor(api: CustomerApi) {
    this.api = api;
  }

  public get(): Customer {
    return {
      ...this.api.get(),
      name: 'encrypted',
      lastName: 'encrypted',
      age: 0,
    };
  }
}
