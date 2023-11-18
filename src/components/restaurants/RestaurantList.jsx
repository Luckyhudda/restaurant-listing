import axios from "axios";
import { useEffect, useState } from "react";

const RestaurantList = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    axios.get("http://localhost:8900/crud/get-restaurants").then((result) => {
      setRestaurants(result.data.data);
    });
  }, [isLoading]);

  const restaurantsUICards = restaurants?.map((restaurant) => (
    <div
      key={restaurant.id}
      className="bg-gray-200 p-6 rounded-md shadow-md w-72"
    >
      <h2 className="text-xl font-semibold mb-2">{restaurant.name}</h2>
      <p className="text-gray-600 mb-2">{restaurant.address}</p>
      <p className="text-gray-900">{`Contect-us: ${restaurant.contact}`}</p>
      <div className="flex justify-between mt-4">
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md font-semibold hover:bg-blue-400">
          Edit
        </button>
        <button
          onClick={() => restaurantDeleteHandler(restaurant.id)}
          className="bg-red-700 text-white px-4 py-2 rounded-md font-semibold hover:bg-red-400"
        >
          Delete
        </button>
      </div>
    </div>
  ));

  const restaurantDeleteHandler = (id) => {
    setIsLoading(true);
    axios
      .delete(`http://localhost:8900/crud/delete-restaurant/${id}`)
      .then((res) => {
        console.log("restaurant remove from list",res);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log("err",err);
        setIsLoading(false);
      });
  };

  return (
    <div className="my-8">
      <h1 className="text-3xl font-bold text-center mb-4">
        Choose Your Favorite Restaurant
      </h1>
      <div className="flex flex-wrap justify-center gap-6">
        {restaurantsUICards}
      </div>
    </div>
  );
};

export default RestaurantList;
