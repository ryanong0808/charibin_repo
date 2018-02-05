import Immutable from 'immutable'
import { createAction, handleActions } from 'redux-actions'

import {
  API_PENDING,
  API_SUCCESS,
  API_FAIL,
  requestPending,
  requestSuccess,
  requestFail
} from 'store/api/request'
import {
  ADMIN_SETTINGS_GET_CATEGORIES_MENU_ITEMS,
  ADMIN_SETTINGS_UPDATE_CATEGORIES_MENU_ITEMS,
  ADMIN_SETTINGS_LIST
} from 'store/constants'


/* Initial state */

const initialState = Immutable.fromJS({
  settingsList: [],
  settingsListStatus: 'INIT',
  categoriesMenuItems: [],
  categoriesMenuItemsStatus: 'INIT',
})

/* Action creators */

export const getSettingsList = createAction(ADMIN_SETTINGS_LIST)
export const getCategoriesMenuItems = createAction(ADMIN_SETTINGS_GET_CATEGORIES_MENU_ITEMS)
export const updateCategoriesMenuItems = createAction(ADMIN_SETTINGS_UPDATE_CATEGORIES_MENU_ITEMS)

/* Reducer */

export default handleActions({

  /* Get site settings list actions */

  [requestPending(ADMIN_SETTINGS_LIST)]: (state, { payload }) => state.withMutations(map => {
    map.set('settingsListStatus', API_PENDING)
  }),

  [requestSuccess(ADMIN_SETTINGS_LIST)]: (state, { payload }) => state.withMutations(map => {
    map.set('settingsList', Immutable.fromJS(payload))
    map.set('settingsListStatus', API_SUCCESS)
  }),

  [requestFail(ADMIN_SETTINGS_LIST)]: (state, { payload }) => state.withMutations(map => {
    map.set('settingsList', Immutable.fromJS([]))
    map.set('settingsListStatus', API_FAIL)
  }),

  /* Get Categories menu items actions */

  [requestPending(ADMIN_SETTINGS_GET_CATEGORIES_MENU_ITEMS)]: (state, { payload }) => state.withMutations(map => {
    map.set('categoriesMenuItemsStatus', API_PENDING)
  }),

  [requestSuccess(ADMIN_SETTINGS_GET_CATEGORIES_MENU_ITEMS)]: (state, { payload }) => state.withMutations(map => {
    map.set('categoriesMenuItems', Immutable.fromJS(payload))
    map.set('categoriesMenuItemsStatus', API_SUCCESS)
  }),

  [requestFail(ADMIN_SETTINGS_GET_CATEGORIES_MENU_ITEMS)]: (state, { payload }) => state.withMutations(map => {
    map.set('categoriesMenuItems', Immutable.fromJS([]))
    map.set('categoriesMenuItemsStatus', API_FAIL)
  }),

  /* Update Categories menu items actions */

  [requestPending(ADMIN_SETTINGS_UPDATE_CATEGORIES_MENU_ITEMS)]: (state, { payload }) => state.withMutations(map => {
    map.set('categoriesMenuItemsStatus', API_PENDING)
  }),

  [requestSuccess(ADMIN_SETTINGS_UPDATE_CATEGORIES_MENU_ITEMS)]: (state, { payload }) => state.withMutations(map => {
    map.set('categoriesMenuItems', Immutable.fromJS(payload))
    map.set('categoriesMenuItemsStatus', API_SUCCESS)
  }),

  [requestFail(ADMIN_SETTINGS_UPDATE_CATEGORIES_MENU_ITEMS)]: (state, { payload }) => state.withMutations(map => {
    map.set('categoriesMenuItemsStatus', API_FAIL)
  }),

}, initialState)
