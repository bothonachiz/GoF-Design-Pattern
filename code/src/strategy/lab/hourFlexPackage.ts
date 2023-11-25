import { BillingType } from './billingType';

export class HourFlexPackage implements BillingType {
  monthlyBill(totalHours: number): number {
    return totalHours * 50;
  }
}
