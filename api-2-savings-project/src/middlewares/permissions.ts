import { shield, allow } from "graphql-shield";
// import { Context } from "../../types";
// import * as _ from "lodash";

// const isAdmin = rule()((parent, args, ctx: Context) =>
//   ctx.user ? ctx.user.admin : false
// );

// const validateCompanyId = (parent: any, args: any, ctx: Context) => {
//   if (!ctx.user) {
//     return false;
//   }
//   return parent.id === ctx.user.companyId;
// };

// const Company = rule({
//   cache: "strict",
//   fragment: "fragment CompanyID on Company { id }"
// })(validateCompanyId);

// const Candidate = rule({
//   cache: "strict",
//   fragment: "fragment CandidateID on Candidate {id}"
// })(async (parent: any, _, ctx: Context) => {
//   if (!ctx.user) {
//     return false;
//   }

//   const candidate = await ctx.photon.candidates.findOne({
//     where: { id: parent.id }
//   });

//   return candidate.id === ctx.user.companyId;
// });

// const Opening = rule({
//   cache: "strict",
//   fragment: "fragment OpeningID on Opening {id}"
// })(async (parent: any, _, ctx: Context) => {
//   if (!ctx.user) {
//     return false;
//   }

//   const candidate = await ctx.photon.openings.findOne({
//     where: { id: parent.id }
//   });

//   return candidate.id === ctx.user.companyId;
// });

// const Reviewer = rule({
//   cache: "strict",
//   fragment: "fragment ReviewerID on Reviewer {id}"
// })(async (parent: any, _, ctx: Context) => {
//   if (!ctx.user) {
//     return false;
//   }

//   const candidate = await ctx.photon.reviewers.findOne({
//     where: { id: parent.id }
//   });

//   return candidate.id === ctx.user.companyId;
// });

// const Batch = rule({
//   cache: "strict",
//   fragment: "fragment BatchID on Batch {id}"
// })(async (parent: any, _, ctx: Context) => {
//   if (!ctx.user) {
//     return false;
//   }

//   const batch = await ctx.photon.batches.findOne({
//     where: { id: parent.id }
//   });

//   return batch.id === ctx.user.companyId;
// });

// const Decision = rule({
//   cache: "strict",
//   fragment: "fragment DecisionID on Decision {id}"
// })(async (parent: any, _, ctx: Context) => {
//   if (!ctx.user) {
//     return false;
//   }

//   const decision = await ctx.photon.decisions.findOne({
//     where: { id: parent.id }
//   });

//   return decision.id === ctx.user.companyId;
// });

// const File = rule({
//   cache: "strict",
//   fragment: "fragment FileID on File {id}"
// })(async (parent: any, _, ctx: Context) => {
//   if (!ctx.user) {
//     return false;
//   }

//   const file = await ctx.photon.files.findOne({
//     where: { id: parent.id },
//     select: { company: true }
//   });
//   return file.company.id === ctx.user.companyId;
// });

// const submitAction = rule({ cache: "strict" })(
//   async (
//     parent,
//     {
//       input: { requestId, actionId, transitionId }
//     }: {
//       input: {
//         actionId: string;
//         requestId: string;
//         transitionId: string;
//       };
//     },
//     { photon, user: { uid } }: Context
//   ) => {
//     // Gets all of the groups that the user is part of
//     // const { groups: userGroups } = await photon.users.findOne({
//     //   where: { id: uid },
//     //   select: { groups: true }
//     // });

//     // // Get the Groups associated with the Action
//     // const actionTargets = await photon.actions
//     //   .findOne({ where: { id: actionId } })
//     //   .actionTargets({ include: { group: true } });

//     // // Get the array of ActionTarget Group ids
//     // const actionTargetGroupIds = _.chain(actionTargets)
//     //   .map(a => a.group)
//     //   .compact()
//     //   .map(a => a.id);

//     // // Loop through userGroup and check if any of those elements equal an element in the actionTargetGroupIds
//     // return userGroups.some(userGroup =>
//     //   actionTargetGroupIds.includes(userGroup.id)
//     // );
//     return false;
//   }
// );

const permissions = shield({
  Query: {
    "*": allow
    // reviewers: allow
  }
  // Mutation: {
  // "*": allow
  // submitAction
  // }
});

export { permissions };
