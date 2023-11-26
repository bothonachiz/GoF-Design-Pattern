import {
  PizzaStyle,
  PizzaSize,
  Pizza,
  PizzaType,
  Ingredient,
  BreadType,
  CheeseType,
} from './pizza';
import { PizzaFactory } from './pizzaFactory';

export class CheesePizzaFactory implements PizzaFactory {
  private pizza: Pizza;

  constructor() {
    this.pizza = new Pizza();
    this.pizza.type = PizzaType.Cheese;
  }

  bakePizza(style: PizzaStyle, size: PizzaSize): Pizza {
    this.pizza.size = size;
    this.pizza.bread = BreadType.Thick;
    this.pizza.cheese = CheeseType.Parmesan;
    if (style === PizzaStyle.Italian) {
      this.pizza.ingredients = [
        Ingredient.Basil,
        Ingredient.Olive,
        Ingredient.Onion,
      ];
    } else {
      this.pizza.ingredients = [
        Ingredient.Tomato,
        Ingredient.Basil,
        Ingredient.Olive,
        Ingredient.Onion,
      ];
    }

    return this.pizza;
  }
}
