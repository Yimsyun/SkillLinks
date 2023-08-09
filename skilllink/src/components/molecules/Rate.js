import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";

export default function Rate({ value, count }) {
  return (
    <Box>
      <Rating name="read-only" value={2} readOnly />
      <Typography component="legend">{value}</Typography>
      <Typography component="legend">({count}개의 평가)</Typography>
    </Box>
  );
}
