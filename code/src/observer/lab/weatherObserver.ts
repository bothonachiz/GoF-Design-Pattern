import { WeatherData } from './weatherData';

export interface WeatherObserver {
  update(newData: WeatherData): void;
}
