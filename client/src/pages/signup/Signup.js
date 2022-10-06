import React, { useState } from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
} from "mdb-react-ui-kit";

import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
// import Swal from "sweetalert2";

function Signup() {
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const navigate = useNavigate();

  const user = {
    username: username,
    email: email,
    password: password,
  };

  const signup = async () => {
    try {
      if (!username || !email || !password) {
        toast("Fill the details");
      } else {
        await axios.post("http://localhost:5500/api/user/register", user);
        // Swal.fire("Successfully Created Account");
        navigate("/login");
      }
    } catch (error) {
      toast(error.response.data);
    }
  };

  return (
    <MDBContainer fluid>
      <MDBRow className="d-flex justify-content-center align-items-center h-100">
        <MDBCol col="12">
          <MDBCard
            className="bg-dark text-white my-5 mx-auto"
            style={{ borderRadius: "1rem", maxWidth: "400px" }}
          >
            <MDBCardBody className="p-5 d-flex flex-column align-items-center mx-auto w-100">
              <h2 className="fw-bold mb-2 text-uppercase">Signup</h2>

              <MDBInput
                wrapperClass="mb-4 mx-5 mt-5 w-100"
                labelClass="text-white"
                label="Username"
                id="formControlLg"
                type="text"
                size="lg"
                value={username}
                required="true"
                onChange={(e) => setUsername(e.target.value)}
              />
              <MDBInput
                wrapperClass="mb-4 mx-5  w-100"
                labelClass="text-white"
                label="Email address"
                id="formControlLg"
                type="email"
                size="lg"
                value={email}
                required="true"
                onChange={(e) => setEmail(e.target.value)}
              />
              <MDBInput
                wrapperClass="mb-4 mx-5 w-100"
                labelClass="text-white"
                label="Password"
                id="formControlLg"
                type="password"
                size="lg"
                required="true"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <Button outline className="mx-2 px-5" onClick={signup}>
                Signup
              </Button>
              <ToastContainer />
              <p
                className="mt-3"
                style={{ cursor: "pointer" }}
                onClick={() => navigate("/login")}
              >
                Already have an Acccount?
              </p>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default Signup;
