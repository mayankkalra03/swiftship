import React, { useState } from 'react';

const shipmentsData = [
  {
    id: 1,
    senderName: 'John Doe',
    senderAddress: '123 Sender St, City, Country',
    receiverName: 'Jane Smith',
    receiverAddress: '456 Receiver St, City, Country',
    itemType: 'Books',
    weight: 2,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtCyGq73Yl8yr0YzSuxuS8-fJUQVGXDgPJRw&s',
    totalCost: 2 * 100,
    status: 'Picked'
  },
  {
    id: 2,
    senderName: 'Alice Johnson',
    senderAddress: '789 Sender Rd, City, Country',
    receiverName: 'Bob Brown',
    receiverAddress: '101 Receiver Rd, City, Country',
    itemType: 'Electronics',
    weight: 1.5,
    image: 'https://i.dell.com/is/image/DellContent/content/dam/images/products/electronics-and-accessories/dell/pointing-devices/ms300/ms300-kbm-04-bk.psd?fmt=pjpg&pscan=auto&scl=1&wid=4141&hei=3475&qlt=100,1&resMode=sharp2&size=4141,3475&chrss=full&imwidth=5000',
    totalCost: 1.5 * 100,
    status: 'In Transit'
  },
  {
    id: 3,
    senderName: 'Charlie Davis',
    senderAddress: '234 Sender Ln, City, Country',
    receiverName: 'Diana Evans',
    receiverAddress: '567 Receiver Ln, City, Country',
    itemType: 'Clothing',
    weight: 3,
    image: 'https://m.media-amazon.com/images/I/81ZUL5rCfmL._AC_UY1100_.jpg',
    totalCost: 3 * 100,
    status: 'Delivered'
  },
  {
    id: 4,
    senderName: 'Eva Foster',
    senderAddress: '890 Sender Ave, City, Country',
    receiverName: 'Frank Green',
    receiverAddress: '321 Receiver Ave, City, Country',
    itemType: 'Toys',
    weight: 2.5,
    image: 'https://images.pexels.com/photos/207891/pexels-photo-207891.jpeg?cs=srgb&dl=pexels-pixabay-207891.jpg&fm=jpg',
    totalCost: 2.5 * 100,
    status: 'Picked'
  },
  {
    id: 5,
    senderName: 'George Hill',
    senderAddress: '654 Sender Blvd, City, Country',
    receiverName: 'Hannah Ice',
    receiverAddress: '987 Receiver Blvd, City, Country',
    itemType: 'Furniture',
    weight: 10,
    image: 'https://www.at-home.co.in/cdn/shop/products/Somerville3str_45.jpg?v=1657281898',
    totalCost: 10 * 100,
    status: 'In Transit'
  }
];

const AdminDashboard = () => {
  const [shipments, setShipments] = useState(shipmentsData);
  const totalUsers = 10; // Static value for total registered users

  const handleStatusChange = (id, status) => {
    const updatedShipments = shipments.map(shipment => 
      shipment.id === id ? { ...shipment, status } : shipment
    );
    setShipments(updatedShipments);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl mb-6 mt-2 text-center text-yellow-800 font-bold">Admin Dashboard</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
        <div className="bg-orange-300/50 rounded-lg shadow-lg p-6 text-center">
          <img className="inline-block w-20 h-20 rounded-full" src="https://st3.depositphotos.com/5572200/15094/v/450/depositphotos_150942812-stock-illustration-a-man-is-riding-a.jpg" alt="Hi" />
          <h2 className="text-lg font-semibold">Total Shipments</h2>
          <p className="text-2xl">{shipments.length}</p>
        </div>
        <div className="bg-yellow-300/80 rounded-lg shadow-lg p-6 text-center">
          <img className="inline-block w-20 h-20 rounded-full" src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1720569600&semt=ais_user" alt="Hi" />
          <h2 className="text-lg font-semibold">Total Registered Users</h2>
          <p className="text-2xl">{totalUsers}</p>
        </div>
      </div>
      <div className="space-y-4">
        {shipments.map((shipment) => (
          <div key={shipment.id} className="bg-white/80 rounded-lg shadow-lg p-4 flex space-x-4">
            <img src={shipment.image} alt={`Item ${shipment.id}`} className="w-24 h-24 object-cover rounded-lg" />
            <div className="flex-grow">
              <h2 className="text-xl text-yellow-800 font-bold">{shipment.itemType}</h2>
              <p><span className="font-semibold">Sender:</span> {shipment.senderName}</p>
              <p><span className="font-semibold">Sender Address:</span> {shipment.senderAddress}</p>
              <p><span className="font-semibold">Receiver:</span> {shipment.receiverName}</p>
              <p><span className="font-semibold">Receiver Address:</span> {shipment.receiverAddress}</p>
              <p><span className="font-semibold">Weight:</span> {shipment.weight} kg</p>
              <p><span className="font-semibold">Total Cost:</span> ₹{shipment.totalCost}</p>
              <p><span className="font-semibold text-green-500">Status:</span> {shipment.status}</p>
              <select
                value={shipment.status}
                onChange={(e) => handleStatusChange(shipment.id, e.target.value)}
                className="mt-2 p-2 border rounded"
              >
                <option value="Picked">Picked</option>
                <option value="In Transit">In Transit</option>
                <option value="Delivered">Delivered</option>
              </select>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminDashboard;
