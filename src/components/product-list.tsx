import { ProductWithCount } from "@/pages";
import useSWR from "swr";
import Item from "./item";

interface ProductListProps {
  kind: "favs" | "sales" | "purchases";
}
interface Record {
  id: number;
  product: ProductWithCount;
}
interface ProductListResponse {
  [key: string]: Record[];
}

export default function ProductList({ kind }: ProductListProps) {
  const { data, error } = useSWR<ProductListResponse>(`/api/users/me/${kind}`);
  return data ? (
    <>
      {data[kind]?.map((record) => (
        <Item
          key={record.product.id}
          id={record.product.id}
          title={record.product.name}
          price={record.product.price}
          hearts={record.product._count.favorites}
        />
      ))}
    </>
  ) : null;
}
