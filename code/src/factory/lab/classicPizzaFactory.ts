import {
  BreadType,
  CheeseType,
  Ingredient,
  Pizza,
  PizzaSize,
  PizzaStyle,
  PizzaType,
} from './pizza';
import { PizzaFactory } from './pizzaFactory';

export class ClassicPizzaFactory implements PizzaFactory {
  private pizza: Pizza;

  constructor() {
    this.pizza = new Pizza();
    this.pizza.type = PizzaType.Classic;
  }

  bakePizza(style: PizzaStyle, size: PizzaSize): Pizza {
    this.pizza.size = size;
    if (style === PizzaStyle.Italian) {
      this.pizza.bread = BreadType.Thin;
    } else {
      this.pizza.bread = BreadType.Thick;
    }
    this.pizza.cheese = CheeseType.Mozzarella;
    this.pizza.ingredients = [Ingredient.Tomato, Ingredient.Basil];

    return this.pizza;
  }
}
