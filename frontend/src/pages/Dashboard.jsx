import Disease from "../components/DiseaseDetection";

const Home = () => {
  return (
    <div className="flex h-screen w-full">
      <div className="flex flex-col flex-grow">
        <div className="p-6 bg-white">
          <form className="hidden">
            <label htmlFor="plant-species" className="block">
              Plant Species:
            </label>
            <input
              type="text"
              id="plant-species"
              name="plant-species"
              className="w-full border rounded-md px-4 py-2 mb-4"
              placeholder="Enter plant species"
            />

            <label htmlFor="location" className="block">
              Location:
            </label>
            <input
              type="text"
              id="location"
              name="location"
              className="w-full border rounded-md px-4 py-2 mb-4"
              placeholder="Enter location"
            />

            <label htmlFor="symptoms" className="block">
              Symptoms:
            </label>
            <textarea
              id="symptoms"
              name="symptoms"
              rows="4"
              className="w-full border rounded-md px-4 py-2 mb-4"
              placeholder="Describe symptoms"
            ></textarea>

            <label htmlFor="environment" className="block">
              Environmental Conditions:
            </label>
            <input
              type="text"
              id="environment"
              name="environment"
              className="w-full border rounded-md px-4 py-2 mb-4"
              placeholder="Enter environmental conditions"
            />

            <label htmlFor="cultural-practices" className="block">
              Cultural Practices:
            </label>
            <textarea
              id="cultural-practices"
              name="cultural-practices"
              rows="4"
              className="w-full border rounded-md px-4 py-2 mb-4"
              placeholder="Describe cultural practices"
            ></textarea>

            <label htmlFor="previous-issues" className="block">
              Previous Pest or Disease Issues:
            </label>
            <textarea
              id="previous-issues"
              name="previous-issues"
              rows="4"
              className="w-full border rounded-md px-4 py-2 mb-4"
              placeholder="Describe previous issues"
            ></textarea>

            <label htmlFor="plant-image" className="block">
              Upload Plant Image:
            </label>

            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 mt-5"
            >
              Submit
            </button>
          </form>
          <p className=" font-pop font-semibold text-xl mb-8">
            Upload your leaf's image and diagnose it in seconds
          </p>
          <Disease />
        </div>
      </div>
    </div>
  );
};

export default Home;
