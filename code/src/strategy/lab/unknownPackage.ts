import { BillingType } from './billingType';

export class UnknownPackage implements BillingType {
  monthlyBill(_: number): number {
    return 0;
  }
}
