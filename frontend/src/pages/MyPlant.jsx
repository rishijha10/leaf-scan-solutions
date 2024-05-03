import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../util/firebaseConfig";

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

  return (
    <div className="flex h-screen w-full">
      <div className="flex flex-col flex-grow">
        <div className="px-6 py-4">
          <p className="font-pop font-semibold text-xl mb-8">Your plant</p>
          <img src={data?.image} className=" h-64" />
        </div>
      </div>
    </div>
  );
};

export default MyPlant;
