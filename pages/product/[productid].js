import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useContext } from "react";
import Layout from "../../components/layout";
import data from "../../utils/data";

function ProductDetail() {
  const { query } = useRouter();
  const { productid } = query;
  const product = data.products.find(x => x.productid === productid);
  if (!product) {
    return <div>product Not Found</div>
  }

  return (
    <div>
      <Layout title={product.name}>
         <div className="py-2">
            <Link href="/">Back To Products</Link>
         </div>
         <div className="grid md:grid-cols-4 md:gap-3">
             <div className="md:col-span-2">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={640}
                  height={640}
                  layout="responsive"
                >
                </Image>

             </div>
         </div>
      </Layout>
    </div>
  );
}

export default ProductDetail;

// export async function getServerSideProps(context) {
//   const { params } = context;
//   const { productid } = params;
// }
