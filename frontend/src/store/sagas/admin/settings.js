import { takeLatest } from 'redux-saga/effects'

import apiCall from 'store/api/call'
import {
  ADMIN_SETTINGS_GET_CATEGORIES_MENU_ITEMS,
  ADMIN_SETTINGS_UPDATE_CATEGORIES_MENU_ITEMS,
  ADMIN_SETTINGS_LIST
} from 'store/constants'


const getSettingsList = apiCall({
  type: ADMIN_SETTINGS_LIST,
  method: 'get',
  path: ({ payload }) => `admin/settings/`,
})

const getCategoriesMenuItems = apiCall({
  type: ADMIN_SETTINGS_GET_CATEGORIES_MENU_ITEMS,
  method: 'get',
  path: ({ payload }) => `admin/settings/categories-menu-items/`,
})

const updateCategoriesMenuItems = apiCall({
  type: ADMIN_SETTINGS_UPDATE_CATEGORIES_MENU_ITEMS,
  method: 'put',
  path: ({ payload }) => `admin/settings/categories-menu-items/`,
})

export default function* rootSaga () {
  yield takeLatest(ADMIN_SETTINGS_LIST, getSettingsList)
  yield takeLatest(ADMIN_SETTINGS_GET_CATEGORIES_MENU_ITEMS, getCategoriesMenuItems)
  yield takeLatest(ADMIN_SETTINGS_UPDATE_CATEGORIES_MENU_ITEMS, updateCategoriesMenuItems)
}
