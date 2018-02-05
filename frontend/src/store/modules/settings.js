import Immutable from 'immutable'
import { createAction, handleActions } from 'redux-actions'

import { requestSuccess } from 'store/api/request'
import {
  SETTINGS_GET_CATEGORIES_MENU_ITEMS,
  SETTINGS_GET_COUNTRIES
} from 'store/constants'


/* Initial state */

const initialState = Immutable.fromJS({
  categoriesMenuItems: [],
  countries: [],
})

/* Action creators */

export const getCategoriesMenuItems = createAction(SETTINGS_GET_CATEGORIES_MENU_ITEMS)
export const getCountries = createAction(SETTINGS_GET_COUNTRIES)

/* Reducer */

export default handleActions({

  /* Get categories menu items actions */

  [requestSuccess(SETTINGS_GET_CATEGORIES_MENU_ITEMS)]: (state, { payload }) => state.withMutations(map => {
    map.set('categoriesMenuItems', Immutable.fromJS(payload))
  }),

  /* Get countries list actions */

  [requestSuccess(SETTINGS_GET_COUNTRIES)]: (state, { payload }) => state.withMutations(map => {
    map.set('countries', Immutable.fromJS(payload))
  })

}, initialState)
