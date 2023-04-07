import { AddShoppingCartOutlined } from "@mui/icons-material";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Rating,
  Typography,
} from "@mui/material";
import React from "react";
import "./ProductCard.css";

const ProductCard = ({ product, handleAddToCart, key }) => {
  return (
    <Card className="card">
      <img src={product.image} alt="card-image"/>
      <CardContent>
        <Typography variant="h6">{product.name}</Typography>
        <Typography variant="h6">${product.cost}</Typography>
        <Rating name="read-only" value={product.rating} readOnly />
      </CardContent>
      <CardActions>
        <Button variant="contained" className="card-button" onClick={()=>(handleAddToCart())}>
        <AddShoppingCartOutlined/> ADD TO CART
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
