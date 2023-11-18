/* eslint-disable react/prop-types */
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddRestaurant = () => {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [newRestaurant, setNewRestaurant] = useState({
    name: "",
    address: "",
    contact: "",
  });

  setTimeout(() => {
    setError("");
  }, 3000);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewRestaurant((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const addRestaurantHandler = () => {
    const regEx = /^[0-9]{10}$/;

    if (
      !newRestaurant.name ||
      !newRestaurant.address ||
      !newRestaurant.contact
    ) {
      setError("Please fill in all details.");
      return;
    }

    if (!regEx.test(newRestaurant.contact)) {
      setError("Please enter a valid number.");
      return;
    }

    axios
      .post(
        "https://restaurant-listing2.onrender.com/crud/add-restaurant",
        newRestaurant
      )
      .then((result) => {
        console.log("restaurant added successfully", result);
        setNewRestaurant({
          name: "",
          address: "",
          contact: "",
        });
        navigate("/restaurant-list");
      })
      .catch((err) => {
        console.log("error in adding restaurant", err);
      });
  };

  return (
    <div className="bg-white p-6 mx-auto mt-3 lg:w-1/2">
      <h2 className="text-xl font-semibold mb-4">Add New Restaurant</h2>

      {error && (
        <p className="text-red-500 text-sm mb-4 bg-red-100 p-2 rounded-md">
          {error}
        </p>
      )}

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Name:
        </label>
        <input
          type="text"
          name="name"
          value={newRestaurant.name}
          onChange={handleInputChange}
          className="border rounded-md py-2 px-3 w-full focus:outline-none focus:ring focus:border-blue-300"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Address:
        </label>
        <input
          type="text"
          name="address"
          value={newRestaurant.address}
          onChange={handleInputChange}
          className="border rounded-md py-2 px-3 w-full focus:outline-none focus:ring focus:border-blue-300"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Contact:
        </label>
        <input
          type="text"
          name="contact"
          value={newRestaurant.contact}
          onChange={handleInputChange}
          className="border rounded-md py-2 px-3 w-full focus:outline-none focus:ring focus:border-blue-300"
        />
      </div>
      <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
        <button
          onClick={addRestaurantHandler}
          className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-500 text-white font-semibold hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300 sm:ml-3 sm:w-auto sm:text-sm"
        >
          Add Restaurant
        </button>
      </div>
    </div>
  );
};

export default AddRestaurant;
