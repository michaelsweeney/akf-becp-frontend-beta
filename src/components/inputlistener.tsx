import { getProjectionFromReferenceBuildings } from "api/apicalls";
import { useEffect } from "react";
import { caseOutputActions } from "store/caseoutputslice";
import { useAppSelector, useAppDispatch } from "store/hooks";
import { uiActions } from "store/uislice";

import { ProjectionFromReferenceOutputTypes } from "types";

const InputListener = () => {
  const { case_inputs } = useAppSelector((state) => state);

  const dispatch = useAppDispatch();

  /* -- fire whenever inputs change -- */
  useEffect(() => {
    const handleChange = () => {
      dispatch(uiActions.setIsApiLoading(true));
      getProjectionFromReferenceBuildings(case_inputs).then((query_results) => {
        dispatch(
          caseOutputActions.setQueryResults(
            query_results as ProjectionFromReferenceOutputTypes[]
          )
        );
        dispatch(uiActions.setIsApiLoading(false));
      });
    };

    handleChange();
  }, [case_inputs.api_inputs]);

  /* -- window listeners -- */
  useEffect(() => {
    const handleResize = () => {
      dispatch(
        uiActions.setWindowDimensions({
          width: window.innerWidth,
          height: window.innerHeight,
        })
      );
    };

    // initialize size
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return <div style={{ display: "none" }}></div>;
};

export default InputListener;
