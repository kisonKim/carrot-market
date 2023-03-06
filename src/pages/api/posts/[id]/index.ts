import withHandler, { ResponseType } from "@/libs/server/withHandler";
import { withApiSession } from "@/libs/server/withSession";
import { NextApiRequest, NextApiResponse } from "next";
import client from "@/libs/server/client";

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {
  const {
    query: { id },
    session: { user },
  } = req;
  const cleanId = +(id + "");
  const post = await client.post.findUnique({
    where: { id: cleanId },
    include: {
      user: {
        select: { id: true, name: true, avatar: true },
      },
      _count: {
        select: {
          wonderings: true,
          answers: true,
        },
      },
      answers: {
        select: {
          id: true,
          answer: true,
          createdAt: true,
          user: {
            select: {
              id: true,
              name: true,
              avatar: true,
            },
          },
        },
      },
    },
  });

  const isWondering = Boolean(
    await client.wondering.findFirst({
      where: {
        userId: user?.id,
        postId: cleanId,
      },
      select: {
        id: true,
      },
    })
  );

  res.json({ ok: true, post, isWondering });
}

export default withApiSession(withHandler({ methods: ["GET"], handler }));
