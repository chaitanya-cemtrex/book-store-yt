import React, { Fragment } from "react";
import { Grid, Typography } from "@mui/material";
import BookItem from "components/BookItem";
import { Box } from "@mui/system";

const BookList = ({ data, featuredPage }) => {
  console.log("data =>", data);
  return (
    <Fragment>
      {featuredPage && (
        <Box
          padding={2}
          margin={"auto"}
          marginBottom="10px"
          boxShadow="10px 10px 20px #ccc"
          bgcolor={"#3d2870"}
          display="flex"
          flexDirection={"column"}
          justifyContent="center"
        >
          <Typography
            fontFamily={"Ubuntu"}
            color="white"
            textAlign="center"
            variant="h2"
          >
            Featured Section
          </Typography>
        </Box>
      )}
      <div>
        <Grid justifyContent={featuredPage?"center":"flex-start"} padding={1} spacing={1} container>
          {data.map((book) => (
            <Grid
              xs={6}
              sm={4}
              md={3}
              lg={2}
              height={featuredPage ? "500px" : "300px"}
              width={"100%"}
              item
              key={book._id}
            >
              <BookItem
                title={book.title}
                id={book._id}
                author={book.author}
                imageUrl={book.imageUrl}
                price={book.price}
                featured={book.featured}
              />
            </Grid>
          ))}
        </Grid>
      </div>
    </Fragment>
  );
};

export default BookList;
