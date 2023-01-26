const initialState = {
  data: [],
  gender: "MF",
  color: "",
  folded: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "Gender":
      return { ...state, gender: action.payload };
    case "Color":
      return { ...state, color: state.color == "" ? "white" : "" };
    case "folded":
      return { ...state, folded: state.folded == "" ? "Y" : "" };
    case "add": {
      if (state.data.length > 0) {
        let present = false;
        for (let i = 0; i < state.data.length; i++) {
          if (state.data[i].id === action.payload.id) {
            present = true;
            break;
          }
        }
        if (present == false) {
          return { ...state, data: [...state.data, action.payload] };
        }
        else{
            return state;
        }
      } else {
        return { ...state, data: [action.payload] };
      }
    }

    case "remove":
      return {
        ...state,
        data: state.data.filter((ele) => ele.id !== action.payload.id),
      };

    default:
      return state;
  }
};

export default reducer;
