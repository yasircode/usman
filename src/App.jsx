import React, { useState } from 'react';
import myProfilePhoto from './assets/newmy.jpg'; 

const LicensePortal = () => {
  const [cnic, setCnic] = useState('');
  const [showCard, setShowCard] = useState(false);
  const [userData, setUserData] = useState(null);

  const handleVerify = () => {
    // Demo purpose restricted CNIC
    const allowedCNIC = "3450255147843";

    if (cnic !== allowedCNIC) {
      alert("No record found in the local database.");
      setShowCard(false); 
      return;
    }

    setUserData({
      name: "Usman Ali",
      father: "Bashir Ahmed",
      licenceNo: "PJ-25-41350",
      dob: "01-JAN-2002",
      CNIC: "34502-5514784-3",
      height: "5' 5\"",
      address: "MOHAALLAH ABADI YOUSAF PARK, LAHORE",
      issueDate: "10-5-2022",
      expiryDate: "10-5-2027",
      photo: myProfilePhoto,
      allowedVehicles: ["Motorbike", "Car", "Jeep"] 
    });
    setShowCard(true);
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* Disclaimer Bar - VERY IMPORTANT to avoid Red Flags */}
      <div className="bg-yellow-500 text-black text-[10px] text-center py-1 font-bold uppercase tracking-tighter">
        Notice: This is a Digital Verification Mockup for Portfolio Purposes.
      </div>

      {/* Navbar */}
      <nav className="bg-[#006633] text-white p-4 shadow-lg border-b-4 border-yellow-500">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3">
            {/* Generic Icon instead of Official Logo */}
            <div className="bg-white p-2 rounded-md">
                <div className="w-10 h-10 border-2 border-[#006633] flex items-center justify-center text-[#006633] font-black italic">VP</div>
            </div>
            <div>
              <h1 className="font-bold text-lg leading-tight uppercase">Verification Portal Punjab</h1>
              <p className="text-[10px] tracking-widest opacity-80">Online Document Validation System</p>
            </div>
          </div>
          <div className="hidden md:flex gap-6 text-sm font-medium">
            <a href="#" className="hover:text-yellow-400">DASHBOARD</a>
            <a href="#" className="hover:text-yellow-400">REPORTS</a>
            <a href="#" className="hover:text-yellow-400">SUPPORT</a>
          </div>
        </div>
      </nav>

      {/* Search Section */}
      <div className="container mx-auto mt-10 p-8 max-w-2xl bg-white rounded-2xl shadow-xl border border-gray-100 text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Record Search</h2>
        <p className="text-gray-500 text-sm mb-6">Enter the identification number to verify status</p>
        <div className="flex flex-col md:flex-row gap-3">
          <input 
            type="text" 
            placeholder="34502XXXXXXXX" 
            className="flex-1 p-4 border-2 border-gray-100 rounded-xl focus:outline-none focus:border-[#006633] bg-gray-50 transition-all"
            value={cnic}
            onChange={(e) => setCnic(e.target.value)}
          />
          <button 
            onClick={handleVerify}
            className="bg-[#006633] hover:bg-[#004d26] text-white px-10 py-4 rounded-xl font-bold transition duration-300 shadow-lg shadow-green-900/20"
          >
            VERIFY NOW
          </button>
        </div>
      </div>

      {/* Result Card */}
      {showCard && userData && (
        <div className="container mx-auto mt-10 max-w-3xl animate-in fade-in slide-in-from-bottom-4 duration-700 pb-10 px-4">
          <div className="bg-white border border-gray-200 rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)]">
            {/* Header */}
            <div className="bg-gradient-to-r from-[#006633] to-[#004d26] text-white p-6 text-center">
              <h3 className="text-xl font-bold tracking-widest">DIGITAL RECORD CARD</h3>
              <p className="text-[10px] opacity-70">VALID ELECTRONIC DOCUMENT</p>
            </div>

            <div className="flex flex-col md:flex-row p-8 gap-10">
              {/* Photo */}
              <div className="flex flex-col items-center">
                <div className="relative">
                    <img 
                      src={userData.photo} 
                      alt="Profile" 
                      className="w-40 h-48 object-cover border-4 border-white rounded-2xl shadow-xl"
                    />
                    <div className="absolute -bottom-2 bg-green-500 text-white px-4 py-1 rounded-full text-[10px] font-bold shadow-md">
                      STATUS: ACTIVE
                    </div>
                </div>
              </div>

              {/* Grid */}
              <div className="grid grid-cols-2 gap-y-5 gap-x-10 flex-1">
                <DetailItem label="Full Name" value={userData.name} />
                <DetailItem label="Guardian Name" value={userData.father} />
                <DetailItem label="Reference No" value={userData.licenceNo} />
                <DetailItem label="Birth Date" value={userData.dob} />
                <DetailItem label="Identity No" value={userData.CNIC} />
                <DetailItem label="Valid Until" value={userData.expiryDate} />
                
                <div className="col-span-2">
                    <p className="text-[10px] text-gray-400 font-bold uppercase mb-2">Category Allowed</p>
                    <div className="flex gap-2">
                        {userData.allowedVehicles.map((v, i) => (
                            <span key={i} className="bg-green-50 text-[#006633] text-[10px] px-3 py-1 rounded-md font-bold border border-green-100 uppercase">
                                {v}
                            </span>
                        ))}
                    </div>
                </div>

                <div className="col-span-2 border-t pt-4">
                  <DetailItem label="Registered Address" value={userData.address} />
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 p-4 border-t text-center">
              <p className="text-[9px] text-gray-400 uppercase tracking-widest">Electronic validation hash: 8821-X92-2026</p>
            </div>
          </div>
        </div>
      )}

      {/* Footer Section */}
      <footer className="mt-20 bg-slate-900 text-white py-10 px-6 text-center">
         <div className="max-w-4xl mx-auto opacity-80">
            <h4 className="font-bold text-yellow-500 mb-2">PORTAL DISCLAIMER</h4>
            <p className="text-xs leading-relaxed italic">
                This website is a technical demonstration. It is not affiliated with any government agency. 
                Data shown is for mock verification purposes only. Please visit official portals for actual legal documents.
            </p>
            <div className="mt-6 pt-6 border-t border-white/10 text-[10px] uppercase tracking-widest opacity-50">
                © 2026 Developer Project | Systems Lab
            </div>
         </div>
      </footer>
    </div>
  );
};

const DetailItem = ({ label, value }) => (
  <div>
    <p className="text-[10px] text-gray-400 font-bold uppercase tracking-tight">{label}</p>
    <p className="text-sm font-bold text-slate-800 leading-tight">{value}</p>
  </div>
);

export default LicensePortal;