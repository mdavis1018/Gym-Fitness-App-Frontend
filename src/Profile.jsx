import axios from "axios";
import { useState, useEffect } from "react";
import { ProfileUpdate } from "./ProfileUpdate";
import { WorkoutsIndex } from "./WorkoutsIndex";
import { Modal } from "./Modal";
import { WorkoutsNew } from "./WorkoutsNew";
import { WorkoutsShow } from "./WorkoutsShow";
import { DateNew } from "./DateNew";
// import React from "react";
// import Moment from "react-moment";
// import "moment-timezone";

export function Profile() {
  const [profile, setProfile] = useState({});
  const [workouts, setWorkouts] = useState([]);
  const [isUserShowVisible, setIsUserShowVisible] = useState(false);
  const [date, setDate] = useState([]);
  const [isDateNewShowVisible, setIsDateNewShowVisible] = useState(false);
  const [currentProfile, setCurrentProfile] = useState({});
  const [isWorkoutShowVisible, setIsWorkoutShowVisible] = useState(false);
  const [currentWorkout, setCurrentWorkout] = useState({});
  const [exercises, setExercises] = useState([]);
  const [details, setDetails] = useState([]);

  const test = localStorage.getItem("user_id");
  const final = parseInt(test);
  console.log(typeof final);
  const handleUserInfo = () => {
    axios.get("http://localhost:3000/users/" + test + ".json").then((response) => {
      setProfile(response.data);
    });
  };
  // console.log(profile);

  useEffect(handleUserInfo, []);
  var newArr = [];
  const handleIndexWorkouts = () => {
    axios.get("http://localhost:3000/workouts.json").then((response) => {
      console.log(response.data);
      for (let i = 0; i < response.data.length; i++) {
        if (response.data[i].user_id === final) {
          newArr.push(response.data[i]);
        }
      }
      setWorkouts(newArr);
    });
  };
  console.log(workouts);
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

  const handleShowWorkout = (workout) => {
    console.log("handleShowWorkout", workout);
    setIsWorkoutShowVisible(true);
    setCurrentWorkout(workout);
  };

  const handleHideWorkout = () => {
    console.log("handleHideWorkout");
    setIsWorkoutShowVisible(false);
  };

  const handleShowDateNew = (workout) => {
    console.log("handleShowDateNew", workout);
    setIsDateNewShowVisible(true);
    setCurrentWorkout(workout);
  };

  const handleHideDateNew = () => {
    console.log("handleHideDateNew");
    setIsDateNewShowVisible(false);
  };

  const handleCreateDate = (params, successCallback) => {
    console.log("handleCreateDate", params);
    axios.post("http://localhost:3000/days.json", params).then((response) => {
      setDate([...date, response.data]);
      successCallback();
    });
  };

  const handleDestroyWorkout = (workout) => {
    console.log("handleDestroyWorkout", workout);
    axios.delete(`http://localhost:3000/workouts/${workout.id}.json`).then((response) => {
      setWorkouts(workouts.filter((p) => p.id !== workout.id));
      handleHideWorkout();
    });
  };

  const handleUpdateWorkout = (id, params, successCallback) => {
    console.log("handleUpdateWorkout", params);
    axios.patch(`http://localhost:3000/workouts/${id}.json`, params).then((response) => {
      setWorkouts(
        workouts.map((workout) => {
          if (workout.id === response.data.id) {
            return response.data;
          } else {
            return workout;
          }
        })
      );
      successCallback();
    });
  };

  // const handleDestroyDetail = (detail) => {
  //   console.log("handleDestroyDetail", detail);
  //   axios.delete(`http://localhost:3000/workout_details/${detail.id}.json`).then((response) => {
  //     setPhotos(details.filter((p) => p.id !== detail.id));
  //     handleHidePhoto();
  //   });
  // };
  // const handleUpdateDetails = (id, params, successCallback) => {
  //   console.log("handleUpdateWorkout", params);
  //   axios.patch(`http://localhost:3000/workouts/${id}.json`, params).then((response) => {
  //     setWorkouts(
  //       workouts.map((workout) => {
  //         if (workout.id === response.data.id) {
  //           return response.data;
  //         } else {
  //           return workout;
  //         }
  //       })
  //     );
  //     successCallback();
  //   });
  // };

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
      <WorkoutsIndex workouts={workouts} onSelectWorkout={handleShowWorkout} />
      <Modal show={isWorkoutShowVisible} onClose={handleHideWorkout}>
        <WorkoutsShow
          workout={currentWorkout}
          onSelectDate={handleShowDateNew}
          onDestroyWorkout={handleDestroyWorkout}
          onUpdateWorkout={handleUpdateWorkout}
        />
        <Modal show={isDateNewShowVisible} onClose={handleHideDateNew}>
          <DateNew onCreateDate={handleCreateDate} workout={currentWorkout} />
        </Modal>
      </Modal>
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
