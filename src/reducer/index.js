export const initial_state = {
  search_text: "",
  current_page: 1,
  current_page_data: [],
  data: {}
};

const reducer = (state, action) => {
  const action_type = action?.type;
  const payload = action?.payload;

  switch(action_type){
    default: {
      return state;
    }
  }
}

export default reducer;
