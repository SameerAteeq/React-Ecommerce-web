import React, { useState } from "react";
import Home from "./component/Home";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import "./index.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Contact from "./component/Contact";
import About from "./component/About";
import Header from "./component/Header";
import FullCard from "./component/FullCard";
import { DataContext, ProductContext } from "./helper";
import WishCart from "./component/WishCart";
import "./index.css";
const Items = [
  {
    id: 1,
    title: "Mens Shoes",
    images: ["https://source.unsplash.com/J2-wAQDckus", "https://source.unsplash.com/S6Cp3uN39_M", "https://source.unsplash.com/LG88A2XgIXY"],

    description: " This shoe is good enough to pass your 3 to 4 years life",
    price: 1200,
    quantity: 1,
  },
  {
    id: 2,
    title: "Women Shoes",
    images: ["https://source.unsplash.com/SzVXG6FFh0Q", "https://source.unsplash.com/J2-wAQDckus", "https://source.unsplash.com/1vy2QcZd5FU"],
    ImgUrl: "https://source.unsplash.com/SzVXG6FFh0Q",
    description: " This shoe is good enough to pass your 3 to 4 years life",
    price: 1350,
    quantity: 1,
  },
  {
    id: 3,
    title: "Children Shoes",
    images: ["https://source.unsplash.com/1vy2QcZd5FU", "https://source.unsplash.com/NOpsC3nWTzY", "https://source.unsplash.com/LtB12xWnkpw", "https://source.unsplash.com/Ai356rggKvw"],

    ImgUrl: "https://source.unsplash.com/ad_0wMHtvlU",
    description: " This shoe is good enough to pass your 3 to 4 years life",
    price: 2000,
    quantity: 1,
  },
  {
    id: 4,
    title: "Sport Shoes",
    images: ["https://source.unsplash.com/HcqA34-uWo4", "https://source.unsplash.com/SzVXG6FFh0Q", "https://source.unsplash.com/LG88A2XgIXY"],

    ImgUrl: "https://source.unsplash.com/h-Bkya1hamI",
    description: " This shoe is good enough to pass your 3 to 4 years life",
    price: 1250,
    quantity: 1,
  },
  {
    id: 5,
    title: "Jogging Shoes",
    images: ["https://source.unsplash.com/SzVXG6FFh0Q", "https://source.unsplash.com/HcqA34-uWo4", "https://source.unsplash.com/JM-qKEd1GMI"],

    ImgUrl: "https://source.unsplash.com/LxVxPA1LOVM",
    description: " This shoe is good enough to pass your 3 to 4 years life",
    price: 3210,
    quantity: 1,
  },
  {
    id: 6,
    title: "Running Shoes",
    images: ["https://source.unsplash.com/XPBYi4K8vFI", "https://source.unsplash.com/HcqA34-uWo4", "https://source.unsplash.com/JM-qKEd1GMI"],
    description: " This shoe is good enough to pass your 3 to 4 years life",
    price: 2022,
    quantity: 1,
  },
  {
    id: 7,
    title: "Gym Shoes",
    images: ["https://source.unsplash.com/HcqA34-uWo4", "https://source.unsplash.com/JM-qKEd1GMI", "https://source.unsplash.com/SzVXG6FFh0Q"],
    description: " This shoe is good enough to pass your 3 to 4 years life",
    price: 3020,
    quantity: 1,
  },
  {
    id: 8,
    title: "Working Shoes",
    images: ["https://source.unsplash.com/JM-qKEd1GMI", "https://source.unsplash.com/HcqA34-uWo4", "https://source.unsplash.com/J2-wAQDckus"],
    description: " This shoe is good enough to pass your 3 to 4 years life",
    price: 4250,
    quantity: 1,
  },
];

function App() {

  const [selectedCard, setSelectedCards] = useState([]);
  const [wishList, setWishList] = useState([]);
  const [open, setOpen] = useState(false)
  const [total, setTotal] = useState(0);
  return (
    <BrowserRouter>
      <DataContext.Provider value={{ Items }} >
        <ProductContext.Provider value={{ selectedCard, setSelectedCards, total, setTotal, open, setOpen, wishList, setWishList }} >
          <Routes selectedCard={selectedCard} setSelectedCards={setSelectedCards}>
            <Route path="/" element={<Header />}>
              <Route index element={<Home />} />
              <Route path="/wishcart" element={<WishCart />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/about" element={<About />} />
              <Route path="/about/:id" element={<FullCard />} />
            </Route>
            <Route path="*" element={<h1>404 ERROR</h1>} />
          </Routes>
        </ProductContext.Provider>
      </DataContext.Provider>
    </BrowserRouter>
  );
}

export default App;
