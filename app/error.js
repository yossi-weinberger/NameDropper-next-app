"use client";

import { Button } from "@mui/material";

export default function Error({ error, reset }) {
  return (
    <div>
      <h1>{error}</h1>
      <Button variant="contained" onClick={reset}></Button>
    </div>
  );
}
