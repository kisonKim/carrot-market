import { NextPage } from "next";
import { useForm } from "react-hook-form";
import Input from "@/components/input";
import TextArea from "@/components/textarea";
import Button from "@/components/button";
import Layout from "@/components/layout";
import useMutation from "@/libs/client/useMutation";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { Stream } from "@prisma/client";

interface CreateForm {
  name: string;
  price: string;
  description: string;
}

interface CreateResponse {
  ok: boolean;
  stream: Stream;
}
const Create: NextPage = () => {
  const router = useRouter();
  const { register, handleSubmit } = useForm<CreateForm>();
  const [createStream, { data, loading }] = useMutation("/api/streams");
  const onValid = (form: CreateForm) => {
    if (loading) return;
    createStream(form);
  };

  useEffect(() => {
    if (data && data.ok) {
      router.push(`/streams/${data.stream.id}`);
    }
  }, [data, router]);
  return (
    <Layout title="라이브 생성" canGoBack>
      <form onSubmit={handleSubmit(onValid)} className="px-4 py-10 space-y-5">
        <Input
          register={register("name", { required: true })}
          label="Name"
          name="name"
          type="text"
          required
        />

        <Input
          register={register("price", { required: true, valueAsNumber: true })}
          label="Price"
          name="price"
          type="text"
          kind="price"
          required
        />

        <TextArea
          label="description"
          name="description"
          register={register("description", { required: true })}
        />

        <Button text={loading ? "loading..." : "Go Stream"} />
      </form>
    </Layout>
  );
};

export default Create;
