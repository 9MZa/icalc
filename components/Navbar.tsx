import { useState } from "react";
import {
  createStyles,
  Box,
  Container,
  Title,
  Anchor,
  Burger,
  Drawer,
  Group,
  Stack,
} from "@mantine/core";
import { Calculator } from "tabler-icons-react";

const useStyles = createStyles((theme) => ({}));

const items = [
  { title: "คำนวณส่วนลดสินค้า", href: "/discount" },
  { title: "แปลงเซนติเมตรเป็นนิ้ว ", href: "#" },
  { title: "คำนวณ VAT", href: "#" },
].map((item, index) => (
  <Anchor href={item.href} color="gray" sx={{ fontWeight: 600 }} key={index}>
    {item.title}
  </Anchor>
));

const Navbar = ({}) => {
  const { classes } = useStyles();
  const [opened, setOpened] = useState(false);
  const title = opened ? "Close navigation" : "Open navigation";

  return (
    <Box
      sx={(theme) => ({
        boxShadow: theme.shadows.sm,
        padding: theme.spacing.lg,
        marginBottom: 56,
      })}
    >
      <Container
        size="lg"
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{
            display: "flex",
          }}
        >
          <Box
            sx={(theme) => ({
              color: theme.colors.indigo[6],
              display: "flex",
            })}
          >
            <Calculator size={32} strokeWidth={2} />
            <Anchor href="/">
              <Title order={3}>iCalc</Title>
            </Anchor>
          </Box>
          <Box
            sx={(theme) => ({
              marginLeft: 76,
            })}
          >
            <Group
              sx={(theme) => ({
                [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
                  display: "none",
                },
              })}
              spacing="xl"
            >
              {items}
            </Group>
          </Box>
        </Box>
        <Burger
          opened={opened}
          onClick={() => setOpened((o) => !o)}
          title={title}
          sx={(theme) => ({
            [theme.fn.largerThan("sm")]: { display: "none" },
          })}
        />
        <Drawer
          opened={opened}
          onClose={() => setOpened(false)}
          title="Menu"
          padding="xl"
          size="sm"
          position="top"
        >
          <Stack
            sx={(theme) => ({
              flexDirection: "column",
              display: "flex",
              textAlign: "center",
            })}
          >
            {items}
          </Stack>
        </Drawer>
      </Container>
    </Box>
  );
};

export default Navbar;