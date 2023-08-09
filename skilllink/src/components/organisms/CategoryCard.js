import { useState } from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/joy/Grid";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function CategoryCard({ onClick }) {
  const [expanded, setExpanded] = useState(false);
  const [like, setLike] = useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card
      sx={{
        width: "215px",
        minHeight: "303px",
        position: "relative",
        cursor: "pointer",
      }}
      onClick={onClick}
    >
      <CardActions disableSpacing sx={{ position: "absolute", right: 0 }}>
        <IconButton
          aria-label="add to favorites"
          onClick={() => setLike(!like)}
        >
          <FavoriteIcon color={like ? "primary" : "action"} />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
      <CardMedia
        component="img"
        height="194"
        src="https://t1.daumcdn.net/cfile/tistory/9978BC445B72B57F07"
        alt="Card그림"
      />
      <CardContent
        sx={{
          padding: "10px",
          display: "flex",
          flexDirection: "row",
          position: "relative",
        }}
      >
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ width: "calc(100% - 36px)" }}
        >
          선착순 3분 로고제작 가능선착순 3분 로고제작 가능
        </Typography>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
          sx={{ position: "absolute", right: 0 }}
        >
          <ExpandMoreIcon fontSize="small" />
        </ExpandMore>
        {/* <Grid container direction="row" justifyContent="space-between">
          <Grid sx={7} sx={{ backgroundColor: "red" }}>
            <Typography variant="body2" color="text.secondary">
              선착순 3분 로고제작 가능asdafsdfasdfasdfasdfasd
            </Typography>
          </Grid>
          <Grid sx={4}>
            <ExpandMore
              expand={expanded}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon fontSize="small" />
            </ExpandMore>
          </Grid>
        </Grid> */}
      </CardContent>

      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>스터디 데이터</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
