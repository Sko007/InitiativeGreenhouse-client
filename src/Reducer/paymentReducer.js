
export default function(state = null, action) {
    console.log("check the paymentreducer", action.payload);
    switch (action.type) {
      case "PAYMENT":
        return action.payload;

      default:
        return state;
    }
  }
