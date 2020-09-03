const INITIAL_STATE = {
  sections: [
    {
      title: 'helmets',
      imageUrl: 'https://www.outsideonline.com/sites/default/files/styles/img_600x600/public/2019/10/08/best-helmets-2020_s.jpg?itok=o8NriHfm',
      id: 1,
      linkUrl: 'shop/helmets'
    },
    {
      title: 'boots',
      imageUrl: 'https://mountaintracks.co.uk/media/k2/items/cache/471bd07fdaa7b040f7ab8b2a13f8f35b_XL.jpg',
      id: 2,
      linkUrl: 'shop/boots'
    },
    {
      title: 'jackets',
      imageUrl: 'https://www.skimag.com/.image/t_share/MTY3NDUxNDQ5OTYwMTc5NTAx/womensjackets-swap.jpg',
      id: 3,
      linkUrl: 'shop/jackets'
    },
    {
      title: 'snowboards',
      imageUrl: 'https://www.tactics.com/a/bke6/e/bestparksnowboards.jpg',
      size: 'large',
      id: 4,
      linkUrl: 'shop/snowboards'
    },
    {
      title: 'skis',
      imageUrl: 'https://cdn.shopify.com/s/files/1/1439/2464/files/FullSizeRender_-_Copy_2048x2048.jpg?v=1510875924',
      size: 'large',
      id: 5,
      linkUrl: 'shop/skis'
    }
  ]
}

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state
  }
}

export default directoryReducer