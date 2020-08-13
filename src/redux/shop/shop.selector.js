import { createSelector } from 'reselect'

const selectShopItem = state => state.shop

export const selectShopCollections = createSelector(
  [selectShopItem],
  (shop)=> shop.collections
)