import styled from "@mui/styled-engine";
import { useAppSelector, useAppDispatch } from "store/hooks";
import { uiActions } from "store/uislice";
import { PlotViewTypes } from "types";

import OptionToggle from "components/optiontoggle";
import { viewActions } from "store/viewoptionslice";

interface PropTypes {}

const PlotTypeSelector = (props: PropTypes) => {
  const dispatch = useAppDispatch();

  const { current_plot_view } = useAppSelector(
    (state) => state.view_options.plot_options
  );
  const handleSetCurrentTableView = (vtype: PlotViewTypes) => {
    dispatch(viewActions.setCurrentPlotView(vtype));
  };

  return (
    <OptionToggle
      title="plot type"
      buttons={[
        { key: "multiline", label: "multiline" },
        { key: "stacked", label: "stacked" },
      ]}
      callback={(d) => handleSetCurrentTableView(d as PlotViewTypes)}
      current_key={current_plot_view}
    />
  );
};
export default PlotTypeSelector;
