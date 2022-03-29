import { Card, Grid, Modal, Text } from "@nextui-org/react";
import { useRouter } from "next/router";
import React from "react";
import Chip from "../Chip";
import Detail from "../Detail";

interface Props {
  id?: string | string[];
  character: any;
  open: boolean;
  onClose: () => void;
}

const CharacterInfo = ({ character, open, onClose }: Props) => {
  return (
    <Modal closeButton scroll fullScreen aria-labelledby="modal-title" open={open} onClose={onClose}>
      <Modal.Header>
        <Text b size={24}>
          {character?.name}
        </Text>
      </Modal.Header>
      <Modal.Body>
        <Grid.Container>
          <Grid xs={12}>
            <Text h3>Details</Text>
          </Grid>
          <Grid.Container xs={12} gap={2}>
            <Grid xs={4} md={3} lg={2}>
              <Detail title="Homeworld" value={character?.homeworld.name} color="gradient" />
            </Grid>
            <Grid xs={4} md={3} lg={2}>
              <Detail title="Birth Year" value={character?.birthYear} color="primary" />
            </Grid>
            <Grid xs={4} md={3} lg={2}>
              <Detail title="Gender" value={character?.gender} color="secondary" />
            </Grid>
            <Grid xs={4} md={3} lg={2}>
              <Detail title="Height" value={character?.height} color="warning" />
            </Grid>
            <Grid xs={4} md={3} lg={2}>
              <Detail title="Mass" value={character?.mass} color="error" />
            </Grid>
            <Grid xs={4} md={3} lg={2}>
              <Detail title="Eye Color" value={character?.eyeColor} color="gradient" />
            </Grid>
            <Grid xs={4} md={3} lg={2}>
              <Detail title="Skin Color" value={character?.skinColor} color="success" />
            </Grid>
          </Grid.Container>

          <Grid xs={12}>
            <Text h3>Films</Text>
          </Grid>

          <Grid.Container xs={12} gap={2}>
            {character?.filmConnection.films.map((film: any) => (
              <Grid xs={12} md={4} lg={6} key={film.title}>
                <Card clickable bordered css={{ w: "100%" }}>
                  <Text h4>{film.title}</Text>
                  <Text>{film.director}</Text>
                  <Card.Footer>
                    <Grid.Container gap={1}>
                      {film?.planetConnection.planets.map((planet: any) => (
                        <Grid key={planet.name}>
                          <Chip text={planet.name} />
                        </Grid>
                      ))}
                    </Grid.Container>
                  </Card.Footer>
                </Card>
              </Grid>
            ))}
          </Grid.Container>

          <Grid xs={12}>
            <Text h3>Starship </Text>
          </Grid>

          <Grid.Container xs={12} gap={2}>
            {character?.starshipConnection.starships.map((starship: any) => (
              <Grid xs={4} md={3} lg={2} key={starship.name}>
                <Chip text={starship.name} />
              </Grid>
            ))}
          </Grid.Container>

          <Grid xs={12}>
            <Text h3>Vehicles</Text>
          </Grid>

          <Grid.Container xs={12} gap={2}>
            {character?.vehicleConnection.vehicles.map((starship: any) => (
              <Grid xs={4} md={3} lg={2} key={starship.name}>
                <Chip text={starship.name} />
              </Grid>
            ))}
          </Grid.Container>
        </Grid.Container>
      </Modal.Body>
    </Modal>
  );
};

export default CharacterInfo;
