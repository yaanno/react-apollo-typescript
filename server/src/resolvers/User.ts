// @ts-ignore
const links = (parent, args, context) =>
  context.prisma.user
    .findUnique({ where: { id: parent.id } })
    .links();

export default {
  links
};
