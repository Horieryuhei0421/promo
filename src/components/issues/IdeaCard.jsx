import React from "react";
import { SubButton } from "../UIkit";
import { orderIdea } from "../../reducks/ideas/operations";
import { useSelector, useDispatch } from "react-redux";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { PrimaryButton, GreyButton } from "../UIkit";
import { getUserId } from "../../reducks/users/selectors";

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

const IssueCard = (props) => {
  const selector = useSelector((state) => state);
  const uid = getUserId(selector);
  const newprice = props.price.toLocaleString();
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <div className="idea-back">
        <div className="idea-back-body">{props.idea}</div>
        <div className="idea-back-price">{newprice} 円</div>
        <hr />
        <div className="idea-buy-button">
          {props.quantity === 1 ? (
            <>
              {uid === props.uuid && (
                <SubButton label={"購入する"} onClick={handleOpen} />
              )}
              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <div className="modal-grid">
                  <Box sx={style}>
                    <Typography
                      id="modal-modal-title"
                      variant="h6"
                      component="h2"
                    >
                      購入を確定しますか？
                    </Typography>
                    <div className="module-spacer--extra-small" />
                    <PrimaryButton
                      label={"購入する"}
                      onClick={() =>
                        dispatch(
                          orderIdea(
                            props.id,
                            props.idea,
                            props.price,
                            props.quantity,
                            props.uuid
                          )
                        )
                      }
                    />
                    <div className="module-spacer--extra-extra-small" />
                    <GreyButton
                      label={"キャンセルする"}
                      onClick={() => handleClose()}
                    />
                  </Box>
                </div>
              </Modal>
            </>
          ) : (
            <>
              <p>採用済み</p>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default IssueCard;
