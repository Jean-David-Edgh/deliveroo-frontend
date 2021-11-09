import Meal from "./Meal";

const Category = ({ category }) => {
  return (
    <div className="body">
      <h2>{category.name}</h2>
      {category.meals.map((meal, index) => {
        return <Meal meal={meal} key={meal.id} />;
      })}
    </div>
  );
};

export default Category;
