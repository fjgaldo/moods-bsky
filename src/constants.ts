import "dotenv/config";

export const MOODS: Record<string, string> = {
  "Beaming Face with Smiling Eyes": "beaming-face-with-smiling-eyes",
  "Grinning Face": "grinning-face",
};

export const URIs: Record<string, string> = {
  "at://did:plc:7m7xz5ekdmw3tephpgn72ooz/app.bsky.feed.post/3l2wall4qyd2r":
    "Like this post to delete your labels",
  "at://did:plc:7m7xz5ekdmw3tephpgn72ooz/app.bsky.feed.post/3l2waptq3n422":
    "Grinning Face",
  "at://did:plc:7m7xz5ekdmw3tephpgn72ooz/app.bsky.feed.post/3l2waqh4n6622":
    "Beaming Face with Smiling Eyes",
};

export const DID = process.env.DID ?? "";
export const SIGNING_KEY = process.env.SIGNING_KEY ?? "";
