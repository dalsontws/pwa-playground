import { Card, Button } from "@mui/material";
import React from "react";
import { QrReader } from "react-qr-reader";

type QrScanningCardProps = {
  qrData: string;
  setQrData: (arg: string) => void;
  setQrScanning: (arg: boolean) => void;
};

export const QrScanningCard = (props: QrScanningCardProps) => {
  const { qrData, setQrData, setQrScanning } = props;

  return (
    <Card sx={{ width: 345 }}>
      <QrReader
        constraints={{ facingMode: "environment" }}
        onResult={(result, error) => {
          if (result) {
            setQrData(result.getText());
          }

          if (!!error) {
            console.info(error);
          }
        }}
      ></QrReader>
      <p>{qrData}</p>
      <Button variant="contained" onClick={() => setQrScanning(false)}>
        Back
      </Button>
    </Card>
  );
};
