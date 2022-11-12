import React from "react";
import { Box } from "@chakra-ui/react";

export default function Item({ item, name }) {
  return (
    <Box className="paperBanner">
      <p className="nameBanner">{name}</p>
        <img
          className="imagenBanner"
          width="auto"
          height={400}
          src={item}
          alt="notFound"
        />
    </Box>
  );
}
