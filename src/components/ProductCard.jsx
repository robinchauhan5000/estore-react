import { useTheme } from "@emotion/react";
import { Skeleton, Stack, Typography } from "@mui/material";
import { blueGrey } from "@mui/material/colors";
import { Box, Container } from "@mui/system";
import React, { useEffect, useState } from "react";

export default function ProductCard({ product }) {
  const theme = useTheme();

  const image = product.images[0];

  const [loaded, setLoaded] = useState(true);

  return (
    <>
      {
        <Container
          sx={{
            display: "inline-block",
            // height: { xs: "50%", sm: "40%", lg: "15%" },
            // width: { xs: "60%", sm: "30%", lg: "15%" },
            boxShadow: theme.shadows[4],
            margin: theme.spacing(2),
            backgroundColor: blueGrey[100],
            borderRadius: theme.shape.borderRadius,
            padding: "20px 0px",
            cursor: "pointer",
            textAlign: "center",
            "&:hover": {
              boxShadow: theme.shadows[24],
            },
          }}>
          <Stack>
            <Box>
              <Skeleton
                variant='rectangular'
                height={300}
                sx={{ display: loaded ? "block" : "none" }}
              />
              <img
                onLoad={() => setLoaded(false)}
                style={{
                  width: "100%",
                  height: "100%",
                  display: loaded ? "none" : "block",
                }}
                alt={"product"}
                src={image}
              />
            </Box>
            <br />
            <Typography variant='h5' sx={{ color: "black" }}>
              {product.title}
            </Typography>
          </Stack>
        </Container>
      }
    </>
  );
}
