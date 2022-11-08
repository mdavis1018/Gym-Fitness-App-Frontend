import axios from "axios";
import { useState, useEffect } from "react";

export function Profile() {
  const [profile, setProfile] = useState({});

  const test = localStorage.getItem("user_id");
  const handleUserInfo = () => {
    axios.get("http://localhost:3000/users/" + test + ".json").then((response) => {
      console.log(response.data);
      setProfile(response.data);
    });
  };
  console.log(profile);

  useEffect(handleUserInfo, []);

  return (
    <div>
      <h1> This is the profile page</h1>
      <p>Name: {profile.name}</p>
      <p>Weight: {profile.weight}</p>
      <p>Email: {profile.email}</p>
      <img src={profile.image_url} />
    </div>
  );
}
