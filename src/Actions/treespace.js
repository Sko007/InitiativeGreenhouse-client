import superagent from "superagent";

// const url = "http://localhost:4000";
const url = "https://initiativegreenhouse.herokuapp.com";

export const createTreeSpace = treeData => (dispatch, getState) => {


  superagent
    .post(`${url}/createTreeSpace`)
    .send(treeData)
    .then(response => {
      console.log("check the response for submit treespaces", response);
      dispatch({
        type: TREESPACE,
        payload: response.body
      });
    })
    .catch(error => console.log(error));
};

export const getTreeSpace = () => (dispatch, getState) => {
  console.log("check if action is performed");
  superagent.get(`${url}/getTreeSpace`).then(response => {
    console.log("Treeinformation back", response.text);
    dispatch({
      type: GETTREESPACE,
      payload: response.text
    });
  });
};
export const GETTREESPACE = "GETTREESPACE";
export const TREESPACE = "TREESPACE";
