import { BillingType } from './billingType';

export class FixedPackage implements BillingType {
  monthlyBill(_: number): number {
    return 500;
  }
}
