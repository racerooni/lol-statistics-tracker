import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import axios from "axios";
import { useState } from "react";
import { ClassNames } from "@emotion/react";

type UserData = {
  name: string;
  summonerLevel: number;
  profileIconId: number;
  // Add other properties as needed
};
function User() {
  const [data, setData] = useState<UserData | null>(null);
  const [summName, setsummName] = useState<string>("");
  const API_KEY = "RGAPI-3cce685c-65f5-478b-a7e1-9c9d13781a5f";

  const searchForUser = () => {
    const API_URL = axios
      .get(
        `https://eun1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${summName}?api_key=${API_KEY}`
      )
      .then((response) => setData(response.data as UserData));
  };

  console.log(data);
  return (
    <div className="">
      <TextField
        onChange={(e) => setsummName(e.target.value)}
        id="outlined-basic"
        label="Outlined"
        variant="outlined"
      />
      <Button
        variant="contained"
        className="h-14"
        onClick={(e) => searchForUser()}
      >
        go!
      </Button>
      <h1></h1>
      <div className="flex flex-col w-36 relative">
        {data ? (
          <>
            <p className="bg-white absolute left-50">{data.name}</p>
            <img
              src={`https://ddragon.leagueoflegends.com/cdn/13.23.1/img/profileicon/${data.profileIconId}.png`}
              className="rounded-full"
            ></img>
            <p>Level: {data.summonerLevel}</p>
          </>
        ) : (
          <>no player data</>
        )}
      </div>
    </div>
  );
}

export default User;
