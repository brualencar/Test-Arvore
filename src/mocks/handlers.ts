import { rest } from 'msw';

export const handlers = [
  rest.get('/test', (req, res, ctx) =>
    res(
      ctx.status(403),
      ctx.json({
        errorMessage: 'Not Authorized',
      }),
      ctx.delay(1000)
    )
  ),
];
