import React, { useState } from 'react';
import myProfilePhoto from '/newmy.jpg';

const LicensePortal = () => {
  const [demoId, setDemoId] = useState('');
  const [showCard, setShowCard] = useState(false);
  const [userData, setUserData] = useState(null);

  const handleVerify = () => {
    const allowedID = "DEMO123";

    if (demoId !== allowedID) {
      alert("Demo Record Not Found!");
      setShowCard(false);
      return;
    }

    setUserData({
      name: "Usman Ali",
      id: "DEMO123",
      dob: "01-01-2002",
      status: "Active",
      issueDate: "10-05-2022",
      expiryDate: "10-05-2027",
      photo: myProfilePhoto,
      vehicles: ["Motorbike", "Car", "Jeep"]
    });

    setShowCard(true);
  };

  return (
    <div className="min-h-screen bg-gray-100 font-sans">

      {/* TOP NOTICE */}
      <div className="bg-black text-white text-center py-2 text-xs font-bold uppercase">
        Demo Portfolio Project – Not an official website
      </div>

      {/* Navbar */}
      <nav className="bg-blue-600 text-white p-4 shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="font-bold text-lg">License Card Demo</h1>
          <span className="text-sm opacity-80">UI Showcase</span>
        </div>
      </nav>

      {/* Search Section */}
      <div className="container mx-auto mt-10 p-6 max-w-xl bg-white rounded-xl shadow-md text-center">
        <h2 className="text-2xl font-bold mb-4">Demo Verification</h2>

        <div className="flex flex-col gap-3">
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Enter Demo ID (DEMO123)"
              className="flex-1 p-3 border rounded-lg"
              value={demoId}
              onChange={(e) => setDemoId(e.target.value)}
            />

            <button
              onClick={handleVerify}
              className="bg-blue-600 text-white px-6 rounded-lg font-bold"
            >
              CHECK
            </button>
          </div>

          <p className="text-xs text-gray-500">
            This is a demo system. Do not enter real personal data.
          </p>
        </div>
      </div>

      {/* Card */}
      {showCard && userData && (
        <div className="container mx-auto mt-10 max-w-2xl">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">

            <div className="bg-blue-600 text-white p-4 text-center">
              <h3 className="text-lg font-bold">Demo License Card</h3>
            </div>

            <div className="p-6 flex gap-6">
              <img
                src={userData.photo}
                alt="profile"
                className="w-32 h-40 object-cover rounded-lg border"
              />

              <div className="grid grid-cols-2 gap-4 text-sm">
                <Detail label="Name" value={userData.name} />
                <Detail label="ID" value={userData.id} />
                <Detail label="DOB" value={userData.dob} />
                <Detail label="Status" value={userData.status} />
                <Detail label="Issue Date" value={userData.issueDate} />
                <Detail label="Expiry" value={userData.expiryDate} />

                <div className="col-span-2">
                  <p className="text-xs text-gray-500">Vehicles</p>
                  <div className="flex gap-2 mt-1">
                    {userData.vehicles.map((v, i) => (
                      <span key={i} className="bg-gray-200 px-2 py-1 rounded text-xs">
                        {v}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center text-xs text-gray-400 pb-4">
              Portfolio Demo by Yasir Hussain
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

const Detail = ({ label, value }) => (
  <div>
    <p className="text-gray-500 text-xs">{label}</p>
    <p className="font-semibold">{value}</p>
  </div>
);

export default LicensePortal;