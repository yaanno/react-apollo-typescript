import { ApolloServer, PubSub } from 'apollo-server';
import { PrismaClient } from '@prisma/client';
import Query from './resolvers/Query';
import Mutation from './resolvers/Mutation';
import Subscription from './resolvers/Subscription';
import User from './resolvers/User';
import Link from './resolvers/Link';
import Vote from './resolvers/Vote';
import fs from 'fs';
import path from 'path';
import { getUserId } from './utils';

const pubsub = new PubSub();

const prisma = new PrismaClient({
  errorFormat: 'minimal'
});

const resolvers = {
  Query,
  Mutation,
  Subscription,
  User,
  Link,
  Vote
};

const server = new ApolloServer({
  typeDefs: fs.readFileSync(
    path.join(__dirname, 'schema.graphql'),
    'utf8'
  ),
  resolvers,
  context: ({ req }) => {
    return {
      ...req,
      prisma,
      pubsub,
      userId:
        req && req.headers.authorization
          ? getUserId(req)
          : null
    };
  },
  subscriptions: {
    onConnect: (connectionParams: { authToken?: string }) => {
      if (connectionParams.authToken) {
        return {
          prisma,
          userId: getUserId(
            null,
            connectionParams.authToken
          )
        };
      } else {
        return {
          prisma
        };
      }
    }
  }
});

server
  .listen()
  .then(({ url }) =>
    console.log(`Server is running on ${url}`)
  );
