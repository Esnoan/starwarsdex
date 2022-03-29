import { ApolloClient, gql, InMemoryCache } from "@apollo/client";
import { Modal } from "@nextui-org/react";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import CharacterInfo from "../components/CharacterInfo";
import CharactersComponent from "../components/Characters";
import MainTemplate from "../templates/MainTemplate";

interface Props {
  charactersResult: [];
}

const Home: NextPage<Props> = ({ charactersResult }) => {
  const [characters, setCharacters] = useState(charactersResult);

  const router = useRouter();

  const getCharacter = (id?: string | string[]) => characters.find((character: any) => character.id === id);

  return (
    <MainTemplate>
      <CharacterInfo
        open={!!router.query.characterId}
        id={router.query.characterId}
        character={getCharacter(router.query.characterId)}
        onClose={() => router.push("/")}
      />
      <CharactersComponent characters={characters} />
    </MainTemplate>
  );
};

export async function getStaticProps() {
  const client = new ApolloClient({
    uri: "https://swapi-graphql.netlify.app/.netlify/functions/index/",
    cache: new InMemoryCache(),
  });

  const { data } = await client.query({
    query: gql`
      query {
        allPeople {
          people {
            id
            name
            birthYear
            eyeColor
            gender
            hairColor
            height
            mass
            skinColor
            homeworld {
              name
            }
            filmConnection {
              films {
                title
                director
                planetConnection {
                  planets {
                    name
                  }
                }
              }
            }
            starshipConnection {
              starships {
                name
              }
            }
            vehicleConnection {
              vehicles {
                name
              }
            }
          }
        }
      }
    `,
  });

  return {
    props: {
      charactersResult: data.allPeople.people,
    },
  };
}

export default Home;
