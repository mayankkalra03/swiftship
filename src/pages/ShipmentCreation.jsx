import React, { useState } from 'react';
import { auth, db } from '../firebase';
import { collection, addDoc } from 'firebase/firestore';
import razorpay from '../services/razorpay';

const ShipmentCreation = () => {
  const [shipmentDetails, setShipmentDetails] = useState({
    itemType: '',
    weight: '',
    name: '',
    address: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setShipmentDetails({
      ...shipmentDetails,
      [name]: value
    });
  };

  const calculateAmount = () => {
    // Implement your calculation logic based on weight, for example:
    const ratePerKg = 5; // Example rate per kg
    const weight = parseFloat(shipmentDetails.weight);
    return weight * ratePerKg; // Assuming INR
  };

  const handleCreateShipment = async (e) => {
    e.preventDefault();
    try {
      const docRef = await addDoc(collection(db, "shipments"), {
        ...shipmentDetails,
        amount: calculateAmount(), // Calculate amount based on weight
        userId: auth.currentUser.uid,
        status: "created"
      });

      const options = {
        key: "YOUR_KEY_ID", // Replace with your actual Razorpay key ID
        amount: calculateAmount() * 100, // Amount in paisa
        currency: "INR",
        name: "Shipment Payment",
        description: "Test Transaction",
        order_id: docRef.id, // Unique order ID from Firestore
        handler: function (response) {
          alert(response.razorpay_payment_id);
          alert(response.razorpay_order_id);
          alert(response.razorpay_signature);
        },
        prefill: {
          name: auth.currentUser.displayName,
          email: auth.currentUser.email,
          contact: "9999999999" // Replace with user's actual contact number
        }
      };
      const rzp = new razorpay(options);
      rzp.open();
    } catch (error) {
      console.error("Error creating shipment:", error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <div className="max-w-lg mx-auto bg-white/40 rounded-lg overflow-hidden shadow-lg">
        <h1 className="text-2xl font-bold bg-yellow-800 text-center py-2 px-4 text-white">Create Shipment</h1>
        <form onSubmit={handleCreateShipment} className="p-4 space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-bold text-gray-700 mb-2">Recipient Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={shipmentDetails.name}
              onChange={handleInputChange}
              className="appearance-none bg-white/50 border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:shadow-outline resize-none"
              placeholder="Enter recipient's name"
              required
            />
          </div>
          <div>
            <label htmlFor="address" className="block text-sm font-bold text-gray-700 mb-2">Delivery Address</label>
            <textarea
              id="address"
              name="address"
              value={shipmentDetails.address}
              onChange={handleInputChange}
              rows="2"
              className="appearance-none bg-white/50 border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:shadow-outline resize-none"
              placeholder="Enter delivery address"
              required
            ></textarea>
          </div>
          <div>
            <label htmlFor="itemType" className="block text-sm font-bold text-gray-700 mb-2">Type of Item</label>
            <input
              type="text"
              id="itemType"
              name="itemType"
              value={shipmentDetails.itemType}
              onChange={handleInputChange}
              className="appearance-none bg-white/50 border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:shadow-outline resize-none"
              placeholder="Enter type of item"
              required
            />
          </div>
          <div>
            <label htmlFor="weight" className="block text-sm font-bold text-gray-700 mb-2">Weight (kg)</label>
            <input
              type="number"
              id="weight"
              name="weight"
              value={shipmentDetails.weight}
              onChange={handleInputChange}
              className="appearance-none bg-white/50 border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:shadow-outline resize-none"
              placeholder="Enter weight of item"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-yellow-800 hover:bg-yellow-600 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Create Shipment
          </button>
        </form>
      </div>
    </div>
  );
};

export default ShipmentCreation;
