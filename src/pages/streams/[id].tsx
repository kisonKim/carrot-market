import Layout from "@/components/layout";
import Message from "@/components/message";
import useMutation from "@/libs/client/useMutation";
import useUser from "@/libs/client/useUser";
import { Message as MessageSchema, Stream, User } from "@prisma/client";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import useSWR from "swr";

interface StreamMessage {
  id: number;
  message: string;
  user: {
    avatar?: string;
    id: number;
  };
}

interface StreamWithMessages extends Stream {
  messages: StreamMessage[];
}

interface StreamResponse {
  ok: boolean;
  stream: StreamWithMessages;
}

interface MessageForm {
  message: string;
}

interface SendMessageResponse {
  ok: boolean;
  message: MessageSchema;
}
const StreamDetail: NextPage = () => {
  const { user } = useUser();
  const {
    query: { id },
  } = useRouter();
  const { register, handleSubmit, reset } = useForm<MessageForm>();

  const { data, mutate } = useSWR<StreamResponse>(
    id ? `/api/streams/${id}` : null,
    {
      refreshInterval: 1000,
    }
  );

  const [sendMessage, { loading, data: sendMessageData }] =
    useMutation<SendMessageResponse>(`/api/streams/${id}/messages`);

  const onValid = (form: MessageForm) => {
    if (loading) return;
    reset();
    mutate(
      (prev) =>
        prev &&
        ({
          ...prev,
          stream: {
            ...prev.stream,
            messages: [
              ...prev.stream.messages,
              {
                id: +Date.now(),
                message: form.message,
                user: { ...user },
              },
            ],
          },
        } as any),
      false
    );
    sendMessage(form);
  };

  return (
    <Layout title="Live Stream" canGoBack>
      <div className="w-full rounded-md shadow-sm bg-slate-300 aspect-video" />
      <div className="mt-5">
        <h1 className="text-3xl font-bold text-gray-900">
          {data?.stream?.name}
        </h1>
        <span className="text-2xl block mt-3 text-gray-900">
          ${data?.stream?.price}
        </span>
        <p className=" my-6 text-gray-700">{data?.stream?.description}</p>
      </div>
      <div>
        <h2 className="text-2xl font-bold text-gray-900">Live Chat</h2>

        <div className="py-10 pb-16 h-[50vh] overflow-y-scroll px-4 space-y-4">
          {data?.stream?.messages?.map((message) => (
            <Message
              key={message.id}
              message={message.message}
              reversed={user?.id === message.user.id}
            />
          ))}
        </div>
      </div>
      <div className="fixed w-full mx-auto max-w-md bottom-2 inset-x-0">
        <form
          onSubmit={handleSubmit(onValid)}
          className="relative flex items-center"
        >
          <input
            type="text"
            {...register("message", { required: true })}
            className="shadow-sm pr-12 rounded-full w-full border-gray-300 focus:ring-orange-500 focus:outline-none focus:border-orange-500"
          />
          <div className="absolute right-0 pr-1.5 inset-y-0 flex py-1.5">
            <button className="flex focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 items-center bg-orange-500 rounded-full px-3 hover:bg-orange-600 text-sm text-white">
              &rarr;
            </button>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default StreamDetail;
