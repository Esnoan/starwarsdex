import { Grid } from "@nextui-org/react";
import Link from "next/link";
import React from "react";
import CharacterComponent from "../Character";

interface CharactersProps {
  characters: [];
}
const CharactersComponent = ({ characters }: CharactersProps) => {
  return (
    <div>
      <Grid.Container gap={4} justify="center">
        {characters.map((character: any) => {
          return (
            <Link key={character.id} href="/character/[characterId]" as={`/character/${character.id}`} passHref>
              <Grid xs={12} md={6} xl={4}>
                <CharacterComponent name={character.name} />
              </Grid>
            </Link>
          );
        })}
      </Grid.Container>
    </div>
  );
};

export default CharactersComponent;
