import client from "@/libs/server/client";
import withHandler, { ResponseType } from "@/libs/server/withHandler";
import { withApiSession } from "@/libs/server/withSession";
import { withIronSessionApiRoute } from "iron-session/next";
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
  console.log(req.session.user);

  const profile = await client.user.findUnique({
    where: {
      id: req.session.user?.id,
    },
  });

  if (profile) {
    return res.status(200).json({
      ok: true,
      profile,
    });
  }

  return res.status(404).json({
    ok: false,
    message: "User not found.",
  });
}

export default withApiSession(withHandler("GET", handler));
