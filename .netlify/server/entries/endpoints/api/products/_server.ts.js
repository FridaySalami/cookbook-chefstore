import { j as json } from "../../../../chunks/index.js";
import { b as building } from "../../../../chunks/environment.js";
import { d as dev } from "../../../../chunks/index4.js";
const SHOPIFY_STORE_URL = "https://parkersfoodservice.myshopify.com";
const SHOPIFY_ACCESS_TOKEN = "ebc526adda09ce79223fb3b707d95a7e";
const formattedShopifyDomain = SHOPIFY_STORE_URL?.replace("https://", "");
async function executeStorefrontQuery(query, variables = {}) {
  try {
    const url = `https://${formattedShopifyDomain}/api/2024-01/graphql.json`;
    console.log(`Making request to Shopify API: ${url}`);
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Shopify-Storefront-Access-Token": SHOPIFY_ACCESS_TOKEN
      },
      body: JSON.stringify({
        query,
        variables
      })
    });
    if (!response.ok) {
      const errorText = await response.text();
      console.error(`Shopify API responded with status ${response.status}:`, errorText);
      throw new Error(`Shopify API error: ${response.status} ${response.statusText}`);
    }
    const result = await response.json();
    if (result.errors) {
      console.error("GraphQL errors:", result.errors);
      throw new Error(`GraphQL Error: ${result.errors[0].message}`);
    }
    return result.data;
  } catch (error) {
    console.error("Error fetching from Shopify:", error);
    throw error;
  }
}
async function getProducts() {
  try {
    const query = `
      query GetProducts($first: Int!) {
        products(first: $first) {
          edges {
            node {
              id
              title
              description
              handle
              vendor
              productType
              tags
              createdAt
              updatedAt
              publishedAt
              options {
                id
                name
                values
              }
              variants(first: 10) {
                edges {
                  node {
                    id
                    title
                    sku
                    priceV2 {
                      amount
                      currencyCode
                    }
                    compareAtPriceV2 {
                      amount
                      currencyCode
                    }
                  }
                }
              }
              images(first: 10) {
                edges {
                  node {
                    id
                    src
                    altText
                    width
                    height
                  }
                }
              }
            }
          }
        }
      }
    `;
    const data = await executeStorefrontQuery(query, { first: 20 });
    if (!data?.products?.edges) {
      return [];
    }
    const products = data.products.edges.map((edge) => {
      const node = edge.node;
      const images = node.images.edges.map((imgEdge) => ({
        id: imgEdge.node.id,
        src: imgEdge.node.src,
        alt: imgEdge.node.altText,
        width: imgEdge.node.width,
        height: imgEdge.node.height
      }));
      const variants = node.variants.edges.map((varEdge) => ({
        id: varEdge.node.id,
        title: varEdge.node.title,
        sku: varEdge.node.sku,
        price: varEdge.node.priceV2.amount,
        compare_at_price: varEdge.node.compareAtPriceV2?.amount || null
      }));
      const options = node.options.map((option) => ({
        id: option.id,
        name: option.name,
        values: option.values
      }));
      return {
        id: node.id,
        title: node.title,
        body_html: node.description,
        description: node.description,
        vendor: node.vendor,
        handle: node.handle,
        product_type: node.productType || "",
        tags: node.tags?.join(", ") || "",
        created_at: node.createdAt,
        updated_at: node.updatedAt,
        published_at: node.publishedAt,
        images,
        variants,
        options
      };
    });
    return products;
  } catch (error) {
    console.error("Error fetching products from Shopify:", error);
    if (building) {
      console.warn("[BUILD_WARN] Error fetching products during build. Returning empty array. Error:", error);
      return [];
    }
    throw error;
  }
}
async function getProduct(handle) {
  try {
    const query = `
      query GetProduct($handle: String!) {
        product(handle: $handle) {
          id
          title
          description
          handle
          vendor
          productType
          tags
          createdAt
          updatedAt
          publishedAt
          options {
            id
            name
            values
          }
          variants(first: 10) {
            edges {
              node {
                id
                title
                sku
                priceV2 {
                  amount
                  currencyCode
                }
                compareAtPriceV2 {
                  amount
                  currencyCode
                }
              }
            }
          }
          images(first: 10) {
            edges {
              node {
                id
                src
                altText
                width
                height
              }
            }
          }
        }
      }
    `;
    const data = await executeStorefrontQuery(query, { handle });
    if (!data?.product) {
      if (building) {
        console.warn(`[BUILD_WARN] Product with handle "${handle}" not found during build. Returning mock.`);
        return {
          id: `mock-${handle}`,
          title: "Mock Product",
          handle,
          variants: [],
          images: [],
          options: [],
          vendor: "Mock Vendor",
          product_type: "Mock Type",
          description: "Mock description",
          body_html: "<p>Mock</p>"
        };
      }
      throw new Error(`Product with handle "${handle}" not found`);
    }
    const product = data.product;
    const images = product.images.edges.map((imgEdge) => ({
      id: imgEdge.node.id,
      src: imgEdge.node.src,
      alt: imgEdge.node.altText,
      width: imgEdge.node.width,
      height: imgEdge.node.height
    }));
    const variants = product.variants.edges.map((varEdge) => ({
      id: varEdge.node.id,
      title: varEdge.node.title,
      sku: varEdge.node.sku,
      price: varEdge.node.priceV2.amount,
      compare_at_price: varEdge.node.compareAtPriceV2?.amount || null
    }));
    const options = product.options.map((option) => ({
      id: option.id,
      name: option.name,
      values: option.values
    }));
    return {
      id: product.id,
      title: product.title,
      body_html: product.description,
      description: product.description,
      vendor: product.vendor,
      handle: product.handle,
      product_type: product.productType || "",
      tags: product.tags?.join(", ") || "",
      created_at: product.createdAt,
      updated_at: product.updatedAt,
      published_at: product.publishedAt,
      images,
      variants,
      options
    };
  } catch (error) {
    console.error(`Error fetching product ${handle} from Shopify:`, error);
    if (building) {
      console.warn(`[BUILD_WARN] Error fetching ${handle} during build. Returning mock. Error:`, error);
      return {
        id: `mock-error-${handle}`,
        title: "Mock Product (Error)",
        handle,
        variants: [],
        images: [],
        options: [],
        vendor: "Mock Vendor",
        product_type: "Mock Type",
        description: "Mock description on error",
        body_html: "<p>Mock on error</p>"
      };
    }
    throw error;
  }
}
const GET = async ({ url }) => {
  try {
    const handle = url.searchParams.get("handle");
    console.log(`API request received. Handle parameter: "${handle}"`);
    if (handle) {
      try {
        console.log(`Attempting to fetch product with handle: ${handle}`);
        const product = await getProduct(handle);
        console.log(`Successfully retrieved product:`, product.title);
        return json(product);
      } catch (error) {
        console.error(`Failed to fetch product with handle: ${handle}`, error);
        return json({
          error: error instanceof Error ? error.message : "Unknown error fetching product"
        }, { status: 404 });
      }
    } else {
      const products = await getProducts();
      console.log(`Fetched ${products.length} products`);
      return json(products, {
        headers: {
          // Cache for 5 minutes in production, no cache in dev
          "cache-control": dev ? "no-store, max-age=0" : "public, max-age=300"
        }
      });
    }
  } catch (error) {
    console.error("Error in products API:", error);
    return json({
      error: error instanceof Error ? error.message : "Unknown error occurred"
    }, {
      status: 500
    });
  }
};
export {
  GET
};
