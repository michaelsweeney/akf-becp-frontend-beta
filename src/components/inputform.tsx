import React, { FunctionComponent } from "react";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";

import { Button } from "@mui/material";

import { SingleSelect } from "./inputcomponents/singleselect";
import { FocusInput } from "./inputcomponents/focusinput";

import {
  addCase,
  removeCase,
  addAreaType,
  removeAreaType,
} from "store/caseinputslice";

import { setLinkedAttribute } from "store/uislice";
import { useAppSelector, useAppDispatch } from "store/hooks";
import * as types from "types";

import * as lookups from "../lookups";
import { AreaRowMap } from "./inputcomponents/arearowmap";
import { GlobalRowMap } from "./inputcomponents/globalrowmap";

const {
  location_states,
  climate_zones,
  coefficient_cases,
  ashrae_standards,
  building_types,
  heating_fuels,
  hvac_templates,
} = lookups;

const InputForm = () => {
  let { case_inputs, ui_settings } = useAppSelector((state) => state);
  let { linked_attributes } = ui_settings;
  let { global_inputs, design_areas } = case_inputs;

  let case_ids = [...new Set(global_inputs.map((d) => d.case_id))];
  let area_ids = [...new Set(design_areas.map((d) => d.area_id))];

  const dispatch = useAppDispatch();

  const styles = {
    sxRotate: { transform: "rotate(-90deg)", textAlign: "center" },
  };

  const handleAddCase = () => {
    dispatch(addCase());
  };

  const handleRemoveCase = (case_id: number) => {
    dispatch(removeCase({ case_id }));
  };

  const handleAddAreaType = () => {
    dispatch(addAreaType());
  };

  return (
    <div style={{ margin: 30 }}>
      <TableContainer>
        <Table size="small">
          <TableBody>
            {/*---------- ADD / REMOVE CASES ----------*/}
            <TableRow>
              <TableCell variant="head"></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              {global_inputs.map((e: types.InputCaseTypes, i: number) => {
                return (
                  <TableCell key={i}>
                    {global_inputs.length === 1 ? (
                      <span></span>
                    ) : (
                      <Button
                        variant="text"
                        size="small"
                        color="secondary"
                        onClick={() => handleRemoveCase(e.case_id)}
                      >
                        delete case
                      </Button>
                    )}
                  </TableCell>
                );
              })}
              <TableCell>
                <Button
                  onClick={() => handleAddCase()}
                  variant="contained"
                  size="small"
                >
                  Add Case
                </Button>
              </TableCell>
            </TableRow>

            {/*---------- GLOBAL MAPPING ----------*/}
            <TableRow>
              <TableCell variant="head" rowSpan={5} sx={styles.sxRotate}>
                GLOBAL
              </TableCell>

              <GlobalRowMap
                title="Case Name"
                global_key="case_name"
                component={FocusInput as React.FunctionComponent}
                child_props={{
                  input_type: "string",
                }}
              />
            </TableRow>

            <TableRow>
              <GlobalRowMap
                title="State"
                global_key="location_state"
                component={SingleSelect as React.FunctionComponent}
                child_props={{
                  option_values: location_states,
                }}
              />
            </TableRow>

            <TableRow>
              <GlobalRowMap
                title="Climate Zone"
                global_key="climate_zone"
                component={SingleSelect as React.FunctionComponent}
                child_props={{
                  option_values: climate_zones,
                }}
              />
            </TableRow>

            <TableRow>
              <GlobalRowMap
                title="Projection Case"
                global_key="projection_case"
                component={SingleSelect as React.FunctionComponent}
                child_props={{
                  option_values: coefficient_cases,
                }}
              />
            </TableRow>

            <TableRow>
              <GlobalRowMap
                title="HVAC Template"
                global_key="hvac_template"
                component={SingleSelect as React.FunctionComponent}
                child_props={{
                  option_values: hvac_templates.map(
                    (d: types.HvacTemplate) => d.tag
                  ),
                  option_titles: hvac_templates.map(
                    (d: types.HvacTemplate) => d.case_name
                  ),
                }}
              />
            </TableRow>

            {/*---------- AREA MAP ----------*/}

            {area_ids.map((area_id, i) => {
              return (
                <React.Fragment key={i}>
                  <TableRow>
                    <TableCell variant="head" rowSpan={7} sx={styles.sxRotate}>
                      {`AREA TYPE ${i + 1}`}
                    </TableCell>

                    <AreaRowMap
                      area_id={area_id}
                      title="Building Type"
                      area_key="building_type"
                      component={SingleSelect as React.FunctionComponent}
                      child_props={{
                        option_values: building_types,
                      }}
                    />
                  </TableRow>

                  <TableRow>
                    <AreaRowMap
                      area_id={area_id}
                      title="ASHRAE Standard"
                      area_key="ashrae_standard"
                      component={SingleSelect as React.FunctionComponent}
                      child_props={{
                        option_values: ashrae_standards,
                      }}
                    />
                  </TableRow>

                  <TableRow>
                    <AreaRowMap
                      area_id={area_id}
                      title="Area"
                      area_key="area"
                      component={FocusInput as React.FunctionComponent}
                      child_props={{
                        input_type: "number",
                      }}
                    />
                  </TableRow>
                  <TableRow>
                    <AreaRowMap
                      area_id={area_id}
                      title="Heating Fuel"
                      area_key="heating_fuel"
                      component={SingleSelect as React.FunctionComponent}
                      child_props={{
                        option_values: heating_fuels,
                      }}
                    />
                  </TableRow>
                  <TableRow>
                    <AreaRowMap
                      area_id={area_id}
                      title="Heating COP"
                      area_key="heating_cop"
                      component={FocusInput as React.FunctionComponent}
                      child_props={{
                        input_type: "number",
                      }}
                    />
                  </TableRow>

                  <AreaRowMap
                    area_id={area_id}
                    title="DHW Fuel"
                    area_key="dhw_fuel"
                    component={SingleSelect as React.FunctionComponent}
                    child_props={{
                      option_values: heating_fuels,
                    }}
                  />
                  <TableRow>
                    <AreaRowMap
                      area_id={area_id}
                      title="DHW COP"
                      area_key="dhw_cop"
                      component={FocusInput as React.FunctionComponent}
                      child_props={{
                        input_type: "number",
                      }}
                    />
                  </TableRow>
                </React.Fragment>
              );
            })}

            {/*---------- TABLE FOOTER ----------*/}
            <TableRow>
              <TableCell></TableCell>
              <TableCell></TableCell>

              <TableCell colSpan={global_inputs.length + 1}>
                <Button
                  onClick={() => handleAddAreaType()}
                  variant="contained"
                  size="small"
                >
                  Add Area Type
                </Button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default InputForm;
