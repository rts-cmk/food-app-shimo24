import React, { useState } from "react";
import FoodgoUI from "./components/FoodgoUI";
import ProductDetail from "./components/ProductDetail"; // varsa
import ProfilePage from "./components/ProfilePage";
import "./styles/main.scss";


export default function App() {
  const [view, setView] = useState("home");     // 'home' | 'detail' | 'profile'
  const [selected, setSelected] = useState(null);

  if (view === "profile") return <ProfilePage onBack={() => setView("home")} />;
  if (view === "detail" && selected)
    return <ProductDetail item={selected} onBack={() => setView("home")} />;

  return (
    <FoodgoUI
      onOpen={(item) => { setSelected(item); setView("detail"); }}
      onOpenProfile={() => setView("profile")}
    />
  );
}
