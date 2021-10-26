import React from "react";
import { useDispatch } from "react-redux";
import { push } from "connected-react-router";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import { GreyButton } from "../components/UIkit";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 350,
  bgcolor: "background.paper",
  border: "4px solid #00b2df",
  boxShadow: 24,
  p: 4,
};

const OrderComplete = () => {
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <div className="main-back">
        <div className="main-pop-flame3">
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <div className="modal-grid">
              <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                  購入の手続きが完了しました。
                </Typography>
                <div className="module-spacer--extra-small" />
                <Typography id="modal-modal-title" variant="h8" component="h2">
                  購入履歴はメニューボタンからご覧になれます。
                </Typography>
                <div className="module-spacer--extra-small" />

                <GreyButton
                  label={"ホームに戻る"}
                  onClick={() => {
                    handleClose();
                    dispatch(push("/adviserpage"));
                  }}
                />
              </Box>
            </div>
          </Modal>
        </div>
      </div>
    </>
  );
};
export default OrderComplete;
