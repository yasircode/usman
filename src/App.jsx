import React, { useState } from 'react';
import myProfilePhoto from '/newmy.jpg'; // Ensure this path is correct

const LicensePortal = () => {
  const [cnic, setCnic] = useState('');
  const [showCard, setShowCard] = useState(false);
  const [userData, setUserData] = useState(null);

  const handleVerify = () => {
    // Sirf is specific CNIC ko allow karne ke liye condition
    const allowedCNIC = "3450255147843";

    if (cnic !== allowedCNIC) {
      alert("Record Not Found! Please enter the correct CNIC.");
      setShowCard(false); 
      return;
    }

    // Agar number match kar gaya, to ye data show hoga
    setUserData({
      name: "yasir Hussain",
      father: "Bashir Ahmed",
      licenceNo: "PJ-25-41350",
      dob: "01-01-2002",
      BloodGroup: "AB postive",
      CNIC: "34502-5514784-3",
      height: "5' 5\"",
      address: "MOHALLAH ABADI YOUSAF PARK,LAHORE",
      issueDate: "10-05-2022",
      expiryDate: "10-05-2027",
      photo: myProfilePhoto,
      allowedVehicles: ["Motorbike", "Car", "Jeep"] 
    });
    setShowCard(true);
  };

  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      {/* Navbar */}
      <nav className="bg-[#006633] text-white p-4 shadow-lg border-b-4 border-yellow-500">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="bg-white p-1">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRo42KPh4BzLqTIZIKSgHFJyCsEjJEv0dtisQ&s" alt="Punjab Police" className="w-45 h-12 object-contain" />
            </div>
            <div>
              <h1 className="font-bold text-lg leading-tight uppercase">Traffic Police Punjab</h1>
              <p className="text-[10px] tracking-widest">Digital Verification System</p>
            </div>
          </div>
          <div className="hidden md:flex gap-6 text-sm font-medium">
            <a href="#" className="hover:text-yellow-400">HOME</a>
            <a href="#" className="hover:text-yellow-400">DLIMS</a>
            <a href="#" className="hover:text-yellow-400">Contact</a>
          </div>
        </div>
      </nav>

      {/* Search Section */}
      <div className="container mx-auto mt-10 p-6 max-w-2xl bg-white rounded-xl shadow-md text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">License Verification</h2>
        <div className="flex flex-col md:flex-row gap-2">
          <input 
            type="text" 
            placeholder="Enter CNIC (e.g. Valid Cnic)" 
            className="flex-1 p-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-[#006633]"
            value={cnic}
            onChange={(e) => setCnic(e.target.value)}
          />
          <button 
            onClick={handleVerify}
            className="bg-[#006633] hover:bg-[#004d26] text-white px-8 py-3 rounded-lg font-bold transition duration-300"
          >
            VERIFY
          </button>
        </div>
      </div>

      {/* License Card Result */}
      {showCard && userData && (
        <div className="container mx-auto mt-10 max-w-3xl animate-in fade-in duration-500 pb-10">
          <div className="bg-white border border-gray-300 rounded-2xl overflow-hidden shadow-2xl">
            {/* Card Header */}
            <div className="bg-[#006633] text-white p-4 text-center">
              <h3 className="text-xl font-bold tracking-tighter">GOVERNMENT OF THE PUNJAB</h3>
              <p className="text-xs">DRIVING LICENCE</p>
            </div>

            {/* Card Body */}
            <div className="flex flex-col md:flex-row p-6 gap-8">
              {/* Photo Area */}
              <div className="flex flex-col items-center">
                <img 
                  src={userData.photo} 
                  alt="Profile" 
                  className="w-40 h-48 object-cover border-4 border-[#006633] rounded-md shadow-md bg-gray-50"
                />
                <div className="mt-4 bg-green-100 text-green-800 px-4 py-1 rounded-full text-xs font-bold border border-green-200">
                  STATUS: VALID
                </div>
              </div>

              {/* Data Grid */}
              <div className="grid grid-cols-2 gap-y-4 gap-x-8 flex-1">
                <DetailItem label="FULL NAME" value={userData.name} />
                <DetailItem label="FATHER NAME" value={userData.father} />
                <DetailItem label="LICENCE NO" value={userData.licenceNo} />
                <DetailItem label="DATE OF BIRTH" value={userData.dob} />
                <DetailItem label="Blood Group" value={userData.BloodGroup} />
                <DetailItem label="CNIC" value={userData.CNIC} />
                <DetailItem label="HEIGHT" value={userData.height} />
                <DetailItem label="ISSUE DATE" value={userData.issueDate} />
                <DetailItem label="EXPIRY DATE" value={userData.expiryDate} />
                
                {/* Vehicles Allowed Section */}
                <div className="col-span-2 mt-2">
                    <p className="text-[10px] text-gray-500 font-bold uppercase mb-1">Allowed Vehicles</p>
                    <div className="flex gap-2">
                        {userData.allowedVehicles.map((vehicle, index) => (
                            <span key={index} className="bg-gray-200 text-gray-800 text-[10px] px-3 py-1 rounded font-bold border border-gray-300">
                                {vehicle.toUpperCase()}
                            </span>
                        ))}
                    </div>
                </div>

                <div className="col-span-2">
                  <DetailItem label="PERMANENT ADDRESS" value={userData.address} />
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 p-3 border-t text-center">
              <p className="text-[10px] text-gray-400">This is a computer generated document from Punjab Traffic Police.</p>
            </div>
          </div>
        </div>
      )}

      {/* Footer / Dastak Section */}
      <div className="relative w-full mt-20 overflow-hidden">
        <div 
          className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-[#44a74e] via-[#48b252] to-[#3a9143]"
          style={{
            clipPath: "ellipse(100% 100% at 50% 100%)",
            transform: "scaleY(1.2) translateY(20%)"
          }}
        ></div>

        <div className="relative container mx-auto px-6 pt-24 pb-12 text-white">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-center gap-2">
                <div className="bg-white px-4 py-2 rounded-lg">
                   <span className="text-[#3a9143] font-black text-3xl italic">Dastak</span>
                   <p className="text-[#3a9143] text-[10px] font-bold leading-none -mt-1">Doorstep Delivery of Services</p>
                </div>
              </div>
              <p className="text-sm md:text-base leading-relaxed max-w-lg opacity-95">
                The Driving License Information Management System (DLIMS) is an integrated component 
                of the Government of Punjab's <strong>Dastak</strong>...
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 shadow-2xl">
              <div className="space-y-4">
                <div className="flex items-center gap-4 bg-white/20 p-3 rounded-2xl">
                  <div className="bg-yellow-400 p-2 rounded-full text-[#3a9143]">
                    <span className="text-xl">📞</span>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase font-bold opacity-70">Emergency Number</p>
                    <p className="text-xl font-black italic">15</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center mt-12 pt-6 border-t border-white/10 text-[10px] opacity-60 uppercase tracking-widest">
              © 2026 Government of Punjab | DLIMS Portal
          </div>
        </div>
      </div>
    </div>
  );
};

const DetailItem = ({ label, value }) => (
  <div>
    <p className="text-[10px] text-gray-500 font-bold uppercase">{label}</p>
    <p className="text-sm font-semibold text-gray-900">{value}</p>
  </div>
);

export default LicensePortal;