import React from "react";
import { Title, Text, useMantineTheme } from "@mantine/core";
import { DetailSectionProps } from "./detail.types";

const DetailSection: React.FC<DetailSectionProps> = ({
  title,
  value,
  className,
}) => {
  const theme = useMantineTheme();
  return (
    <div className={className}>
      <Title style={{ color: theme.colors.dark[4] }} order={5}>
        {title}
      </Title>
      <Text style={{ color: theme.colors.dark[3] }}>{value}</Text>
    </div>
  );
};

export default DetailSection;
