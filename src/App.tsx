import React, { useState } from "react";
import "./App.css";
import { Grid, Typography } from "@mui/material";
import { ScanningFeatureCard } from "./components/ScanningFeatureCard";
import { BarcodeScanningCard } from "./components/BarcodeScanningCard";
import { QrScanningCard } from "./components/QrScanningCard";
import { FeatureCard } from "./components/FeatureCard";
import { useAtom } from "jotai";
import { atomWithStorage } from "jotai/utils";

const userNameAtom = atomWithStorage("userName", "you");

function App() {
  const [qrScanning, setQrScanning] = useState(false);
  const [barcodeScanning, setBarcodeScanning] = useState(false);
  const [qrData, setQrData] = useState("No result");
  const [barcodeData, setBarcodeData] = useState("No result");

  const [userName, setUserName] = useAtom(userNameAtom);
  return (
    <div className="App">
      <Typography align="center" gutterBottom variant="h3" component="div">
        Hello {userName !== "" ? userName : "you"}!
      </Typography>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={4}
        padding={6}
      >
        {!qrScanning ? (
          <ScanningFeatureCard
            onClick={setQrScanning}
            imageUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/QR_code_for_mobile_English_Wikipedia.svg/1200px-QR_code_for_mobile_English_Wikipedia.svg.png"
            scannerType="QR"
          />
        ) : (
          <QrScanningCard
            qrData={qrData}
            setQrData={setQrData}
            setQrScanning={setQrScanning}
          />
        )}

        {!barcodeScanning ? (
          <ScanningFeatureCard
            onClick={setBarcodeScanning}
            imageUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/UPC-A-036000291452.svg/2560px-UPC-A-036000291452.svg.png"
            scannerType="Barcode"
          />
        ) : (
          <BarcodeScanningCard
            barcodeData={barcodeData}
            setBarcodeData={setBarcodeData}
            barcodeScanning={barcodeScanning}
            setBarcodeScanning={setBarcodeScanning}
          />
        )}

        <FeatureCard
          onClick={setUserName}
          imageUrl="https://storage.googleapis.com/candycode/jotai/jotai-mascot.png"
        ></FeatureCard>
      </Grid>
    </div>
  );
}

export default App;
