import { useState, useEffect } from "react";
import { ref, onValue, push, set, update, remove } from "firebase/database";
import { database } from "../config/firebaseConfig";

const useOrderData = () => {
  const [orders, setOrders] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const dbRef = ref(database, "orders");
    const unsubscribe = onValue(dbRef, (snapshot) => {
      setOrders(snapshot.val());
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const addOrder = (userId, value) => {
    const dbRef = ref(database, `orders/${userId}`);
    const newRef = push(dbRef);
    return set(newRef, value);
  };

  const updateOrder = (userId, orderId, status, updatedFields) => {
    const dbRef = ref(database, `orders/${userId}/${orderId}`);
    return update(dbRef, {
      ...updatedFields,
      status,
    });
  };

  const deleteOrder = (userId, orderId) => {
    const dbRef = ref(database, `orders/${userId}/${orderId}`);
    return remove(dbRef);
  };

  return {
    data: orders,
    loading,
    addOrder,
    updateOrder,
    deleteOrder,
  };
};

export default useOrderData;
