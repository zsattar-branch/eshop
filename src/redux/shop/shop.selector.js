import { createSelector } from 'reselect'
import memoize from 'lodash.memoize'


const selectShopItem = state => state.shop

export const selectShopCollections = createSelector(
  [selectShopItem],
  (shop) => shop.collections
)

export const selectionCollection = memoize ((collectionUrlParam) =>
  createSelector(
    [selectShopCollections],
    collections => collections[collectionUrlParam]
  ))