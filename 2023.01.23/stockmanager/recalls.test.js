const request = require('supertest');
const app = require('./app');

it('GET /recalls/byBrand/:brand', async () => {
  const res = await request(app).get('/recalls/byBrand/Amora');
 
  expect(res.statusCode).toBe(200);
  expect(res.body.products).toEqual([
			1202, 1311, 1490, 1590
		]);
});

it('GET /recalls/byTimestamp/:timestamp', async () => {
  const timeStamp = new Date('2042-07-25').getTime();
  const res = await request(app).get(`/recalls/byTimestamp/${timeStamp}`);
 
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