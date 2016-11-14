db.products.getIndexes()[{
  "v": 1,
  "key": {
    "_id": 1
  },
  "ns": "store.products",
  "name": "_id_"
}, {
  "v": 1,
  "key": {
    "sku": 1
  },
  "unique": true,
  "ns": "store.products",
  "name": "sku_1"
}, {
  "v": 1,
  "key": {
    "price": -1
  },
  "ns": "store.products",
  "name": "price_-1"
}, {
  "v": 1,
  "key": {
    "description": 1
  },
  "ns": "store.products",
  "name": "description_1"
}, {
  "v": 1,
  "key": {
    "category": 1,
    "brand": 1
  },
  "ns": "store.products",
  "name": "category_1_brand_1"
}, {
  "v": 1,
  "key": {
    "reviews.author": 1
  },
  "ns": "store.products",
  "name": "reviews.author_1"
}]

/* 
0.0.1.0 --> KO
0.1.1.0 --> KO
db.products.find( { 'brand' : "GE" } ) // NON
db.products.find( { 'brand' : "GE" } ).sort( { price : 1 } ) // OUI
db.products.find( { $and : [ { price : { $gt : 30 } },{ price : { $lt : 50 } } ] } ).sort( { brand : 1 } ) // OUI
db.products.find( { brand : 'GE' } ).sort( { category : 1, brand : -1 } ) // NON
*/