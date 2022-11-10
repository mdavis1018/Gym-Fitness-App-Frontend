import axios from "axios";
import { useState, useEffect } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import "./index.css";
import { Modal } from "./Modal";
import { CategoryIndex } from "./CategoryIndex";
import { Signup } from "./Signup";
import { Login } from "./Login";
import { CategoryShow } from "./CategoryShow";
import { DetailsNew } from "./DetailsNew";

export function Home() {
  const [categories, setCategories] = useState([]);
  const [isCategoryShowVisible, setIsCategoryShowVisible] = useState(false);
  const [currentCategory, setCurrentCategory] = useState({});
  const [currentExercises, setCurrentExercises] = useState({});
  const [isExercisesShowVisible, setIsExercisesShowVisible] = useState(false);
  const [details, setDetails] = useState([]);
  const [isDetailsShowVisible, setIsDetailsShowVisible] = useState(false);

  const handleIndexCategory = () => {
    console.log("handleIndexCategory");
    axios.get("http://localhost:3000/categories.json").then((response) => {
      console.log(response.data);
      setCategories(response.data);
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

  const handleCreateDetails = (params, successCallback) => {
    console.log("handleCreatePhoto", params);
    axios.post("http://localhost:3000/workout_details.json", params).then((response) => {
      setDetails([...details, response.data]);
      successCallback();
    });
  };

  const handleShowDetailsForm = (exercise) => {
    console.log("handleShowExercises", exercise);
    setIsDetailsShowVisible(true);
    setCurrentExercises(exercise);
  };
  const handleHideDetailsForm = () => {
    console.log("handleHideExercises");
    setIsDetailsShowVisible(false);
  };

  return (
    <div>
      <Header />
      <DetailsNew onCreateDetail={handleCreateDetails} />
      <CategoryIndex categories={categories} onSelectCategory={handleShowCategory} />
      <Modal show={isCategoryShowVisible} onClose={handleHideCategory}>
        <CategoryShow category={currentCategory} onSelectDetail={handleShowDetailsForm} />
        <Modal show={isDetailsShowVisible} onClose={handleHideDetailsForm}>
          <DetailsNew
            exercise={currentExercises}
            // onSelectDetail={handleShowDetailsForm}
            onCreateDetail={handleCreateDetails}
          />
        </Modal>
      </Modal>
      <Footer />
    </div>
  );
}
