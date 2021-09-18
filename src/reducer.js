
const initialStore = {
  events: [],
  popup: false
}

const actions = {
  ADD_NEW_EVENT: 'addNewEvent',
  TOGGLE_POPUP: 'togglePopup',
  CLEAR_EVENTS: 'clearEvents',
  READ_ALL_EVENTS: 'readAllEvents'
}

const actionsCreator = {
  addNewEvent: (event) => ({
    type: actions.ADD_NEW_EVENT,
    payload: event
  }),
  togglePopup: () => ({
    type: actions.TOGGLE_POPUP,
  }),
  clearEvents: () => ({
    type: actions.CLEAR_EVENTS,
    payload: []
  }),
  readAllEvents: () => ({
    type: actions.READ_ALL_EVENTS,
  })
}


const reducer = (state = initialStore, action) => {
  switch (action.type) {
    case actions.ADD_NEW_EVENT:
      return {...state, events: [action.payload, ...state.events]}
    case actions.TOGGLE_POPUP:
      return {...state, popup: !state.popup}
    case actions.CLEAR_EVENTS:
      return {...state, events: action.payload}
    case actions.READ_ALL_EVENTS:
      return {...state, events: state.events.map(item => {
        return {...item, isRead: true}
        })}
    default:
      return state
  }
}


export {reducer, actionsCreator}
