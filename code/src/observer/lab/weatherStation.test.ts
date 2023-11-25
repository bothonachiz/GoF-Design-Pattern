import { WeatherData } from './weatherData';
import { WeatherObserver } from './weatherObserver';
import { WeatherStation } from './weatherStation';

describe('[Observer - begin] Weather station measurement changed', () => {
  it('display should be called when measurement changed', () => {
    // given
    const weatherStation = new WeatherStation();
    const data = new WeatherData(32.0, 0.8, 1.0);

    // when
    weatherStation.update(data);

    // then
    expect(weatherStation.updateCurrentConditionsDisplay()).toBe(
      'Current conditions: 32C degrees and 0.8% humidity'
    );
    expect(weatherStation.updateStatisticsDisplay()).toBe(
      'Avg/Max/Min temperature = 32/0.8/1'
    );
    expect(weatherStation.updateForecastDisplay()).toBe(
      'Forecast: More of the same'
    );
  });

  it('should notify observers when weather station updated data', () => {
    // given
    const weatherStation = new WeatherStation();
    const data = new WeatherData(32.0, 0.8, 1.0);
    const observer1: WeatherObserver = {
      update: jest.fn(),
    };
    const observer2: WeatherObserver = {
      update: jest.fn(),
    };
    weatherStation.registerObserver(observer1);
    weatherStation.registerObserver(observer2);

    // when
    weatherStation.update(data);

    // then
    expect(observer1.update).toBeCalledWith(data);
    expect(observer2.update).toBeCalledWith(data);
  });
});
