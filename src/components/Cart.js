import { useState } from "react";

const Cart = ({ category }) => {
  const [cart, setCart] = useState([]);

  category.meals.map((meal) => {
    return (
      <div
        key={meal.id}
        onClick={() => {
          console.log(meal);
        }}
      >
        <p>{meal.title}</p>
        <p>{meal.description}</p>
        <p>{meal.price}</p>
      </div>
    );
  });
};

export default Cart;
