import mail from "@sendgrid/mail";
import twilio from "twilio";
import client from "@/libs/server/client";
import withHandler, { ResponseType } from "@/libs/server/withHandler";
import { NextApiRequest, NextApiResponse } from "next";

mail.setApiKey(process.env.SENDGRID_KEY!);
const twilioClient = twilio(process.env.TWILIO_SID, process.env.TWILIO_TOKEN);
async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {
  const { phone, email } = req.body;
  const user = phone ? { phone: phone } : email ? { email } : null;

  if (!user) return res.json({ ok: false });

  const payload = Math.floor(100000 + Math.random() * 900000) + "";
  const token = await client.token.create({
    data: {
      payload,
      user: {
        connectOrCreate: {
          create: {
            name: "Anonymous",
            ...user,
          },
          where: {
            ...user,
          },
        },
      },
    },
  });

  if (phone) {
    // const message = await twilioClient.messages.create({
    //   messagingServiceSid: process.env.TWILIO_MSID,
    //   to: process.env.MY_PHONE!,
    //   body: `Your login token is ${payload}.`,
    // });
    // console.log(message);
  } else if (email) {
    // const email = await mail.send({
    //   from: "npolly7@hanyang.ac.kr",
    //   to: "npolly7@hanyang.ac.kr",
    //   subject: "Your Carrot Market Verification Email",
    //   text: `Your token is ${payload}.`,
    //   html: `<strong>Your token is ${payload}.</strong>`,
    // });
    // console.log(email);
  }

  return res.json({
    ok: true,
  });
}

export default withHandler("POST", handler);
