// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import fetch from "isomorphic-unfetch";
import { parse } from "url";
import { NextApiRequest, NextApiResponse } from "next";

module.exports = async (req, res) => {
  const {
    query: { url },
  } = parse(req.url || "", true);
  const r = await fetch(
    // we get images from notion, but you could get them from AWS etc.
    `https://pbs.twimg.com/media/EkNjlT-XgAACR9H?format=jpg&name=small`,
    {
      headers: {
        "content-type": "image/png",
        // maybe an auth header
      },
    }
  );
  res.setHeader("content-type", r.headers.get("content-type"));
  res.setHeader("cache-control", "s-maxage=1, stale-while-revalidate");
  r.body.pipe(res);}