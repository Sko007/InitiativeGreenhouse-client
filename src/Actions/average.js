import superagent from "superagent"
// const url = "http://localhost:4000";
const url = "https://initiativegreenhouse.herokuapp.com";




export const calculationKwh = () => (dispatch, getState) => {
    console.log("invoke Kwh");
    superagent
      .get(`${url}/averageKwh`)
      .then(response => {
        console.log("check KWH", response.text);
        dispatch({
          type: KWH,
          payload: JSON.parse(response.text)
        });
      })
      .catch(error => console.log(error));
  };
  export const calculationMeat = () => (dispatch, getState) => {
    console.log("invoke Meat");
    superagent
      .get(`${url}/averageMeat`)
      .then(response => {
        console.log("check MEAT", response.text);
        dispatch({
          type: MEAT,
          payload: JSON.parse(response.text)
        });
      })
      .catch(error => console.log(error));
  };
  export const calculationWater = () => (dispatch, getState) => {
      console.log("check Water")
    superagent
      .get(`${url}/averageWater`)
      .then(response => {
        console.log("check WATER", response.text);
        dispatch({
          type: WATER,
          payload: JSON.parse(response.text)
        });
      })
      .catch(error => console.log(error));
  };
  export const calculationGasoline = () => (dispatch, getState) => {
    console.log("invoke Gasoline");
    superagent
      .get(`${url}/averageGasoline`)
      .then(response => {
        console.log("check Gasoline", JSON.parse(response.text));
        dispatch({
          type: GASOLINE,
          payload: JSON.parse(response.text)
        });
      })
      .catch(error => console.log(error));
  };

  export const KWH = "KWH"
  export const MEAT = "MEAT"
  export const WATER = "WATER"
  export const GASOLINE ="GASOLINE"