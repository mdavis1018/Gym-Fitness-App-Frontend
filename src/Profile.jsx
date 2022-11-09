import axios from "axios";
import { useState, useEffect } from "react";
import { WorkoutsIndex } from "./WorkoutsIndex";

export function Profile() {
  const [profile, setProfile] = useState({});
  const [workouts, setWorkouts] = useState([]);

  const test = localStorage.getItem("user_id");
  const final = parseInt(test);
  const handleUserInfo = () => {
    axios.get("http://localhost:3000/users/" + test + ".json").then((response) => {
      console.log(response.data);
      setProfile(response.data);
    });
  };
  // console.log(profile);

  useEffect(handleUserInfo, []);
  const newArr = [];
  const handleIndexWorkouts = () => {
    axios.get("http://localhost:3000/workouts.json").then((response) => {
      for (let i = 0; i < response.data.length; i++) {
        if (response.data[i].user_id === final) {
          setWorkouts([response.data[i]]);
        }
      }
    });
  };
  useEffect(handleIndexWorkouts, []);

  return (
    <div>
      <h1> This is the profile page</h1>
      <p>Name: {profile.name}</p>
      <p>Weight: {profile.weight}</p>
      <p>Email: {profile.email}</p>
      <img src={profile.image_url} />
      <WorkoutsIndex workouts={workouts} />
    </div>
  );
}
