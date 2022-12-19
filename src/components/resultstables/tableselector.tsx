import styled from "@mui/styled-engine";
import { useAppSelector, useAppDispatch } from "store/hooks";

import { TableViewTypes } from "types";

import OptionToggle from "components/optiontoggle";
import { viewActions } from "store/viewoptionslice";

interface PropTypes {}

const Root = styled("div", { label: "table-selector" })({
  borderBottom: "1px solid black",
  marginBottom: "10px",
});

const TableSelector = (props: PropTypes) => {
  const dispatch = useAppDispatch();

  const { current_table_view } = useAppSelector(
    (state) => state.view_options.table_options
  );
  const handleSetCurrentView = (vtype: TableViewTypes) => {
    dispatch(viewActions.setCurrentTableView(vtype));
  };

  return (
    <Root>
      <OptionToggle
        title="table view"
        buttons={[
          { key: "carbon", label: "carbon" },
          { key: "enduse", label: "enduse" },
        ]}
        callback={(d) => handleSetCurrentView(d as TableViewTypes)}
        current_key={current_table_view}
      />
    </Root>
  );
};
export default TableSelector;
