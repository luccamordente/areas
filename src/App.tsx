import React from "react";
import Button from "@material-ui/core/Button";

interface Props {
  name: string;
}

export default function App({ name }: Props) {
  return (
    <>
      <h1>Hello, {name}</h1>
      <Button variant="contained">this, is a material UI button</Button>
    </>
  );
}
