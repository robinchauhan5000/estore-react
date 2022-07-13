import {
  Backdrop,
  Box,
  Button,
  CircularProgress,
  Divider,
  Stack,
  styled,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { grey } from "@mui/material/colors";
import {
  fetchSingleProduct,
  removingQueryProduct,
} from "../redux/Slices/FetchProduct/FetchProductSlice";

const GridForImage = styled("div")(({ theme }) => ({
  objectFit: "contain",
  display: "grid",
  justifyItems: "center",
  alignItems: "center",
  padding: "10px",
  backgroudColor: "blue",
  [theme.breakpoints.up("sm")]: {
    gridTemplateColumns: " 1fr 1fr",
    justifyItems: "center",
    alignItems: "center",
  },
  [theme.breakpoints.down("md")]: {
    gridTemplateColumns: " 1fr ",
    justifyContent: "center",
    alignItems: "center",
  },
  rowGap: "10px",
  columnGap: "10px",

  "& .image": {
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    width: "100%",
    height: "100%",
    justifyItems: "center",
    alignItems: "center",
  },
}));

const ContentContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: "30px 20px",
  padding: "10px",
}));

const OuterContainer = styled(Box)(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: " 2fr 1.5fr",
}));

export default function ProductDetailed() {
  const { id } = useParams();

  const dispatch = useDispatch();
  const state = useSelector((state) => {
    return state.products;
  });

  if (state.queryProduct.length !== 0) {
    console.log(state);
    var data = state.queryProduct[0];
  }

  useEffect(() => {
    dispatch(fetchSingleProduct(id));
    return () => {
      dispatch(removingQueryProduct());
    };
  }, [id]);

  return state.queryProduct.length !== 0 ? (
    <OuterContainer>
      <GridForImage>
        {data.images.length !== null ? (
          data.images.map((image, index) => {
            return (
              <div key={index} className='grid-image' image={image}>
                <img className='image' alt={"kk"} src={image}></img>
              </div>
            );
          })
        ) : (
          <p>there is no image</p>
        )}
      </GridForImage>
      <ContentContainer>
        <Typography variant='h4'>{data.title}</Typography>
        <Typography variant='h5' sx={{ color: grey[400] }}>
          {data.description}
        </Typography>
        <Divider></Divider>
        <Stack direction='row'>
          <Typography variant='h5' fontWeight='700'>
            Price {data.price}
          </Typography>
        </Stack>
        <Button variant='contained' color='secondary' sx={{ width: "30%" }}>
          Add Cart
        </Button>
      </ContentContainer>
    </OuterContainer>
  ) : (
    <Backdrop
      open={true}
      sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}>
      <CircularProgress />
    </Backdrop>
  );
}
