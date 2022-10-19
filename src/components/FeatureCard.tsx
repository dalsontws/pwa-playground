import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  Grid,
} from "@mui/material";
import React, { useState } from "react";
import { QrReader } from "react-qr-reader";
import BarcodeScannerComponent from "react-qr-barcode-scanner";

type FeatureCardProps = {
  onClick: (arg: boolean) => void;
  imageUrl: string;
};

export const FeatureCard = (props: FeatureCardProps) => {
  const { onClick, imageUrl } = props;

  return (
    <Button onClick={() => onClick(true)}>
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
            Scan QR
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Click here to scan a QR
          </Typography>
        </CardContent>
      </Card>
    </Button>
  );
};
