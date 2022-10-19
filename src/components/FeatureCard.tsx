import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
} from "@mui/material";
import React, { useState } from "react";
import { QrReader } from "react-qr-reader";

export const FeatureCard = () => {
  const [scanning, setScanning] = useState(false);
  const [data, setData] = useState("No result");

  const onClickQrScanner = () => {
    setScanning(true);
  };

  const onClickBack = () => {
    setScanning(false);
  };

  return (
    <>
      {!scanning ? (
        <Button onClick={onClickQrScanner}>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              alt="qr"
              height="300"
              width="300"
              image="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/QR_code_for_mobile_English_Wikipedia.svg/1200px-QR_code_for_mobile_English_Wikipedia.svg.png"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Scan QR
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Click here to scan a QR
              </Typography>
            </CardContent>
          </Card>
        </Button>
      ) : (
        <Card sx={{ maxWidth: 345 }}>
          <QrReader
            constraints={{ facingMode: "environment" }}
            onResult={(result, error) => {
              if (result) {
                setData(result.getText());
              }

              if (!!error) {
                console.info(error);
              }
            }}
          ></QrReader>
          <p>{data}</p>
          <Button variant="contained" onClick={onClickBack}>
            Back
          </Button>
        </Card>
      )}
    </>
  );
};
