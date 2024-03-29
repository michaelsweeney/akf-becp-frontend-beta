import React from "react";
import { CaseAreaInputParametersPayloadTypes } from "types";
import { TD } from "styling/components";
import { AttributeLinkButton } from "./attributelinkbutton";
import { useAppSelector, useAppDispatch } from "store/hooks";
import { caseInputActions } from "store/caseinputslice";

import { uiActions } from "store/uislice";

type OptionalChildPropTypes = {
  option_values?: string[];
  option_titles?: string[];
  input_type?: string;
  is_disabled?: boolean;
};

type PropTypes = {
  area_id: number;
  title: string;
  area_key: string;
  child_props: OptionalChildPropTypes;
  component: React.FunctionComponent<OptionalChildPropTypes>;
};

const AreaRowMap = (props: PropTypes) => {
  const { area_id, title, area_key, child_props, component } = props;
  const ChildComponent = component;

  const dispatch = useAppDispatch();
  let { case_inputs, ui_settings } = useAppSelector((state) => state);
  let { linked_attributes } = ui_settings;
  let { api_inputs } = case_inputs;
  let case_ids = [...new Set(api_inputs.global.map((d) => d.case_id))];

  const handleSetCaseAreaInputParameter = (
    payload: CaseAreaInputParametersPayloadTypes
  ) => {
    let is_linked =
      linked_attributes[payload.key as keyof typeof linked_attributes];

    if (is_linked) {
      // hard-set all cases
      case_ids.forEach((id) => {
        let proxy_payload: CaseAreaInputParametersPayloadTypes = {
          area_id: payload.area_id,
          case_id: id,
          key: payload.key,
          value: payload.value,
        };
        dispatch(caseInputActions.setCaseAreaInputParameter(proxy_payload));
      });
    } else {
      // set only the specified case
      dispatch(caseInputActions.setCaseAreaInputParameter(payload));
    }
  };

  const handleToggleAttributeLink = (e: string) => {
    let key = e as keyof typeof linked_attributes;
    let current_attribute_val = linked_attributes[key];

    if (!current_attribute_val) {
      // need to copy first column over to all others.
      let first_case_obj = api_inputs.global[0];
      let first_case_id = first_case_obj.case_id;

      let first_case_area_objects = api_inputs.areas.filter(
        (d) => d.case_id === first_case_id
      );

      first_case_area_objects.forEach((area_obj) => {
        case_ids.forEach((case_id) => {
          let proxy_payload: CaseAreaInputParametersPayloadTypes = {
            key: e,
            area_id: area_obj.area_id,
            value: area_obj[e as keyof typeof area_obj],
            case_id: case_id,
          };

          dispatch(caseInputActions.setCaseAreaInputParameter(proxy_payload));
        });
      });

      dispatch(
        uiActions.setLinkedAttribute({
          key: e,
          bool: !current_attribute_val,
        })
      );
    } else {
      dispatch(
        uiActions.setLinkedAttribute({
          key: e,
          bool: !current_attribute_val,
        })
      );
    }
  };

  return (
    <React.Fragment>
      <TD>
        <AttributeLinkButton
          callback={() => handleToggleAttributeLink(area_key)}
          is_linked={
            linked_attributes[area_key as keyof typeof linked_attributes]
          }
        />
      </TD>
      <TD variant="head">{title}</TD>

      {case_ids.map((case_id, i) => {
        let area_obj = api_inputs.areas.find(
          (d) => d.case_id === case_id && d.area_id === area_id
        );

        let is_row_linked =
          linked_attributes[area_key as keyof typeof linked_attributes];
        let is_disabled: boolean = false;
        if (i !== 0) {
          is_disabled = is_row_linked;
        }

        let props_to_add = {
          ...child_props,

          value: area_obj
            ? area_obj[area_key as keyof typeof area_obj]
            : undefined,

          callback: (c: string | number) =>
            handleSetCaseAreaInputParameter({
              case_id: case_id,
              area_id: area_id,
              value: c,
              key: area_key,
            }),

          is_disabled: is_disabled,
        };

        return (
          <TD key={i}>
            <ChildComponent {...props_to_add} />
          </TD>
        );
      })}
    </React.Fragment>
  );
};

export default AreaRowMap;
