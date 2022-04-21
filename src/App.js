import React, { useEffect, useState } from "react"; // << NO ERROR
import "./App.css"; // << NO ERROR
import { conn } from "./store/connect"; // << NO ERROR

import { makeStyles } from "@material-ui/styles"; // << NO ERROR
import { createTheme, ThemeProvider } from "@mui/material/styles"; // << NO ERROR

// import * as api from "./apicalls";
import * as d3 from "d3"; // << NO ERROR
// import PlotContainer from "./components/plots/plotcontainer";
import CaseControls from "./components/casecontrols";
// import GlobalControls from "./components/globalcontrols"; // << CAUSES ERROR
// import { LoadingSpinner } from "./components/loadingspinner"; // << CAUSES ERROR
import { LoadingScreenError } from "./components/loadingerrorscreen"; // << NO ERROR
import { Header } from "./components/header"; // << NO ERROR
// import ResultsTable from "./components/resultstable"; // << CAUSES ERROR

const App = () => {
  return <div>hmmm</div>;
};

export default App;

// const theme = createTheme({
//   palette: {
//     secondary: {
//       main: "#cf202e",
//     },
//     primary: {
//       main: "#283759",
//     },
//   },
// });

// const useStyles = makeStyles({
//   root: {
//     width: "calc(100vw)",
//     height: "calc(100vh)",
//     boxSizing: "border-box",
//   },
//   main: {
//     width: "100%",
//     height: "100%",
//     boxSizing: "border-box",
//     padding: 10,
//   },
//   header: {
//     display: "block",
//     width: "100%",
//     height: "75px",
//     boxSizing: "border-box",
//   },
//   topMain: {
//     display: "block",
//     height: "calc(100% - 250px - 75px)",
//     width: "calc(100%)",
//     boxSizing: "border-box",
//     padding: 10,
//   },
//   topLeft: {
//     padding: 10,
//     display: "inline-block",
//     width: "250px",
//     height: "100%",
//     boxSizing: "border-box",
//     verticalAlign: "top",
//     overflow: "auto",
//   },
//   topRight: {
//     display: "inline-block",
//     width: "calc(100% - 250px)",
//     height: "100%",
//     boxSizing: "border-box",
//     verticalAlign: "top",
//   },

//   bottom: {
//     padding: 10,
//     height: "250px",
//     width: "calc(100%)",
//     boxSizing: "border-box",
//   },
//   bottomMain: {
//     display: "inline-block",
//     width: "calc(100%)",
//     height: "100%",
//     boxSizing: "border-box",

//     // border: "black solid 1px",
//   },
// });

// const App = (props) => {
//   const classes = useStyles();
//   let { isLoadingError, case_inputs, isLoading } = props;

//   const updateResults = () => {
//     // api.getProjectionFromReferenceBuildings(
//     //   case_inputs,
//     //   props.actions.setCaseResults,
//     //   props.actions.setIsLoading
//     // );
//   };

//   useEffect(() => {
//     updateResults();
//   }, []);

//   useEffect(() => {
//     const handleResize = () => {
//       props.actions.setWindowDimensions({
//         width: window.innerWidth,
//         height: window.innerHeight,
//       });
//     };
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   return (
//     <ThemeProvider theme={theme}>
//       <div className={classes.root}>
//         <div className={classes.main}>
//           <LoadingSpinner isLoading={isLoading} />
//           <div className={classes.header}>
//             <Header />
//           </div>
//           <div className={classes.topMain}>
//             <div className={classes.topLeft}>
//               <h6>Global Controls</h6>
//               <GlobalControls />
//             </div>
//             <div className={classes.topRight}>
//               {isLoadingError ? (
//                 <LoadingScreenError />
//               ) : (
//                 <>
//                   {/* <ResultsTable /> */}
//                   <PlotContainer />
//                 </>
//               )}
//             </div>
//           </div>
//           <div className={classes.bottom}>
//             <div className={classes.bottomMain}>
//               <CaseControls />
//             </div>
//           </div>
//         </div>
//       </div>
//     </ThemeProvider>
//   );
// };

// const mapStateToProps = (store) => {
//   return {
//     isLoadingError: store.case_outputs.isLoadingError,
//     case_inputs: store.case_inputs.case_inputs,
//     isLoading: store.ui.isLoading,
//   };
// };

// export default conn(mapStateToProps)(App);
