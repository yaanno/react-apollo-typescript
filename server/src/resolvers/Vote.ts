// @ts-ignore
const link = (parent, args, context) => {
  return context.prisma.vote
    .findUnique({where: {id: parent.id}})
    .link();
}

// @ts-ignore
const user = (parent, args, context) => {
  return context.prisma.vote
    .findUnique({where: {id: parent.id}})
    .user();
}

export default {
  link,
  user
};
