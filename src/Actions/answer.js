import superagent from "superagent";

const url = "http://localhost:4000";

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
      console.log("error from answer route", error.response.body.error);
      if (error.status === 400) {
        dispatch({
          type: ERROR_CO2FORM,
          payload: error.response.body.error || "Unknown error"
        });
      } else {
        console.error(error);
      }
    });
};

export const calculation = userId => (dispatch, getState) => {
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

export const clearError = () => (dispatch, getState) => {
  dispatch({
    type: ERROR_CO2FORM,
    payload: null
  });
};

export const ERROR_CO2FORM = "ERROR_CO2FORM";
export const USER_ID = "USER_ID";
export const CALCULATION = "CALCULATION";
