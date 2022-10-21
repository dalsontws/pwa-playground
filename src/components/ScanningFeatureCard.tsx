import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
} from "@mui/material";
import React from "react";

type ScanningFeatureCardProps = {
  onClick: (arg: boolean) => void;
  imageUrl: string;
  scannerType: "QR" | "Barcode";
};

export const ScanningFeatureCard = (props: ScanningFeatureCardProps) => {
  const { onClick, imageUrl, scannerType } = props;

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
            Scan {scannerType}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Click here to scan a {scannerType}
          </Typography>
        </CardContent>
      </Card>
    </Button>
  );
};
