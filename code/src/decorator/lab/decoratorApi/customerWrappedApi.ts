import { CustomerApi } from './customerApi';

export class CustomerWrappedApi implements CustomerApi {
  private api: CustomerApi;

  constructor(api: CustomerApi) {
    this.api = api;
  }

  public get(): any {
    return {
      status: 'ok',
      data: {
        customer: this.api.get(),
      },
    };
  }
}
