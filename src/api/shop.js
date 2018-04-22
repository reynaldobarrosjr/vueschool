/**
 * Mocking client-server processing
 */
const _products = [
  {"id": 1, "title": "iPad 4 Mini", "price": 500.01, "inventory": 2},
  {"id": 2, "title": "H&M T-Shirt White", "price": 10.99, "inventory": 10},
  {"id": 3, "title": "Charli XCX - Sucker CD", "price": 19.99, "inventory": 0},
  {"id": 4, "title": "VENTILADOR DE DE MESA 40 CM V-73-6P 6 PAS 3 VELOCIDADES VEMERLHO MONDIAL", "price": 19.99, "inventory": 3}


  
]

export default {
  getProducts (cb) {
    setTimeout(() => cb(_products), 3000)
  },

  buyProducts (products, cb, errorCb) {
    setTimeout(() => {
      // simulate random checkout failure.
      (Math.random() > 0.5 || navigator.userAgent.indexOf('PhantomJS') > -1)
        ? cb()
        : errorCb()
    }, 100)
  }
}