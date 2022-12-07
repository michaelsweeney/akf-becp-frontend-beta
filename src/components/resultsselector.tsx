import styled from "@mui/styled-engine";
import { useAppSelector, useAppDispatch } from "store/hooks";
import { caseInputActions } from "store/caseinputslice";
import { uiActions } from "store/uislice";
import { caseOutputActions } from "store/caseoutputslice";
import { CurrentViewTypes } from "types";
import { StyledButton } from "../styles/components";
import { Button } from "@mui/material";

interface PropTypes {}

const ButtonWrapper = styled(Button)({
  marginLeft: "10px !important",
  marginTop: "5px !important",
});

const Style = styled("div")<{}>(() => ({}));
const ViewSelector = (props: PropTypes) => {
  const dispatch = useAppDispatch();

  const { current_view } = useAppSelector((state) => state.ui_settings);
  const handleSetCurrentView = (vtype: CurrentViewTypes) => {
    dispatch(uiActions.setCurrentView(vtype));
  };

  return (
    <div>
      <ButtonWrapper
        variant={current_view === "enduse" ? "contained" : "outlined"}
        onClick={() => {
          handleSetCurrentView("enduse");
        }}
      >
        enduses
      </ButtonWrapper>
      <ButtonWrapper
        variant={current_view === "carbon" ? "contained" : "outlined"}
        onClick={() => {
          handleSetCurrentView("carbon");
        }}
      >
        carbon
      </ButtonWrapper>
    </div>
  );
};
export default ViewSelector;