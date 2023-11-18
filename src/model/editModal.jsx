/* eslint-disable react/prop-types */
import axios from "axios";
import { useEffect, useState } from "react";

const EditModal = ({ currentRestaurant, setIsEditable, isEditable }) => {
  const [newData, setNewData] = useState({});

    useEffect(() => {
      setNewData(currentRestaurant);
    }, [currentRestaurant]);


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const updateHandler = () => {
    axios
      .put(
        `http://localhost:8900/crud/update-restaurant/${currentRestaurant.id}`,
        newData
      )
      .then((result) => {
        console.log("update successfully", result);
        setIsEditable(false);
      })
      .catch((err) => {
        console.log("error in updating part", err);
        setIsEditable(false);
      });
  };

  return (
    <div
      className={`fixed inset-0 ${
        isEditable ? "block" : "hidden"
      } overflow-y-auto`}
    >
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>

        <span
          className="hidden sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true"
        >
          &#8203;
        </span>

        <div
          className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:w-full sm:max-w-md"
        >
          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <h2 className="text-xl font-semibold mb-4">Edit Restaurant</h2>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Name:
              </label>
              <input
                type="text"
                name="name"
                value={newData.name}
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
                value={newData.address}
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
                value={newData.contact}
                onChange={handleInputChange}
                className="border rounded-md py-2 px-3 w-full focus:outline-none focus:ring focus:border-blue-300"
              />
            </div>
          </div>
          <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <button
              onClick={updateHandler}
              className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-500 text-white font-semibold hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300 sm:ml-3 sm:w-auto sm:text-sm"
            >
              Update
            </button>
            <button
              onClick={() => setIsEditable(false)}
              className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring focus:border-blue-300 sm:mt-0 sm:ml-3 sm:w-auto"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditModal;
