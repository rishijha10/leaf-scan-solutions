import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../util/firebaseConfig";
import Prevention from "../components/Prevention";
import Remedies from "../components/Remedies";

const MyPlant = () => {
  const { plantId } = useParams();
  const [data, setData] = useState({});

  useEffect(() => {
    async function getPlantData() {
      if (!plantId) {
        return;
      }

      try {
        const docRef = doc(db, "user-plants", plantId);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setData(docSnap.data());
          console.log(docSnap.data());
        } else {
          console.log("No such document!");
        }
      } catch (error) {
        console.error("Error getting document:", error);
      }
    }

    getPlantData();
  }, [plantId]);
  function formatter(unixDate) {
    const newDate = new Date(unixDate);
    return newDate.toLocaleDateString();
  }
  const formattedTimestamp = formatter(data?.createdAt);

  return (
    <div className="flex h-screen w-full">
      <div className="flex flex-col flex-grow">
        <div className="px-6 py-4">
          <p className="font-pop font-semibold text-xl mb-8">Your plant</p>
          <img src={data?.image} className=" h-64" />
          <p className=" text-base mt-8">
            <span className="font-semibold font-pop text-xl">Date:</span> <br />
            {formattedTimestamp}
          </p>
          {data.predictedDisease && (
            <div className="mt-2 py-4 rounded-lg">
              <h2 className="font-bold font-pop mb-2 text-xl">
                Predicted Disease:
              </h2>
              <p>{data.predictedDisease}</p>
            </div>
          )}

          <Remedies remedies={data.remedies} />
          <Prevention prevention={data.preventions} />
        </div>
      </div>
    </div>
  );
};

export default MyPlant;
