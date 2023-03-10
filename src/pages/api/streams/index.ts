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
  if (req.method === "GET") {
    const { page } = req.query;
    const offset = 10;

    const streams = await client.stream.findMany({
      take: offset,
      skip: (Number(page) - 1) * offset,
    });

    if (!streams) {
      return res.status(404).json({
        ok: false,
        streams,
      });
    }

    return res.status(200).json({
      ok: true,
      streams,
      ...(streams.length === 0 ? { end: true } : {}),
    });
  }
  if (req.method === "POST") {
    const {
      session: { user },
      body: { name, price, description },
    } = req;
    const stream = await client.stream.create({
      data: {
        name,
        price,
        description,
        user: {
          connect: {
            id: user?.id,
          },
        },
      },
    });

    return res.status(200).json({
      ok: true,
      stream,
    });
  }
}

export default withApiSession(
  withHandler({ methods: ["GET", "POST"], handler })
);
