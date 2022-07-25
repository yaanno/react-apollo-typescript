// @ts-ignore
const postedBy = (parent, args, context) =>
  context.prisma.link
    .findUnique({ where: { id: parent.id } })
    .postedBy();


// @ts-ignore
const votes = (parent, args, context) =>
  context.prisma.link
    .findUnique({ where: { id: parent.id } })
    .votes();

export default {
  postedBy,
  votes
};
