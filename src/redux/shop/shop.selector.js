import { createSelector } from 'reselect'
import memoize from 'lodash.memoize'


const selectShopItem = state => state.shop

export const selectShopCollections = createSelector(
  [selectShopItem],
  (shop) => shop.collections
)

export const selectCollectionForPreview = createSelector(
  [selectShopCollections],
  collections => collections ? Object.keys(collections).map(key => collections[key]) : []
)


export const selectionCollection = memoize ((collectionUrlParam) =>
  createSelector(
    [selectShopCollections],
    collections => (collections ? collections[collectionUrlParam] : null) 
  ))