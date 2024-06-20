import type { CardInterface } from "./card.types";
import { Card, Image, Text, Badge, Button, Group, Grid } from "@mantine/core";
import styles from "./Card.module.css";
export const SingleCard = ({ cardData }: { cardData: CardInterface }) => {
    return (
        <Grid.Col span={4} className={styles.cardGrid}>
            <Card shadow="sm" padding="lg" radius="md" withBorder className={styles.card}>
                <Card.Section component="a" href={cardData.href}>
                    <Image src={cardData.imageUrl} alt={cardData.name} className={styles.image} />
                </Card.Section>

                <Group justify="space-between" mt="md" mb="xs">
                    <Text fw={500}>{cardData.name}</Text>
                    <Badge color="pink">{cardData.origin}</Badge>
                </Group>

                <Text size="sm" c="dimmed" className={styles.description}>
                    {cardData.description}
                </Text>

                <Button color="blue" fullWidth mt="md" radius="md" className={styles.button}>
                    More Detail
                </Button>
            </Card>
        </Grid.Col>
    );
};
