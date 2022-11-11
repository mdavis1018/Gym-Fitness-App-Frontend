import axios from "axios";
import { useState, useEffect } from "react";
import { ProfileUpdate } from "./ProfileUpdate";
import { WorkoutsIndex } from "./WorkoutsIndex";
import { Modal } from "./Modal";
import { WorkoutsNew } from "./WorkoutsNew";
// import React from "react";
// import Moment from "react-moment";
// import "moment-timezone";

export function Profile() {
  const [profile, setProfile] = useState({});
  const [workouts, setWorkouts] = useState([]);
  const [isUserShowVisible, setIsUserShowVisible] = useState(false);
  const [currentProfile, setCurrentProfile] = useState({});

  const test = localStorage.getItem("user_id");
  const final = parseInt(test);
  const handleUserInfo = () => {
    axios.get("http://localhost:3000/users/" + test + ".json").then((response) => {
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

  const handleShowProfile = (profile) => {
    console.log("handleShowProfile", profile);
    setIsUserShowVisible(true);
    setCurrentProfile(profile);
  };

  const handleHideProfile = () => {
    console.log("handleHideProfile");
    setIsUserShowVisible(false);
  };

  const handleUpdateUser = (id, params, successCallBack) => {
    console.log("handleUpdateUser", params);
    axios.patch(`http://localhost:3000/users/${id}.json`, params).then((response) => {
      setProfile(response.data);
      successCallBack();
      handleHideProfile();
    });
  };

  const handleCreateWorkout = (params, successCallback) => {
    console.log("handleCreateWorkout", params);
    axios.post("http://localhost:3000/workouts.json", params).then((response) => {
      setWorkouts([...workouts, response.data]);
      successCallback();
    });
  };

  return (
    <div>
      <button onClick={() => handleShowProfile(profile)}>Update User </button>
      <WorkoutsNew onCreateWorkout={handleCreateWorkout} />
      <Modal show={isUserShowVisible} onClose={handleHideProfile}>
        <ProfileUpdate onUpdateUser={handleUpdateUser} user={profile} />
      </Modal>
      <h1> This is the profile page</h1>
      <p>Name: {profile.name}</p>
      <p>Weight: {profile.weight}</p>
      <p>Email: {profile.email}</p>
      <img src={profile.image_url} />
      <WorkoutsIndex workouts={workouts} />
    </div>
  );
}

//   profile.map((profile) => {
//     if (profile.id === response.data.id) {
//       return response.data;
//     } else {
//       return profile;
//     }
//   })
