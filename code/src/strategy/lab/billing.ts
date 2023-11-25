import { PackageFactory } from './packageFactory';

export enum PackageType {
  FIXED = 'FIXED',
  HOUR_FLEX = 'HOUR_FLEX',
  STEPPING = 'STEPPING',
  UNKNOWN = 'UNKNOWN',
}

export class Billing {
  private vatRate = 7.0;
  private totalHours: number;
  private packageType: PackageType;

  constructor(totalHours: number, packageType: PackageType) {
    this.totalHours = totalHours;
    this.packageType = packageType;
  }

  public monthlyBill(): number {
    var packagePrice = PackageFactory.createPackage(this.packageType).monthlyBill(this.totalHours);
    return packagePrice + (packagePrice * this.vatRate) / 100;
  }
}
