import { ApolloClient, gql, InMemoryCache } from "@apollo/client";
import { Modal } from "@nextui-org/react";
import { NextPage } from "next";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import CharacterInfo from "../../components/CharacterInfo";

interface Props {
  characterId: string;
  characterResult: any;
}
const CharacterPage: NextPage<Props> = ({ characterId, characterResult }) => {
  const [character, setCharacter] = useState(characterResult);
  const router = useRouter();
  useEffect(() => {
    router.prefetch("/");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return <CharacterInfo open={true} id={router.query.characterId} character={character} onClose={() => router.push("/")} />;
};

export default CharacterPage;

export async function getStaticPaths() {
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

  // Get the paths we want to pre-render based on posts
  const paths = data.allPeople.people.map((people: any) => ({
    params: { characterId: people.id },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
}

export async function getStaticProps({ params }: any) {
  const client = new ApolloClient({
    uri: "https://swapi-graphql.netlify.app/.netlify/functions/index/",
    cache: new InMemoryCache(),
  });

  const { data } = await client.query({
    query: gql`
      query {
        person(id: "${params.characterId}") {
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
    `,
  });

  return {
    props: {
      characterResult: data.person,
    },
  };
}
