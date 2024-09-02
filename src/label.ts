import { AppBskyActorDefs, ComAtprotoLabelDefs } from "@atproto/api";
import { DID, POSTS, SIGNING_KEY } from "./constants.js";
import { LabelerServer } from "@skyware/labeler";

const server = new LabelerServer({ did: DID, signingKey: SIGNING_KEY });

server.start(4001, (error, address) => {
  if (error) {
    console.error(error);
  } else {
    console.log(`Labeler server listening on ${address}`);
  }
});

export const label = async (
  subject: string | AppBskyActorDefs.ProfileView,
  uri: string,
) => {
  const did = AppBskyActorDefs.isProfileView(subject) ? subject.did : subject;

  const query = server.db
    .prepare<
      unknown[],
      ComAtprotoLabelDefs.Label
    >(`SELECT * FROM labels WHERE uri = ?`)
    .all(did);

  const labels = query.reduce((set, label) => {
    if (!label.neg) set.add(label.val);
    else set.delete(label.val);
    return set;
  }, new Set<string>());

  if (POSTS[uri]?.includes("delete")) {
    await server
      .createLabels({ uri: did }, { negate: [...labels] })
      .catch((err) => {
        console.log(err);
      })
      .then(() => console.log(`Deleted labels for ${did}`));
  } else if (labels.size < 4 && POSTS[uri]) {
    await server
      .createLabel({ uri: did, val: POSTS[uri] })
      .catch((err) => {
        console.log(err);
      })
      .then(() => console.log(`Labeled ${did} with ${POSTS[uri]}`));
  }
};
