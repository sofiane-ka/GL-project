import React, { useState } from "react";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import data from "../data.json";

const EnsembleFormat = data.formations;

const Formation = (props) => {
  console.log(EnsembleFormat);

  const [isGray, setGray] = useState("1");

  const handleGray = () => {
    isGray === 0 ? setGray(1) : setGray(0);
  };
  return (
    <div sx={{ height: "100%", width: "100%" }}>
      <Box
        sx={{
          margin: "auto",
          textAlign: "center",
          height: 110,
          marginTop: "50px",
          marginBottom: "70px",
          width: "30%",
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
          }}
        >
          Formation
        </Typography>
      </Box>
      <Container
        sx={{
          backgroundColor: "#D4D4D4",
          marginTop: "30px",
          marginBottom: "150px",
          height: 1000,
          flexDirection: "column",
          justifyContent: "center",
          display: { md: "flex" },
        }}
      >
        {/*Avatar */}

        <Container
          sx={{
            height: 300,
            marginTop: "30px",
            textAlign: "center",
            backgroundColor: "#ffffff",
            flexDirection: "row",
            display: { md: "flex" },
          }}
        >
          {/* image */}

          <Container
            sx={{
              marginLeft: "1px",
              height: 650,
              width: 400,
              textAlign: "center",

              display: { md: "block" },
            }}
          >
            <img src={require("../img/livre.png")} alt="ann" />

            {/* theme */}

            <Container
              sx={{
                height: 600,

                textAlign: "center",

                display: { md: "flex" },
              }}
            >
              <Container sx={{ display: { md: "flex" } }}>
                <Typography
                  variant="h6"
                  component="a"
                  sx={{
                    fontFamily: "monospace",
                    fontWeight: 10,
                    fontSize: 20,
                    letterSpacing: ".0rem",
                    color: "#000000",
                    marginY: "10px",
                    textAlign: "center",
                    display: { md: "flex" },
                  }}
                >
                  {" "}
                  {props.frm.theme}
                </Typography>
              </Container>
            </Container>
          </Container>

          <Container
            sx={{
              marginLeft: "0px",
              height: 650,
              width: 700,
              textAlign: "center",

              display: { md: "block" },
            }}
          >
            <Container
              sx={{ flexDirection: "column", display: { md: "flex" } }}
            >
              <Typography
                variant="h6"
                component="a"
                sx={{
                  fontFamily: "monospace",
                  fontWeight: 10,
                  fontSize: 30,
                  letterSpacing: ".0rem",
                  color: "#FCA311",
                  marginTop: "10px",

                  textAlign: "center",
                  display: { md: "flex" },
                }}
              >
                {" "}
                {props.frm.announcer}{" "}
              </Typography>
              <Typography
                variant="h6"
                component="a"
                sx={{
                  fontFamily: "monospace",
                  fontWeight: 10,
                  fontSize: 27,
                  letterSpacing: ".0rem",
                  color: "#000000",
                  marginTop: "10px",

                  textAlign: "start",
                  display: { md: "flex" },
                }}
              >
                {props.frm.description}
              </Typography>
            </Container>
          </Container>
        </Container>
        <Container
          sx={{
            height: 680,
            backgroundColor: "#ffffff",
            justifyContent: "center",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Container
            sx={{
              backgroundColor: "#ffffff",
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Typography>Category</Typography>
            <TextField
              id="outlined-read-only-input"
              label=""
              defaultValue={props.frm.category}
              InputProps={{
                readOnly: true,
              }}
              sx={{
                marginLeft: "100px",
                width: "600px",
              }}
            />
          </Container>
          <Container
            sx={{
              backgroundColor: "#ffffff",
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Typography>Modalité</Typography>
            <TextField
              id="outlined-read-only-input"
              label=""
              defaultValue={props.frm.modality}
              InputProps={{
                readOnly: true,
              }}
              sx={{
                marginLeft: "100px",
                width: "600px",
              }}
            />
          </Container>
          <Container
            sx={{
              backgroundColor: "#ffffff",
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Typography>Rate</Typography>
            <TextField
              id="outlined-read-only-input"
              label=""
              defaultValue={props.frm.rate}
              InputProps={{
                readOnly: true,
              }}
              sx={{
                marginLeft: "100px",
                width: "600px",
              }}
            />
          </Container>
          <Container
            sx={{
              backgroundColor: "#ffffff",
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Typography>Wilaya</Typography>
            <TextField
              id="outlined-read-only-input"
              label=""
              defaultValue={props.frm.wilaya}
              InputProps={{
                readOnly: true,
              }}
              sx={{
                marginLeft: "100px",
                width: "600px",
              }}
            />
          </Container>
          <Container
            sx={{
              backgroundColor: "#ffffff",
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Typography>Commune</Typography>
            <TextField
              id="outlined-read-only-input"
              label=""
              defaultValue={props.frm.commune}
              InputProps={{
                readOnly: true,
              }}
              sx={{
                marginLeft: "100px",
                width: "600px",
              }}
            />
          </Container>
          <Container
            sx={{
              backgroundColor: "#ffffff",
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Typography>Adresse</Typography>
            <TextField
              id="outlined-read-only-input"
              label=""
              defaultValue={props.frm.adresse}
              InputProps={{
                readOnly: true,
              }}
              sx={{
                marginLeft: "100px",
                width: "600px",
              }}
            />
          </Container>
        </Container>

        <Container
          sx={{
            justifyContent: "center",
            display: "flex",
            flexDirection: "row",
          }}
        >
          <Button
            sx={{
              my: 5,
              color: "white",
              display: "block",

              backgroundColor: "#FCA311",

              marginTop: "40px",
              height: 50,
              width: 300,

              marginRight: "5px",
              fontFamily: "monospace",
              "&:hover": {
                backgroundColor: "#000000",
                opacity: [0.9, 0.8, 1],
              },
            }}
          >
            <Link to="/home">Return</Link>
          </Button>
          <Button
            sx={{
              my: 5,
              color: "white",
              display: "block",

              backgroundColor: "#FCA311",

              marginTop: "40px",
              height: 50,
              width: 300,

              marginLeft: "5px",
              fontFamily: "monospace",
              "&:hover": {
                backgroundColor: "#000000",
                opacity: [0.9, 0.8, 1],
              },
            }}
          >
            <Link to="/contact">Contact</Link>
          </Button>
        </Container>
      </Container>
    </div>
  );
};

export default Formation;
