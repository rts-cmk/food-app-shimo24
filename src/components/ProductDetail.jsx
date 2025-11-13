import React, { useState } from "react";

/* küçük ikonlar (paketsiz) */
const Icon = ({ d, size=22, stroke=1.6 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
       stroke="currentColor" strokeWidth={stroke} strokeLinecap="round" strokeLinejoin="round">
    <path d={d} />
  </svg>
);
const ArrowLeft = (p)=> <Icon {...p} d="M15 18l-6-6 6-6M21 12H9"/>;
const Search    = (p)=> <Icon {...p} d="M21 21l-4.3-4.3M11 19a8 8 0 1 1 0-16 8 8 0 0 1 0 16z"/>;
const Star      = (p)=> <Icon {...p} d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.62L12 2 9.19 8.62 2 9.24l5.46 4.73L5.82 21 12 17.27z"/>;
const Minus     = (p)=> <Icon {...p} d="M5 12h14"/>;
const Plus      = (p)=> <Icon {...p} d="M12 5v14M5 12h14"/>;

export default function ProductDetail({ item, onBack }) {
  const [spicy, setSpicy] = useState(0.5);
  const [qty, setQty] = useState(2);
  const total = (item.price * qty).toFixed(2);

  return (
    <div className="fg-detail">
      {/* üst bar */}
      <div className="fg-detail-top">
        <button className="fg-ghost" onClick={onBack}><ArrowLeft/></button>
        <button className="fg-ghost"><Search/></button>
      </div>

      {/* büyük görsel */}
      <div className="fg-detail-image">
        <img src={item.img} alt={item.title}/>
      </div>

      {/* içerik */}
      <div className="fg-detail-body">
        <h1 className="fg-d-title">{item.title} {item.subtitle}</h1>

        <div className="fg-d-rating">
          <span className="fg-star-text"><Star size={16} className="fg-star"/> {item.rating}</span>
          <span className="fg-dot">•</span>
          <span className="fg-muted">{item.time}</span>
        </div>

        <p className="fg-d-desc">{item.desc}</p>

        <div className="fg-d-row">
          {/* Spicy */}
          <div className="fg-d-col">
            <div className="fg-muted">Spicy</div>
            <input
              className="fg-range"
              type="range" min="0" max="1" step="0.01"
              value={spicy} onChange={(e)=>setSpicy(parseFloat(e.target.value))}
            />
            <div className="fg-d-scale">
              <span className="fg-green">Mild</span>
              <span className="fg-red">Hot</span>
            </div>
          </div>

          {/* Portion */}
          <div className="fg-d-col fg-portion">
            <div className="fg-muted">Portion</div>
            <div className="fg-stepper">
              <button className="fg-step" onClick={()=>setQty(q=>Math.max(1,q-1))}><Minus/></button>
              <div className="fg-step-val">{qty}</div>
              <button className="fg-step" onClick={()=>setQty(q=>q+1)}><Plus/></button>
            </div>
          </div>
        </div>
      </div>

      {/* alt sipariş barı */}
      <div className="fg-orderbar">
        <div className="fg-price">${total}</div>
        <button className="fg-order-btn">ORDER NOW</button>
      </div>
    </div>
  );
}
