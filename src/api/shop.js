/**
 * Jsons by Moral

 Endpoints 

Lista de produtos
http://144.22.98.228:8082/u_prod001.apw
 - Busca de produto com quantidade
 http://144.22.98.228:8082/u_prod001.apw?quantidade=50&nome=mesa
 */
const _products = [

  {"id": 4, "title": "VENTILADOR DE DE MESA 40 CM V-73-6P 6 PAS 3 VELOCIDADES VEMERLHO MONDIAL", "price": 19.99, "inventory": 3},
  {"id": 12720, "title": "ARM ACO CRIATIVA IG3G4 GD 105TL BR ", "inventory": 1, "price": 341.68},
  {"id": 11897, "title": "VENTILADOR TUFAO 50 CM PAREDE PT ", "inventory": 7, "price": 146.75},
  {"id": 11842, "title": "LIQUID.L 34 DINAMICO 3V FILTER ", "inventory": 4, "price": 50.075},
  {"id": 11809, "title": "BEBEDOURO EGC 35 B VERDE ", "inventory": 2, "price": 459.16},
  {"id": 11621, "title": "VENTILADOR ZEFIRO BR MALLORY ", "inventory": 1, "price": 59.65},
  {"id": 10439, "title": "BEBEDOURO EGC 35B 220V INOX NV ", "inventory": 5, "price": 505.994},
  {"id": 10357, "title": "CAFETEIRA CAFP FILTRO FG3206B2 ARNO ", "inventory": 3, "price": 72.1467},
  {"id": 10216, "title": "AUTO RADIO DEH-S1080UB ", "inventory": 11, "price": 384.1536},
  {"id": 8272, "title": "BEBEDOURO EGC 35 B BR ", "inventory": 7, "price": 495.9314},
  {"id": 3472, "title": "COLCHAO AMERICANBABY 0,60 x 1,30 x 0,10 ", "inventory": 3, "price": 71.93}


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
