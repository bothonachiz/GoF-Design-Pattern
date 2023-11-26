import { CheesePizzaFactory } from './cheesePizzaFactory';
import { ClassicPizzaFactory } from './classicPizzaFactory';
import {
  BreadType,
  CheeseType,
  Ingredient,
  Pizza,
  PizzaSize,
  PizzaStyle,
  PizzaType,
} from './pizza';
import { SeafoodPizzaFactory } from './seafoodPizzaFactory';

export class PizzaStore {
  orderPizza(style: PizzaStyle, type: PizzaType, size: PizzaSize) {
    var pizza: Pizza = new Pizza();
    if (type === PizzaType.Classic) {
      return new ClassicPizzaFactory().bakePizza(style, size);
    } else if (type === PizzaType.Cheese) {
      return new CheesePizzaFactory().bakePizza(style, size);
    } else if (type === PizzaType.Seafood) {
      return new SeafoodPizzaFactory().bakePizza(style, size);
    }
    return pizza;
  }
}
