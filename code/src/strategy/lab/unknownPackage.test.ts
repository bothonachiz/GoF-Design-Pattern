import { UnknownPackage } from './unknownPackage';

describe('UnknownPackage', () => {
  it('should return 0', () => {
    const totalHours = 50;
    const unknownPackage = new UnknownPackage();

    const packagePrice = unknownPackage.monthlyBill(totalHours);

    expect(packagePrice).toEqual(0);
  });
});
