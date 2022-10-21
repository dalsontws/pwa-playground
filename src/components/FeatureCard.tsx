import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  TextField,
} from "@mui/material";
import React, { useState } from "react";

type FeatureCardProps = {
  onClick: (arg: string) => void;
  imageUrl: string;
};

export const FeatureCard = (props: FeatureCardProps) => {
  const { onClick, imageUrl } = props;

  const [userName, setUserName] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(event.target.value);
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="qr"
        height="300"
        width="300"
        image={imageUrl}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Save your name
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Fill in your name
        </Typography>
        <TextField
          id="outlined-basic"
          variant="outlined"
          value={userName}
          onChange={handleChange}
        />
        <div>
          <Button
            variant="contained"
            onClick={() => {
              onClick(userName);
              setUserName("");
              //TODO: push to top of screen
            }}
          >
            Save
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
