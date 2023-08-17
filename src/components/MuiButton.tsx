import { Button, Stack } from "@mui/material";

export const MuiButton = () => {
  return (
    <Stack spacing={2} direction="row">
      <Button variant="text" href="#">
        Text href attribute will make your button an anchor tag
      </Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
    </Stack>
  );
};
