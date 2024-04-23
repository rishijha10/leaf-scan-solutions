import React from "react";
import Disease from './../pages/Disease'

const Home = () => {
  return (
    <div class="flex h-screen bg-gray-100">
      <div class="flex flex-col w-64 bg-white shadow">
        <div class="flex items-center justify-center h-16 bg-green-300 text-white">
          Leaf Scan Solutions
        </div>
        <div class="flex flex-col flex-grow py-4">
          <a
            href="#"
            class="px-6 py-2 text-sm text-gray-700 hover:bg-green-100 hover:text-green-500"
          >
            Home
          </a>
          <a
            href="#"
            class="px-6 py-2 text-sm text-gray-700 hover:bg-green-100 hover:text-green-500"
          >
            Scan disease
          </a>
          <a
            href="#"
            class="px-6 py-2 text-sm text-gray-700 hover:bg-green-100 hover:text-green-500"
          >
            My Plants
          </a>
          <a
            href="#"
            class="px-6 py-2 text-sm text-gray-700 hover:bg-green-100 hover:text-green-500"
          >
            Profile
          </a>
          <a
            href="#"
            class="px-6 py-2 text-sm text-gray-700 hover:bg-green-100 hover:text-green-500"
          >
            Settings
          </a>
        </div>
      </div>
      <div class="flex flex-col flex-grow">
        <div class="p-6 bg-white">
          <form>
            <label for="plant-species" class="block">Plant Species:</label>
            <input type="text" id="plant-species" name="plant-species" class="w-full border rounded-md px-4 py-2 mb-4" placeholder="Enter plant species" />

            <label for="location" class="block">Location:</label>
            <input type="text" id="location" name="location" class="w-full border rounded-md px-4 py-2 mb-4" placeholder="Enter location" />

            <label for="symptoms" class="block">Symptoms:</label>
            <textarea id="symptoms" name="symptoms" rows="4" class="w-full border rounded-md px-4 py-2 mb-4" placeholder="Describe symptoms"></textarea>

            <label for="environment" class="block">Environmental Conditions:</label>
            <input type="text" id="environment" name="environment" class="w-full border rounded-md px-4 py-2 mb-4" placeholder="Enter environmental conditions" />

            <label for="cultural-practices" class="block">Cultural Practices:</label>
            <textarea id="cultural-practices" name="cultural-practices" rows="4" class="w-full border rounded-md px-4 py-2 mb-4" placeholder="Describe cultural practices"></textarea>

            <label for="previous-issues" class="block">Previous Pest or Disease Issues:</label>
            <textarea id="previous-issues" name="previous-issues" rows="4" class="w-full border rounded-md px-4 py-2 mb-4" placeholder="Describe previous issues"></textarea>

            <label for="plant-image" class="block">Upload Plant Image:</label>
            <Disease />

            <button type="submit" class="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 mt-5">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Home;
