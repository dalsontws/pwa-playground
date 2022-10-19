import { Card, Button } from "@mui/material";
import React from "react";
import BarcodeScannerComponent from "react-qr-barcode-scanner";

type BarcodeScanningCardProps = {
  barcodeData: string;
  setBarcodeData: (arg: string) => void;
  barcodeScanning: boolean;
  setBarcodeScanning: (arg: boolean) => void;
};

export const BarcodeScanningCard = (props: BarcodeScanningCardProps) => {
  const { barcodeData, setBarcodeData, barcodeScanning, setBarcodeScanning } =
    props;

  return (
    <Card sx={{ width: 345 }}>
      <BarcodeScannerComponent
        stopStream={barcodeScanning}
        facingMode="environment"
        width={500}
        height={500}
        onUpdate={(error, result) => {
          if (result) {
            setBarcodeData(result.getText());
          }

          if (!!error) {
            console.info(error);
          }
        }}
      />
      <p>{barcodeData}</p>
      <Button variant="contained" onClick={() => setBarcodeScanning(false)}>
        Back
      </Button>
    </Card>
  );
};
