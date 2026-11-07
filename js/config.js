// INKOVRA site config: fill these in before going live.
window.INKOVRA_CONFIG={
  STRIPE_PAYMENT_LINK:"",   // e.g. https://buy.stripe.com/xxxx (handles Card, Apple Pay, Google Pay)
  PAYPAL_CLIENT_ID:"",      // PayPal REST client ID (live)
  CURRENCY:"USD",
  ORDER_PREFIX:"INK",
  // 工厂 / 面单字段（易捷乐 E-Joyer 格式）：请按工厂后台实际值填写
  FACTORY:{
    NAME:"易捷乐 E-Joyer",
    CHANNEL_NAME:"通用自定义上传",
    CHANNEL_CODE:"UPLOAD",
    EXPORT_COUNTRY:"US",      // 出口国家：待与工厂确认
    DEST_COUNTRY:"US",
    PLANT:"美国二号工厂"
  },
  // 商品 → 工厂款号/SKU/品名/单件重量(g)。FZ/SKU/重量请以工厂后台为准（当前为占位）
  PRODUCT_MAP:{
    tee:     {STYLE:"FZ________",SKU:"US02________",NAME:"T恤（正面烫画）",WEIGHT_G:0},
    kids:    {STYLE:"FZ________",SKU:"US02________",NAME:"童装T恤（正面烫画）",WEIGHT_G:0},
    hoodie:  {STYLE:"FZ________",SKU:"US02________",NAME:"卫衣（正面烫画）",WEIGHT_G:0},
    jogger:  {STYLE:"FZ________",SKU:"US02________",NAME:"卫裤（烫画）",WEIGHT_G:0},
    stocking:{STYLE:"FZ________",SKU:"US02________",NAME:"圣诞袜（印花）",WEIGHT_G:0},
    mug:     {STYLE:"FZ________",SKU:"US02________",NAME:"马克杯（印花）",WEIGHT_G:0},
    home:    {STYLE:"FZ________",SKU:"US02________",NAME:"门垫/地毯/窗帘（全幅印制）",WEIGHT_G:0}
  },
  SOCIAL:{
    TIKTOK:"https://www.tiktok.com/@min.yu105",
    FACEBOOK:"",            // e.g. https://www.facebook.com/yourpage
    INSTAGRAM:""            // e.g. https://www.instagram.com/yourhandle
  }
};
