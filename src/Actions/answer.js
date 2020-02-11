import superagent from "superagent";

// const url = "http://localhost:4000";


const url = "https://initiativegreenhouse.herokuapp.com";



export const postAnswers = answers => (dispatch, getState) => {
  const { status } = answers;


  superagent
    .post(`${url}/createAnswer`)
    .send(answers)
    .then(response => {
      const responseObj = { ...response.body, status };

      console.log("response from post Answers");
      dispatch({
        type: USER_ID,
        payload: responseObj
      });
    })
    .catch(error => {
      if (error.status === 400) {
        console.log("check if error gets dispatched", error.response.body)
        dispatch({
          type: ERROR_CO2FORM,
          payload: error.response.body || "Unknown error"
        });
      } else {
        console.error(error);
      }
    });
};


export const clearError = () => (dispatch, getState) => {
  dispatch({
    type: ERROR_CO2FORM,
    payload: null
  });
};

export const ERROR_CO2FORM = "ERROR_CO2FORM";
export const USER_ID = "USER_ID";
export const CALCULATION = "CALCULATION";
