import { Card, Row, Text } from "@nextui-org/react";
import React from "react";

interface CharacterProps {
  name: string;
}
const CharacterComponent = ({ name }: CharacterProps) => {
  return (
    <Card clickable hoverable css={{ w: "100%", h: "300px" }}>
      <Card.Body css={{ p: 0, w: "100%" }}>
        <Card.Image
          objectFit="cover"
          src={`https://api.multiavatar.com/${name}.png?apikey=bpYyO1ATVMf3ln`}
          width="70%"
          height={240}
          alt={name}
        />
      </Card.Body>
      <Card.Footer>
        <Text h4>{name}</Text>
      </Card.Footer>
    </Card>
  );
};

export default CharacterComponent;
