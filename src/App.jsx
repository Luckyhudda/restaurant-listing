import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import Header from "./components/header/header";
import RestaurantList from "./components/restaurants/restaurantList";
import AddRestaurant from "./components/restaurants/addRestaurant";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/restaurant-list" element={<RestaurantList/>} />
        <Route path="/add-restaurant" element={<AddRestaurant/>} />
      </Routes>
    </>
  );
}

export default App;
