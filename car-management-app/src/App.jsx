import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import db from "./firebase";
import { collection, onSnapshot, setDoc, doc, deleteDoc } from "firebase/firestore";
import { setCars } from "./redux/actions";
import Cars from "./components/Cars";
import AddCar from "./components/AddCar";

const App = () => {
  const dispatch = useDispatch();

  const cars = useSelector((state) => state.cars);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "cars"), (snapshot) => {
      const carsData = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      dispatch(setCars(carsData));
    });

    return () => unsubscribe();
  }, [dispatch]);

  const handleSaveChanges = async () => {
    try {
      const carsToDelete = cars.filter((car) => car.status === "deleted");
      const carsToAdd = cars.filter((car) => car.status === "isnew");

      for (const carToDelete of carsToDelete) {
        await deleteDoc(doc(db, "cars", carToDelete.id));
      }

      for (const carToAdd of carsToAdd) {
        const newCar = { ...carToAdd };
        const carId = newCar.id;
        delete newCar.id;

        await setDoc(doc(db, "cars", carId), newCar);
      }

      console.log("Changes saved successfully.");
    } catch (error) {
      console.error("Error while saving changes:", error);
    }
  };

  return (
    <div>
      <h1>Car Management App</h1>
      <Cars />
      <AddCar />
      <button onClick={handleSaveChanges}>Save Changes</button>
    </div>
  );
};

export default App;
