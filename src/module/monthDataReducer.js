const MEMORT_MONTHDATA = "MEMORT_MONTHDATA";

export const onSaveMonthData = (data) => ({
  type: MEMORT_MONTHDATA,
  data: { data },
});

const monthDateReducer = (state = [], action) => {
  let newState = [];
  switch (action.type) {
    case MEMORT_MONTHDATA:
      return (newState = [action.data]);
    default:
      return state;
  }
  return newState;
};

export default monthDateReducer;
