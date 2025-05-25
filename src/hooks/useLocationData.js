import { useState, useEffect } from "react";
import { ref, onValue, push, set, update, remove } from "firebase/database";
import { database } from "../config/firebaseConfig"; 

const useLocationData = () => {
  const [loading, setLoading] = useState(true);
  const [location, setLocation] = useState(null);

  useEffect(() => {
    const dbRef = ref(database, "locations/latest");
    const unsubscribe = onValue(dbRef, (snapshot) => {
      setLocation(snapshot.val());
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

    return {
      data: location,
      loading,
    };
  };


export default useLocationData;
