import React from "react";
import logo from "./logo.svg";
import "./App.css";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { FeatureCard } from "./components/FeatureCard";

function App() {
  return (
    <div className="App">
      <FeatureCard />
    </div>
  );
}

export default App;
