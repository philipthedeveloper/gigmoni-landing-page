import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
// import Button from "@mui/material/Button";
import "../components/HeaderBody/HeaderBody.css";

import "../components/HeaderBody/HeaderBody.css";
import "../WaitListModal/WaitListModal.css";
import { Form, Image, Button } from "react-bootstrap";
import Groups from "../assets/images/Groups.png";

import TextField from "@mui/material/TextField";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 800,

  //   bgcolor: "background.paper",
  border: "2px solid  #5d53d2",
  boxShadow: 24,
  //   pt: 2,
  //   px: 4,
  //   pb: 3,
};

function ChildModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      {/* <Button onClick={handleOpen}>Join WaitList</Button> */}
    </React.Fragment>
  );
}

export default function NestedModal({ condition }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      
      <Button 
        onClick={handleOpen}
        variant="primary" 
        className="poppins-regular bg-color-purple bd-radius-10 font-size-20" 
        >
          Join Waitlist
        </Button>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style, width: 1000 }} className="mod-display-div">
          {/* <div className="mod-div-main">
            <div > */}
          <div className="mod-div-flex1">
            <div variant="h6" className="v-h6">
              Be first to use Gigmoni!
            </div>
            <div>
              <Image src={Groups} alt="cr" className="img-mod" />{" "}
            </div>
            <div variant="h6" className="v-h-div6">
              Launching on August 2022
            </div>
          </div>
          <div className="mod-div-flex2-mg">
            <Button variant="light" onClick={handleClose} className="btn-x">
              X
            </Button>
            <div className="mod-div-flex2">
              <div variant="h6" className="mod-div-flex2-h6">
                JOIN WAITLIST!
              </div>
              <div>
                <form className="p-3 mt-3">
                  <label className="m-label">Name</label>
                  <div className="form-field d-flex align-items-center">
                    <input type="text" id="userName" className="input-mod" />
                  </div>
                  <label className="m-label">Email</label>
                  <div className="form-field d-flex align-items-center">
                    <input type="text" id="pwd" className="input-mod" />
                  </div>
                  <label className="m-label">Phone Number</label>
                  <div className="form-field d-flex align-items-center">
                    <input type="text" id="pwd" className="input-mod" />
                  </div>
                </form>
              </div>
              <div>
                <Button variant="primary" className="poppins-regular bg-color-purple bd-radius-10 font-size-20" >Join Waitlist</Button>
              </div>
            </div>
          </div>
          {/* </div>
          </div> */}
          <ChildModal />
        </Box>
      </Modal>
    </div>
  );
}
