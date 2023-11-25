import { FixedPackage } from './fixPackage';

describe('FixedPackage', () => {
  it('should always return package price for fixed package', () => {
    // given
    const totalHours = 10;
    const fixPackage = new FixedPackage();

    // when
    const packagePrice = fixPackage.monthlyBill(totalHours);

    // then
    expect(packagePrice).toBe(500);
  });
});
