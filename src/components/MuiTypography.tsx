import { Typography, Divider } from "@mui/material";

export const MuiTypography = () => {
  return (
    <div>
      <Typography variant="h1">h1 Heading</Typography>
      <Typography variant="h2">h2 Heading</Typography>
      <Typography variant="h3">h3 Heading</Typography>
      <Typography variant="h4" component="h1" gutterBottom>
        h4 Heading The component attribute is for sematic use, like in this
        example the this is a variant of h4 yet its component is h1
        {/*<h1>Like this</h1>*/}
        but it has the size and default styling of h4 The gutterBottom here is
        just you're styling it with a margin bottom, the size of margin is
        depending on the variant you are using
      </Typography>
      <Typography variant="h5">h5 Heading</Typography>
      <Typography variant="h6">h6 Heading</Typography>
      <Divider />
      <Typography variant="subtitle1">Subtitle One</Typography>
      <Typography variant="subtitle2">Subtitle Two</Typography>
      <Divider />
      <Typography variant="body1">Body Text</Typography> {/*DEFAULT VARIANT*/}
      <Typography variant="body2">Body Text</Typography>
    </div>
  );
};
