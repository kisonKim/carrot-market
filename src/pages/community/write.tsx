import Button from "@/components/button";
import Layout from "@/components/layout";
import TextArea from "@/components/textarea";
import useCoords from "@/libs/client/useCoords";
import useMutation from "@/libs/client/useMutation";
import { Post } from "@prisma/client";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { FieldErrors, useForm } from "react-hook-form";

interface CommWriteForm {
  question: string;
}

interface WriteResponse {
  ok: boolean;
  post: Post;
}
const Write: NextPage = () => {
  const { latitude, longitude } = useCoords();
  const router = useRouter();
  const { register, watch, handleSubmit, reset } = useForm<CommWriteForm>();
  const [post, { loading, data }] = useMutation<WriteResponse>("/api/posts");
  const onValid = (data: CommWriteForm) => {
    if (loading) return;
    post({ ...data, latitude, longitude });
  };
  const onInValid = (error: FieldErrors) => {};

  useEffect(() => {
    if (data && data.ok) {
      router.replace(`/community/${data.post.id}`);
    }
  }, [data, router]);
  return (
    <Layout canGoBack title="Write Post">
      <form
        className="p-4 space-y-4"
        onSubmit={handleSubmit(onValid, onInValid)}
      >
        <TextArea
          name="question"
          register={register("question", { required: true, minLength: 5 })}
          placeholder="Ask a question!"
          rows={4}
          required
        />
        <Button text={loading ? "Loading..." : "Submit"} />
      </form>
    </Layout>
  );
};

export default Write;
