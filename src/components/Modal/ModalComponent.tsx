import React from "react";
import { Box, Modal } from "@mui/material";

const ModalComponent = (props: PropTypes) => {
  const { open, setOpen, children } = props;
  const handleClose = () => setOpen(false);

  return (
    <Modal open={open} onClose={handleClose}>
      <Box className="bg-white  absolute translate-y-2/4 translate-x-2/4 top-2/4 left-2/4 p-5 rounded-md shodow ">
        {children}
      </Box>
    </Modal>
  );
};

export default ModalComponent;

type PropTypes = {
  open: boolean;
  setOpen: any;
  children?: React.ReactNode;
};
