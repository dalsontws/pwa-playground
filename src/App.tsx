import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import { FeatureCard } from "./components/FeatureCard";
import { BarcodeScanningCard } from "./components/BarcodeScanningCard";
import { QrScanningCard } from "./components/QrScanningCard";

function App() {
  const [qrScanning, setQrScanning] = useState(false);
  const [barcodeScanning, setBarcodeScanning] = useState(false);
  const [qrData, setQrData] = useState("No result");
  const [barcodeData, setBarcodeData] = useState("No result");

  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      spacing={4}
    >
      {!qrScanning ? (
        <FeatureCard
          onClick={setQrScanning}
          imageUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/QR_code_for_mobile_English_Wikipedia.svg/1200px-QR_code_for_mobile_English_Wikipedia.svg.png"
        />
      ) : (
        <QrScanningCard
          qrData={qrData}
          setQrData={setQrData}
          setQrScanning={setQrScanning}
        />
      )}

      {!barcodeScanning ? (
        <FeatureCard
          onClick={setBarcodeScanning}
          imageUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/UPC-A-036000291452.svg/2560px-UPC-A-036000291452.svg.png"
        />
      ) : (
        <BarcodeScanningCard
          barcodeData={barcodeData}
          setBarcodeData={setBarcodeData}
          setBarcodeScanning={setBarcodeScanning}
        />
      )}
    </Grid>
  );
}

export default App;
