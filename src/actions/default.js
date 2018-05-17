import 'babel-polyfill'
export const addRecord = content => ({ type: "ADD_RECORD", content })
export const REQUEST_RECORDS = 'REQUEST_RECORDS'
function requestRecords(url) {
  return {
    type: REQUEST_RECORDS,
    url
  }
}
export  {requestRecords}
export const RECEIVE_RECORDS = 'RECEIVE_RECORDS'
function receiveRecords(url, json) {
  return {
    type: RECEIVE_RECORDS,
    url,
    records: json,
    receivedAt: Date.now()
  }
}
export  {receiveRecords}
export const INVALIDATE_URL = 'INVALIDATE_URL'
export function invalidateURL(url) {
  return {
    type: INVALIDATE_URL,
    url
  }
}

// Meet our first thunk action creator!
// Though its insides are different, you would use it just like any other action creator:
// store.dispatch(fetchRecords('reactjs'))
export function fetchRecords(url) {
  // Thunk middleware knows how to handle functions.
  // It passes the dispatch method as an argument to the function,
  // thus making it able to dispatch actions itself.

  return function (dispatch) {
    // First dispatch: the app state is updated to inform
    // that the API call is starting.

    dispatch(requestRecords(url))

    // The function called by the thunk middleware can return a value,
    // that is passed on as the return value of the dispatch method.

    // In this case, we return a promise to wait for.
    // This is not required by thunk middleware, but it is convenient for us.

    return fetch(url)
      .then(
        response => response.json(),
        // Do not use catch, because that will also catch
        // any errors in the dispatch and resulting render,
        // causing a loop of 'Unexpected batch number' errors.
        // https://github.com/facebook/react/issues/6895
        error => console.log('An error occurred.', error)
      )
      .then(json =>
        // We can dispatch many times!
        // Here, we update the app state with the results of the API call.

        dispatch(receiveRecords(url, json))
      )
  }
}
