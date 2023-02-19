import { withIronSessionApiRoute } from "iron-session/next";

const cookieOptions = {
  cookieName: "carrotsession",
  password: process.env.IRON_PWD!,
};

export function withApiSession(fn: any) {
  return withIronSessionApiRoute(fn, cookieOptions);
}
