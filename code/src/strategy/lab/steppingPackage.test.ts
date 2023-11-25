import { SteppingPackage } from './steppingPackage';

describe('SteppingPackage', () => {
  it('should return 53.5 (vat included) when total hours less than or equals to 50', () => {
    // given
    const totalHours = 10;
    const steppingPackage = new SteppingPackage();

    // when
    const packagePrice = steppingPackage.monthlyBill(totalHours);

    // then
    expect(packagePrice).toBe(50);
  });

  it('should return fix price (50) and added price when total hours more than 50', () => {
    // given
    const totalHours = 60;
    const steppingPackage = new SteppingPackage();

    // when
    const packagePrice = steppingPackage.monthlyBill(totalHours);

    // then
    expect(packagePrice).toBe(55);
  });
});
