const request = require('supertest');
const app = require('./app');

it('GET /products/byId/:id', async () => {
  const res = await request(app).get('/products/byId/1202');
 
  expect(res.statusCode).toBe(200);
  expect(res.body.product).toEqual({
    id: 1202,
		brand: 'Amora',
		name: 'Mustard',
		price: 1.49,
		unitPrice: 5.62,
		unit: 'killogram',
		batches: [
			{ id: 1220009508, quantity: 9000, shippingDate: '2042-03-25', expirationDate: '2043-03-25', recall: false },
			{ id: 1220009509, quantity: 11000, shippingDate: '2042-04-01', expirationDate: '2043-04-01', recall: false },
			{ id: 1220009510, quantity: 11000, shippingDate: '2042-04-12', expirationDate: '2043-04-12', recall: true },
		]
  });
});

it('GET /products/byBrand/:brand', async () => {
  const res = await request(app).get('/products/byBrand/Lipton');
 
  expect(res.statusCode).toBe(200);
  expect(res.body.products).toEqual([
    {
      id: 2022,
      brand: 'Lipton',
      name: 'Ice Tea',
      price: 1.25,
      unitPrice: 1.25,
      unit: 'liter',
      batches: [
        { id: 2030800156, quantity: 55000, shippingDate: '2042-01-25', expirationDate: '2042-07-25', recall: true },
        { id: 2030800157, quantity: 64000, shippingDate: '2042-02-03', expirationDate: '2042-08-03', recall: false },
        { id: 2030800158, quantity: 64000, shippingDate: '2042-02-04', expirationDate: '2042-08-04', recall: false },
      ],
    },
    {
      id: 2044,
      brand: 'Lipton',
      name: 'Liptonic',
      price: 1.97,
      unitPrice: 1.31,
      unit: 'liter',
      batches: [
        { id: 2044800103, quantity: 55000, shippingDate: '2042-01-25', expirationDate: '2042-07-25', recall: true },
        { id: 2044800104, quantity: 14000, shippingDate: '2042-02-04', expirationDate: '2042-08-04', recall: true },
        { id: 2044800105, quantity: 6000, shippingDate: '2042-03-04', expirationDate: '2042-09-04', recall: false },
        { id: 2044800106, quantity: 6000, shippingDate: '2042-04-04', expirationDate: '2042-10-04', recall: false },
      ],
    }
  ]);
});

it('GET /products/byBatchId/:id', async () => {
  const res = await request(app).get('/products/byBatchId/1370005607');
 
  expect(res.statusCode).toBe(200);
  expect(res.body.product).toEqual({
    id: 1737,
		brand: 'Amora',
		name: 'Mayonnaise',
		price: 2.85,
		unitPrice: 7.13,
		unit: 'killogram',
		batches: [
			{ id: 1370005607, quantity: 5000, shippingDate: '2042-10-05', expirationDate: '2043-10-05', recall: false },
		],
  });
});