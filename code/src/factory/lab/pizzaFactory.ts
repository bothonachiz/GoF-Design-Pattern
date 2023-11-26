import { Pizza, PizzaSize, PizzaStyle, PizzaType } from './pizza';

export interface PizzaFactory {
  bakePizza(style: PizzaStyle, size: PizzaSize): Pizza;
}
