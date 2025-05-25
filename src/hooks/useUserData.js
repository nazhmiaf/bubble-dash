import { useState, useEffect } from "react";
import { ref, onValue, push, set, update, remove } from "firebase/database";
import { database } from "../config/firebaseConfig"; // Import your Firebase configuration

const useUserData = () => {
  const [users, setUsers] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const dbRef = ref(database, "users");
    const unsubscribe = onValue(dbRef, (snapshot) => {
      setUsers(snapshot.val());
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const addUserData = async (value) => {
    const dbRef = ref(database, "users");
    const newRef = push(dbRef);
    return await set(newRef, value);
  };

  const updateUserData = async (userId, value) => {
    const dbRef = ref(database, `users/${userId}`);
    return await update(dbRef, value);
  };

  const deleteUserData = async (userId, alsoDeleteOrders = false) => {
    const dbUserRef = ref(database, `users/${userId}`);
    const dbOrderRef = ref(database, `orders/${userId}`);
    try {
      await remove(dbUserRef);
      if (alsoDeleteOrders) {
        await remove(dbOrderRef);
      }
    } catch (err) {
      console.error("Gagal menghapus user:", err);
      throw err;
    }
  }

    return {
      data: users,
      loading,
      addUserData,
      updateUserData,
      deleteUserData,
    };
  };


export default useUserData;
