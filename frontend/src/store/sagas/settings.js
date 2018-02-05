import { takeLatest } from 'redux-saga/effects'

import apiCall from 'store/api/call'
import {
  SETTINGS_GET_CATEGORIES_MENU_ITEMS,
  SETTINGS_GET_COUNTRIES
} from 'store/constants'


const getCategoriesMenuItems = apiCall({
  type: SETTINGS_GET_CATEGORIES_MENU_ITEMS,
  method: 'get',
  path: ({ payload }) => `settings/categories-menu-items/`,
})

const getCountries = apiCall({
  type: SETTINGS_GET_COUNTRIES,
  method: 'get',
  path: 'settings/countries',
})

export default function* rootSaga () {
  yield takeLatest(SETTINGS_GET_CATEGORIES_MENU_ITEMS, getCategoriesMenuItems)
  yield takeLatest(SETTINGS_GET_COUNTRIES, getCountries)
}
