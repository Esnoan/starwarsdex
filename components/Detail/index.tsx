import { Card, Grid, Text } from "@nextui-org/react";
import React, { FC } from "react";

interface Props {
  title: string;
  value: string;
  color: "default" | "primary" | "secondary" | "success" | "warning" | "error" | "gradient";
}
const Detail: FC<Props> = ({ title, value, color }) => {
  return (
    <Card clickable bordered css={{ w: "100%" }} color={color}>
      <Grid.Container xs={12} lg={12} md={12}>
        <Grid xs={12}>
          <Text b color="white">
            {title}
          </Text>
        </Grid>
        <Grid xs={12}>
          <Text color="white">{value}</Text>
        </Grid>
      </Grid.Container>
    </Card>
  );
};

export default Detail;
