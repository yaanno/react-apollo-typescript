// @ts-ignore
const newLinkSubscribe = (parent, args, context, info) =>
  context.pubsub.asyncIterator("NEW_LINK");

const newLink = {
  subscribe: newLinkSubscribe,
  resolve: (payload: unknown) => payload
}

// @ts-ignore
const newVoteSubscribe = (parent, args, context, info) =>
  context.pubsub.asyncIterator("NEW_VOTE");

const newVote = {
  subscribe: newVoteSubscribe,
  resolve: (payload: unknown) => payload
}

export default {
  newLink,
  newVote
}