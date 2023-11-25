import { BillingType } from './billingType';

export class SteppingPackage implements BillingType {
  monthlyBill(totalHours: number): number {
    let total = 50;
    if (totalHours > 50) {
      total += (totalHours - 50) * 0.5;
    }

    return total;
  }
}
