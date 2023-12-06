import CoffeeAPI from "../src/api/coffeeAPI";

import {
  Typography,
  CardMedia,
  CardContent,
  CardActions,
  Card,
  Button,
  Grid,
} from "@mui/material";

import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import { useState } from "react";

export function CoffeeList() {
  return (
    <Grid
      container
      spacing={1}
      sx={{
        display: "flex",
        justifyContent: "center",
        rowGap: "5vh",
        columnGap: "2vw",
      }}
    >
      {CoffeeAPI.map(function (data, index) {
        return (
          <div key={index}>
            <CoffeeCard data={data} />
          </div>
        );
      })}
    </Grid>
  );
}
export default CoffeeList;

function CoffeeCard({ data }) {
  const [LikeIcon, setLikeIcon] = useState(FavoriteBorderOutlinedIcon);

  const handleLikeCoffee = ({ data }) => {
    if (LikeIcon === FavoriteBorderOutlinedIcon) {
      setLikeIcon(FavoriteIcon);
    } else {
      setLikeIcon(FavoriteBorderOutlinedIcon);
    }
  };
  return (
    <Card
      sx={{
        maxWidth: 300,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "5px",
        padding: "2px",
      }}
    >
      <CardMedia
        sx={{
          minWidth: "150px",
          width: "250px",
          minHeight: "50px",
          height: "200px",
        }}
        image={data.image}
        title={data.title}
      />
      <CardContent>
        <Typography variant="h2" fontSize="medium" color="text.secondary">
          {data.title}
        </Typography>
        {/* <Typography variant="body2" color="text.secondary">
          {data.description}
        </Typography> */}
      </CardContent>
      <CardActions>
        <Button size="small" onClick={() => handleLikeCoffee({ data })}>
          <LikeIcon />
        </Button>
        <Button size="small">Add</Button>
      </CardActions>
    </Card>
  );
}
