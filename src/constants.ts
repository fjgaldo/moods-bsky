import "dotenv/config";

export const MOODS: Record<string, string> = {
  "Grinning Face": "grinning-face",
  "Smirking Face": "smirking-face",
};

export const URIs: Record<string, string> = {
  "at://did:plc:4s3i2xuwzggf4zqknkq7f53a/app.bsky.feed.post/3l2tmnobwkl2r":
    "Like this post to delete your labels",
  "at://did:plc:4s3i2xuwzggf4zqknkq7f53a/app.bsky.feed.post/3l2tmub7ook2v":
    "Grinning Face",
  "at://did:plc:4s3i2xuwzggf4zqknkq7f53a/app.bsky.feed.post/3l2tmtwcltn22":
    "Smirking Face",
};

export const DID = process.env.DID ?? "";
