import superagent from "superagent"
// const url = "http://localhost:4000";
const url = "https://initiativegreenhouse.herokuapp.com";


export const treeCalculation = userId => (dispatch, getState) => {
    console.log("id", userId);
    superagent
      .get(`${url}/calculation/${userId}`)
      .then(response => {
        console.log("response from calculation Answers", response);
        dispatch({
          type: CALCULATION,
          payload: JSON.parse(response.text)
        });
      })
      .catch(error => console.log(error));
  };


  export const CALCULATION = "CALCULATION"