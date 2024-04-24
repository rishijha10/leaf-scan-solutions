import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../util/firebaseConfig";
import { useContext } from "react";
import MainContext from "../store/MainContext";
import { useEffect } from "react";
import { useState } from "react";

export function formatDiseaseName(name) {
  const formattedName = name
    .replaceAll("_", " ")
    .split(" ")
    .filter((item) => item !== "")
    .join(" ");
  return formattedName;
}

const MyPlants = () => {
  const { user } = useContext(MainContext);
  const [userPlants, setUserPlants] = useState([]);
  console.log(userPlants);
  useEffect(() => {
    async function getAllUserPlants() {
      if (!user.uid) {
        return;
      }
      console.log(user);
      const q = query(
        collection(db, "user-plants"),
        where("user", "==", user.uid)
      );

      const querySnapshot = await getDocs(q);
      const snapShotArray = [];
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        // console.log(doc.id, " => ", doc.data());
        snapShotArray.push({ docId: doc.id, data: doc.data() });
      });
      setUserPlants(snapShotArray);
    }
    getAllUserPlants();
  }, [user, user.uid]);
  function formatter(unixDate) {
    const newDate = new Date(unixDate);
    return newDate.toLocaleDateString();
  }

  //   const formattedTimestamp = formatter(createdAt);
  return (
    <div className="flex flex-wrap">
      {userPlants &&
        userPlants.map((item) => {
          const formattedTimestamp = formatter(item.data.createdAt);
          {
            /* const formattedName = item.data.predictedDisease
            .replaceAll("_", " ")
            .split(" ")
            .filter((item) => item !== "")
            .join(" "); */
          }
          const formattedName = formatDiseaseName(item.data.predictedDisease);
          {
            /* console.log(formattedName); */
          }
          return (
            <div
              key={item.docId}
              className=" px-3 py-5 my-8 rounded mx-4 w-[350px] shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px]"
            >
              <img
                src={item.data.image}
                className="  h-[200px] rounded w-full mb-4 object-cover"
              />
              <p className=" text-black text-base mb-4">
                <span className=" font-semibold">Predicted Disease:</span>{" "}
                {formattedName}
              </p>
              <p className=" text-black text-base">
                <span className=" font-semibold">Date:</span>{" "}
                {formattedTimestamp}
              </p>
            </div>
          );
        })}
      {userPlants.length === 0 && (
        <p className=" mx-auto text-black">No disease searched yet </p>
      )}
    </div>
  );
};

export default MyPlants;
