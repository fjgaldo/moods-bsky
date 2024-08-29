import "dotenv/config";

export const MOODS: Record<string, string> = {
  "Beaming Face with Smiling Eyes": "beaming-face-with-smiling-eyes",
  "Grinning Face": "grinning-face",
};

export const URIs: Record<string, string> = {
  "at://did:plc:rh2ofunvtpc3hfilipjmwxm5/app.bsky.feed.post/3l2uae6ynpv25":
    "Like this post to delete your labels",
  "at://did:plc:rh2ofunvtpc3hfilipjmwxm5/app.bsky.feed.post/3l2uczbg6hc2l":
    "Grinning Face",
  "at://did:plc:rh2ofunvtpc3hfilipjmwxm5/app.bsky.feed.post/3l2ucyg4wz22h":
    "Beaming Face with Smiling Eyes",
};

export const DID = process.env.DID ?? "";
