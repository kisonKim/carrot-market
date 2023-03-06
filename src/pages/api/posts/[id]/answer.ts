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
    body: { answer },
  } = req;

  const cleanId = +(id + "");

  const post = await client.post.findUnique({
    where: {
      id: +(id + ""),
    },
  });

  if (!post) {
    return res.status(404).json({ ok: false });
  }

  await client.answer.create({
    data: {
      post: {
        connect: {
          id: cleanId,
        },
      },
      user: {
        connect: {
          id: user?.id,
        },
      },
      answer: answer,
    },
  });

  res.json({ ok: true });
}

export default withApiSession(withHandler({ methods: ["POST"], handler }));
