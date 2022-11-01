import React, { Fragment, useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  Button,
  CardActions,
  Snackbar,
  Alert,
} from "@mui/material";
import Link from "next/link";
import { deleteBook } from "api-helpers/frontend/utils";
import { useRouter } from "next/router";
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

const BookItem = ({ title, id, author, imageUrl, price, featured }) => {
  const router = useRouter();
  const [open, setOpen] = useState(false);

  const handleDelete = () => {
    deleteBook(id)
      .then(() => setOpen(true))
      .catch((err) => console.log(err));
  };
  return (
    <Fragment>
      <Card
        sx={{
          width: "100%",
          height: "100%",
          borderRadius: 3,
          boxShadow: "5px 5px 10px #CCC ",
          ":hover": {
            boxShadow: "10px 10px 20px #CCC ",
          },
        }}
      >
        <div style={{ width: "100%", height: "50%", position: "relative" }}>
          {featured && (
            <div
              style={{
                position: "absolute",
                top: "0",
                background: "red",
                width: "70px",
                padding: "2px",
                color: "white",
                borderRadius: "5px",
              }}
            >
              Featured
            </div>
          )}
          <img src={imageUrl} alt={title} width={"100%"} height={"100%"} />
        </div>
        <CardContent sx={{ width: "100%", height: "35%" }}>
          <Typography
            fontFamily={"Ubuntu"}
            fontSize="22px"
            gutterBottom
            variant="h6"
            component="div"
            noWrap
          >
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Author : {author}
          </Typography>
          <Typography
            sx={{
              mt: 1,
            }}
            fontWeight="bold"
            fontFamily="monospace"
            variant="body2"
            color="text.secondary"
          >
            Price : Rs. {price}
          </Typography>
        </CardContent>

        <CardActions>
          <Link href={`/books/${id}`}>
            <Button
              sx={{ marginRight: "auto" }}
              endIcon={<EditIcon />}
              size="small"
              color="warning"
            >
              Edit
            </Button>
          </Link>
          <Button
            sx={{ marginLeft: "auto" }}
            endIcon={<DeleteForeverIcon />}
            onClick={handleDelete}
            size="small"
            color="error"
          >
            Delete
          </Button>
        </CardActions>
      </Card>

      {open && (
        <Snackbar
          open={open}
          autoHideDuration={3000}
          onClose={() => {
            router.push("/books");
            setOpen(false);
          }}
        >
          <Alert
            onClose={() => setOpen(false)}
            severity="success"
            sx={{ width: "100%" }}
          >
            Sucessfully deleted !
          </Alert>
        </Snackbar>
      )}
    </Fragment>
  );
};

export default BookItem;
