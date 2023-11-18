import RestaurantList from "../components/restaurants/restaurantList";

const HomePage = () => {
  return (
    <main>
      <section className="bg-gray-500 text-white h-[92vh]  flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold mb-4">
            Welcome to Resto-Rover
          </h1>
          <p className="text-lg mb-8">
            We believe good food brings great smiles! 😊
          </p>
          <button
            className="bg-rose-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-rose-500"
          >
            <a href="#restaurants">Explore Restaurants</a>
          </button>
        </div>
      </section>
      <section id="restaurants">
        <RestaurantList />
      </section>
    </main>
  );
};

export default HomePage;
