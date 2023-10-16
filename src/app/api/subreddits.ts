// pages/api/subreddits.ts

import { getSubredditById } from "@/app/actions/subreddit";

export default async function handler(req, res) {
  try {
    const subreddits = await getSubredditById("*");
    res.status(200).json(subreddits);
  } catch (error) {    
    res.status(500).json({ error: "Internal Server Error" });
  }
}
