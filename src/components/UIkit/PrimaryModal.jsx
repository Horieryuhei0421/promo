// import React from "react";
// import { useDispatch } from "react-redux";
// import { push } from "connected-react-router";
// import Box from "@mui/material/Box";
// import Button from "@mui/material/Button";
// import Typography from "@mui/material/Typography";
// import Modal from "@mui/material/Modal";
// import { PrimaryButton } from "../components/UIkit";
// import { GreyButton } from "../components/UIkit";

// const style = {
//   position: "absolute",
//   top: "50%",
//   left: "50%",
//   transform: "translate(-50%, -50%)",
//   width: 350,
//   bgcolor: "background.paper",
//   border: "4px solid #00b2df",
//   boxShadow: 24,
//   p: 4,
// };

// const PrimaryModal = () => {
//   const dispatch = useDispatch();
//   const [open, setOpen] = React.useState(false);
//   const handleOpen = () => setOpen(true);
//   const handleClose = () => setOpen(false);

//   return (
//     <>
//       <Button onClick={handleOpen}>Open modal</Button>
//       <Modal
//         open={open}
//         onClose={handleClose}
//         aria-labelledby="modal-modal-title"
//         aria-describedby="modal-modal-description"
//       >
//         <div className="modal-grid">
//           <Box sx={style}>
//             <Typography id="modal-modal-title" variant="h6" component="h2">
//               購入を確定しますか？
//             </Typography>
//             <div className="module-spacer--extra-small" />
//             <PrimaryButton label={"購入する"} />
//             <div className="module-spacer--extra-extra-small" />
//             <GreyButton label={"キャンセルする"} />
//           </Box>
//         </div>
//       </Modal>
//     </>
//   );
// };

// export default PrimaryModal;
