import Input from "@/components/input";
import Layout from "@/components/layout";
import TextArea from "@/components/textarea";
import useMutation from "@/libs/client/useMutation";
import { Product } from "@prisma/client";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { FieldErrors, useForm } from "react-hook-form";

interface UploadProductForm {
  name: string;
  price: number;
  description: string;
}

interface UploadProductMutation {
  ok: boolean;
  product: Product;
}
const Upload: NextPage = () => {
  const router = useRouter();
  const { register, handleSubmit } = useForm<UploadProductForm>({
    mode: "onChange",
  });

  const [uploadProduct, { loading, data }] =
    useMutation<UploadProductMutation>("/api/products");

  const onValid = (data: UploadProductForm) => {
    if (loading) {
      return;
    }
    uploadProduct(data);
    console.log(data);
  };

  const onInvalid = (errors: FieldErrors) => {
    console.log(errors);
  };

  useEffect(() => {
    if (data?.ok) {
      router.push(`/products/${data.product.id}`);
    }
  }, [data]);
  return (
    <Layout canGoBack title="Upload Product">
      <form
        className="px-4 py-16 space-y-4"
        onSubmit={handleSubmit(onValid, onInvalid)}
      >
        <div>
          <label className="flex cursor-pointer justify-center text-gray-400 border-2 border-gray-400 hover:border-orange-400 hover:text-orange-400 border-dashed py-32 rounded-md">
            <svg
              className="h-12 w-12"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 48 48"
              aria-hidden="true"
            >
              <path
                d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <input className="hidden" type="file" />
          </label>
        </div>
        <Input
          register={register("name", { required: true })}
          type="text"
          name="name"
          label="Name"
          kind="text"
          required
        />
        <Input
          register={register("price", { required: true })}
          type="number"
          name="price"
          label="Price"
          kind="price"
          required
        />
        <TextArea
          register={register("description", { required: true })}
          label="Description"
          name="description"
        />
        <button className="w-full mt-4 bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium focus:outline-none  focus:ring-2 focus:ring-offset-2 focus:ring-orange-500">
          {loading ? "Loading" : "Upload product"}
        </button>
      </form>
    </Layout>
  );
};

export default Upload;
