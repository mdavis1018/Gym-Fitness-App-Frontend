import axios from "axios";
import { useState, useEffect } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import "./index.css";
import { Modal } from "./Modal";
import { CategoryIndex } from "./CategoryIndex";
import { Signup } from "./Signup";
import { Login } from "./Login";
import { LogoutLink } from "./Logout";
import { CategoryShow } from "./CategoryShow";

export function Home() {
  const [categories, SetCategories] = useState([]);
  const [isCategoryShowVisible, setIsCategoryShowVisible] = useState(false);
  const [currentCategory, setCurrentCategory] = useState({});

  const handleIndexCategory = () => {
    console.log("handleIndexCategory");
    axios.get("http://localhost:3000/categories.json").then((response) => {
      console.log(response.data);
      SetCategories(response.data);
    });
  };

  useEffect(handleIndexCategory, []);

  const handleShowCategory = (category) => {
    console.log("handleShowCategory", category);
    setIsCategoryShowVisible(true);
    setCurrentCategory(category);
  };
  const handleHideCategory = () => {
    console.log("handleHideCategory");
    setIsCategoryShowVisible(false);
  };

  return (
    <div>
      <Header />
      <LogoutLink />
      <CategoryIndex categories={categories} onSelectCategory={handleShowCategory} />
      <Modal show={isCategoryShowVisible} onClose={handleHideCategory}>
        <CategoryShow category={currentCategory} />
      </Modal>
      <Footer />
    </div>
  );
}
