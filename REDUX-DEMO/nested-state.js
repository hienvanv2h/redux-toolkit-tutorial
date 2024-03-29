const redux = require('redux')
const produce = require('immer').produce

const initialState = {
  name: 'Hien Van',
  address: {
    nation: 'Vietnam',
    city: 'Haiphong',
    street: '123 Main Street St'
  }
}

const STREET_UPDATED = 'STREET_UPDATED'
const updateStreet = (street) => {
  return {
    type: STREET_UPDATED,
    payload: street
  }
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case STREET_UPDATED:
      // return {
      //   ...state,
      //   address: {
      //     ...state.address,
      //     street: action.payload
      //   }
      // }
      return produce(state,(draft) => {
        draft.address.street = action.payload
      })
    default:
      return state
  }
}

// create store
const store = redux.legacy_createStore(reducer)
console.log('Initial state:', store.getState());
const unsubscribe = store.subscribe(() => {
  console.log('Updated state:', store.getState());
})
store.dispatch(updateStreet('456 ABC Street St'))
unsubscribe()