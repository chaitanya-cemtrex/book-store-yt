import { sendBook } from "api-helpers/frontend/utils";
import React from "react";
import Form from "./Form";
import { useRouter } from "next/router";

const Add = () => {
  const router = useRouter();
  const getFormData = (data) => {
    sendBook(data)
      .then((value) => console.log("value", value))
      .then(() => router.push("/books"))
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <Form onSubmit={getFormData} />
    </div>
  );
};

export default Add;
