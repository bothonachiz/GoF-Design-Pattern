import { PackageType } from './billing';
import { BillingType } from './billingType';
import { FixedPackage } from './fixPackage';
import { HourFlexPackage } from './hourFlexPackage';
import { SteppingPackage } from './steppingPackage';
import { UnknownPackage } from './unknownPackage';

export class PackageFactory {
  static createPackage(type: PackageType): BillingType {
    switch (type) {
      case PackageType.FIXED:
        return new FixedPackage();
      case PackageType.HOUR_FLEX:
        return new HourFlexPackage();
      case PackageType.STEPPING:
        return new SteppingPackage();
      default:
        return new UnknownPackage();
    }
  }
}
