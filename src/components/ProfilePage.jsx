import React, { useState } from "react";

/* basit ikonlar */
const Icon = ({ d, size=22, stroke=1.6 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
       stroke="currentColor" strokeWidth={stroke} strokeLinecap="round" strokeLinejoin="round">
    <path d={d}/>
  </svg>
);
const ArrowLeft = (p)=> <Icon {...p} d="M15 18l-6-6 6-6M21 12H9"/>;
const Settings  = (p)=> <Icon {...p} d="M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm9 4-2 1 1 2-2 2-2-1-1 2h-4l-1-2-2 1-2-2 1-2-2-1 1-3 2 1 1-2 3-1 1 2 2-1 2 2-1 2 2 1z"/>;
const Lock      = (p)=> <Icon {...p} d="M7 11V8a5 5 0 1 1 10 0v3M5 11h14v10H5z"/>;
const Eye       = (p)=> <Icon {...p} d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7S1 12 1 12Zm11 4a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"/>;
const EyeOff    = (p)=> <Icon {...p} d="M3 3l18 18M10.6 10.6a4 4 0 0 0 5.66 5.66M9 15A4 4 0 0 1 9 9m-6 3s4-7 11-7c2.06 0 3.9.5 5.5 1.3M5.1 5.1C2.5 6.6 1 9 1 12c0 0 4 7 11 7 2.2 0 4.15-.6 5.83-1.54"/>;

export default function ProfilePage({ onBack = () => {} }) {
  const [values, setValues] = useState({
    name: "Sophia Patel",
    email: "sophiapatel@gmail.com",
    address: "123 Main St Apartment 4A, New York, NY",
    password: "password",
  });
  const [showPw, setShowPw] = useState(false);

  const update = (key) => (e) => setValues({ ...values, [key]: e.target.value });

  return (
    <div className="fg-prof">
      {}
      <div className="fg-prof-top">
        <button className="fg-prof-ghost" onClick={onBack} aria-label="back"><ArrowLeft/></button>
        <button className="fg-prof-ghost" aria-label="settings"><Settings/></button>
        <div className="fg-prof-avatar">
          <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=240&auto=format&fit=crop&q=60" alt="avatar"/>
        </div>
      </div>

      {}
      <div className="fg-prof-body">
        <div className="fg-field">
          <div className="fg-field-label">Name</div>
          <input
            className="fg-input"
            type="text"
            value={values.name}
            onChange={update("name")}
          />
        </div>

        <div className="fg-field">
          <div className="fg-field-label">Email</div>
          <input
            className="fg-input"
            type="email"
            value={values.email}
            onChange={update("email")}
          />
        </div>

        <div className="fg-field">
          <div className="fg-field-label">Delivery address</div>
          <textarea
            className="fg-input fg-textarea"
            rows={2}
            value={values.address}
            onChange={update("address")}
          />
        </div>

        <div className="fg-field">
          <div className="fg-field-label">
            Password <span className="fg-lock"><Lock size={16}/></span>
          </div>
          <div className="fg-input fg-input-row">
            <input
              className="fg-input-inner"
              type={showPw ? "text" : "password"}
              value={values.password}
              onChange={update("password")}
            />
            <button
              type="button"
              className="fg-eye-btn"
              onClick={() => setShowPw(s => !s)}
              aria-label={showPw ? "Hide password" : "Show password"}
            >
              {showPw ? <EyeOff/> : <Eye/>}
            </button>
          </div>
        </div>
      </div>

      {/* alt butonlar (opsiyonel) */}
      <div className="fg-prof-actions">
        <button className="fg-btn-dark">Save</button>
        <button className="fg-btn-outline-red">Log out</button>
      </div>
    </div>
  );
}
