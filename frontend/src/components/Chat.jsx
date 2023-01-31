import React from "react";
import Box from "@mui/material/Box";
import { Button, Typography } from "@mui/material";
import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { TextField } from "@mui/material";
import { color } from "@mui/system";

const Chat = () => {
  return (
    <div className="">
      <Navbar />
      <Box
        sx={{
          margin: "auto",
          textAlign: "center",
          height: 10,

          marginTop: "50px",
          marginBottom: "70px",
        }}
      >
        <Typography
          variant="h6"
          component="a"
          sx={{
            fontFamily: "monospace",
            fontWeight: 50,
            fontSize: 70,
            letterSpacing: ".0rem",
            color: "#14213D",
            marginTop: "200px",
            margin: "auto",
            width: "400px",
          }}
        >
          Write a Message
        </Typography>
      </Box>

      <Container
        sx={{
          backgroundColor: "#D9D9D9",
          weight: 100,
          height: 800,
          marginX: "auto",
          marginTop: "150px",
          marginBottom: "120px",
          width: "90%",
        }}
      >
        <Box
          sx={{
            margin: "auto",
            textAlign: "center",
            height: 110,
            marginTop: "150px",
            marginBottom: "10px",
            width: "80%",
            alignItems: "center",
          }}
        >
          <form>
            <TextField
              label="User name..."
              variant="outlined"
              sx={{
                margin: "auto",
                marginTop: "50px",
                width: "70%",
                backgroundColor: "#FFFFFF",
              }}
            />
          </form>
        </Box>
        <Box
          sx={{
            margin: "auto",
            marginTop: "0px",
            textAlign: "center",
            height: 110,
            marginTop: "0px",
            marginBottom: "70px",
            width: "80%",
            alignItems: "center",
          }}
        >
          <form>
            <TextField
              label="E-mail..."
              variant="standard"
              type={"email"}
              sx={{
                margin: "auto",
                marginTop: "50px",
                width: "70%",
                backgroundColor: "#FFFFFF",
              }}
            />
          </form>
        </Box>
        <Box
          sx={{
            margin: "auto",
            marginTop: "0px",
            textAlign: "center",
            height: 400,
            marginTop: "0px",
            marginBottom: "0px",
            width: "80%",
            alignItems: "center",
          }}
        >
          <form>
            <TextField
              label="Message..."
              variant="filled"
              type={"text"}
              multiline
              maxRows={10}
              sx={{
                margin: "auto",
                marginTop: "0px",
                width: "70%",
                height: 300,
                backgroundColor: "#FFFFFF",
              }}
            />
          </form>
        </Box>

        <Box
          sx={{
            margin: "auto",
            marginTop: "0px",
            textAlign: "center",
            height: 400,
            marginTop: "0px",
            marginBottom: "70px",
            width: "80%",
            alignItems: "center",
          }}
        >
          <form>
            <Button
              sx={{
                backgroundColor: "#FCA311",
                width: "auto",
              }}
              variant="contained"
            >
              Submit Message
            </Button>
          </form>
        </Box>
      </Container>

      <Footer />
    </div>
  );
};

export default Chat;
