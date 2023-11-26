import {
  PizzaStyle,
  PizzaSize,
  Pizza,
  PizzaType,
  BreadType,
  Ingredient,
  CheeseType,
} from './pizza';
import { PizzaFactory } from './pizzaFactory';

export class SeafoodPizzaFactory implements PizzaFactory {
  private pizza: Pizza;
  
  constructor() {
    this.pizza = new Pizza();
    this.pizza.type = PizzaType.Seafood;
  }

  bakePizza(style: PizzaStyle, size: PizzaSize): Pizza {
    this.pizza.size = size;
    if (style === PizzaStyle.Italian) {
      this.pizza.bread = BreadType.Thin;
    } else {
      this.pizza.bread = BreadType.Thick;
    }
    this.pizza.cheese = CheeseType.Mozzarella;
    this.pizza.ingredients = [
      Ingredient.Tomato,
      Ingredient.Onion,
      Ingredient.Shrimp,
      Ingredient.Tuna,
    ];

    return this.pizza;
  }
}
