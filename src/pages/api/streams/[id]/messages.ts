import client from "@/libs/server/client";
import withHandler, { ResponseType } from "@/libs/server/withHandler";
import { withApiSession } from "@/libs/server/withSession";
import { NextApiRequest, NextApiResponse } from "next";

declare module "iron-session" {
  interface IronSessionData {
    user?: {
      id: number;
    };
  }
}
async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {
  const {
    query: { id },
    body: { message },
    session: { user },
  } = req;

  const createdMessage = await client.message.create({
    data: {
      message,
      stream: {
        connect: {
          id: +(id + ""),
        },
      },
      user: {
        connect: {
          id: user?.id,
        },
      },
    },
  });
  return res.status(200).json({
    ok: true,
    message: createdMessage,
  });
}

export default withApiSession(withHandler({ methods: ["POST"], handler }));
