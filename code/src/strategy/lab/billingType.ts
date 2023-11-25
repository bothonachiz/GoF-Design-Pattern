export interface BillingType {
  monthlyBill(totalHours: number): number;
}
