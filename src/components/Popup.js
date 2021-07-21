import React from "react";
import { Dialog, DialogTitle, DialogContent } from "@material-ui/core";

function Popup(props) {
  const { openAddAsset, setAddAsset } = props;
  return;
  <Dialog open={openAddAsset}>
    <DialogTitle>
      <div>title goes here</div>
    </DialogTitle>
    <DialogContent>
      <div> content goes here </div>
    </DialogContent>
  </Dialog>;
}

export default Popup;
