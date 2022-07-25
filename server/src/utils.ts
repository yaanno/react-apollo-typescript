import jwt from 'jsonwebtoken';
const APP_SECRET = 'GraphQL-is-aw3some';

const getTokenPayload = (token: string) => jwt.verify(token, APP_SECRET);

const getUserId = (req: unknown, authToken?: string) => {
  if (req) {
    // @ts-ignore
    const authHeader = req.headers.authorization;
    if (authHeader) {
      const token = authHeader.replace('Bearer ', '');
      if (!token) {
        throw new Error('No token found');
      }
      // @ts-ignore
      const { userId } = getTokenPayload(token);
      return userId;
    }
  } else if (authToken) {
    // @ts-ignore
    const { userId } = getTokenPayload(authToken);
    return userId;
  }

  throw new Error('Not authenticated');
}

export {
  APP_SECRET,
  getUserId
};
