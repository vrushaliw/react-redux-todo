function todoApp(state = [], action) {
  switch (action.type) {
    case "ADD_RECORD":
    debugger
    return Object.assign({}, state, {
        records: [...state.records, {
          content: action.content
        }]
      })
    case "REQUEST_RECORDS":
      return Object.assign({}, state, {
        isFetching: true,
        didInvalidate: false
      })
    case "RECEIVE_RECORDS":
      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: false,
        records: action.records
      })

    default:
      return state
  }
};

export default todoApp
