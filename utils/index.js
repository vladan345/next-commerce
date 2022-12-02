import axios from "axios";
export async function storefront(query, variables = {}) {
  //   var config = {
  //     method: "post",
  //     url: "https://<shop name>.myshopify.com/api/2021-07/graphql.json",
  //     headers: {
  //       "X-Shopify-Storefront-Access-Token": "<access token>",
  //       "Content-Type": "application/json",
  //     },
  //     data: {
  //       query: `query {
  //                 shop {
  //                     name
  //                   }
  //               }`,
  //     },
  //   };
  const url = process.env.NEXT_PUBLIC_API_URL;
  const headers = {
    "X-Shopify-Storefront-Access-Token":
      process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN,
    "Content-Type": "application/json",
  };

  const response = await axios.post(
    url, // this is the same as the previous url
    {
      query: `
        {
            products(first: 4) {
              nodes {
                title
                priceRange {
                  maxVariantPrice {
                    amount
                  }
                }
                featuredImage {
                  url
                }
              }
            }
          }
    `,
    },
    { headers: headers }
  ); // headers are the same as previous headers
  // .then((result) => result.data)
  // .catch((error) => {
  //   console.log(error.response);
  // });
  //   const response = await fetch(process.env.NEXT_PUBLIC_API_URL, {
  //     methord: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //       "X-Shopify-Storefront-Access-Token":
  //         process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN,
  //     },
  //     body: JSON.stringify({ query, variables }),
  //   }).catch((error) => {
  //     console.error(error);
  //   });
  console.log(response.data);
  return response;
}
