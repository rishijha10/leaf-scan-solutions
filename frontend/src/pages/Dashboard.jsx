import React from "react";

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
        <div class="p-6 bg-white">Main Content</div>
      </div>
    </div>
  );
};

export default Home;
