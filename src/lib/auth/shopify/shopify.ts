import { SHOPIFY_API_KEY, SHOPIFY_API_SECRET, SHOPIFY_STORE_URL, SHOPIFY_ACCESS_TOKEN } from '$env/static/private';

// Format the store domain properly (remove https:// if present)
const formattedShopifyDomain = SHOPIFY_STORE_URL?.replace('https://', '');

// Type for Shopify Product
export interface ShopifyProduct {
  id: string;
  title: string;
  description?: string;
  body_html?: string;
  vendor: string;
  product_type: string;
  created_at?: string;
  handle: string;
  updated_at?: string;
  published_at?: string;
  tags?: string;
  variants: ShopifyProductVariant[];
  images: ShopifyProductImage[];
  options: ShopifyProductOption[];
}

export interface ShopifyProductVariant {
  id: string;
  product_id?: string;
  title: string;
  price: string;
  sku?: string;
  position?: number;
  inventory_policy?: string;
  compare_at_price?: string | null;
  fulfillment_service?: string;
  inventory_management?: string | null;
  option1?: string | null;
  option2?: string | null;
  option3?: string | null;
  created_at?: string;
  updated_at?: string;
  taxable?: boolean;
  barcode?: string | null;
  grams?: number;
  weight?: number;
  weight_unit?: string;
  requires_shipping?: boolean;
}

export interface ShopifyProductImage {
  id?: string;
  product_id?: string;
  position?: number;
  created_at?: string;
  updated_at?: string;
  alt: string | null;
  width?: number;
  height?: number;
  src: string;
  variant_ids?: string[];
}

export interface ShopifyProductOption {
  id?: string;
  product_id?: string;
  name: string;
  position?: number;
  values: string[];
}

/**
 * Executes a GraphQL query against the Shopify Storefront API
 */
async function executeStorefrontQuery<T>(query: string, variables: Record<string, any> = {}): Promise<T> {
  if (!SHOPIFY_STORE_URL || !SHOPIFY_ACCESS_TOKEN) {
    console.error("Missing Shopify credentials");
    throw new Error("Shopify API credentials missing");
  }

  try {
    // Construct the URL for the Storefront API GraphQL endpoint
    const url = `https://${formattedShopifyDomain}/api/2024-01/graphql.json`;

    // Make the request
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Shopify-Storefront-Access-Token': SHOPIFY_ACCESS_TOKEN,
      },
      body: JSON.stringify({
        query,
        variables
      })
    });

    if (!response.ok) {
      throw new Error(`Shopify API error: ${response.status} ${response.statusText}`);
    }

    const result = await response.json();

    if (result.errors) {
      console.error('GraphQL errors:', result.errors);
      throw new Error(`GraphQL Error: ${result.errors[0].message}`);
    }

    return result.data as T;
  } catch (error) {
    console.error('Error fetching from Shopify:', error);
    throw error;
  }
}

/**
 * Fetch products from Shopify using Storefront API with GraphQL
 * @returns {Promise<ShopifyProduct[]>} List of products
 */
export async function getProducts(): Promise<ShopifyProduct[]> {
  try {
    // Define the GraphQL query
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

    // Execute the query
    const data = await executeStorefrontQuery<{
      products: {
        edges: Array<{
          node: any;
        }>;
      };
    }>(query, { first: 20 });

    // Process the response data
    if (!data?.products?.edges) {
      return [];
    }

    // Transform the GraphQL response to match our expected ShopifyProduct interface
    const products = data.products.edges.map((edge) => {
      const node = edge.node;

      const images = node.images.edges.map((imgEdge: any) => ({
        id: imgEdge.node.id,
        src: imgEdge.node.src,
        alt: imgEdge.node.altText,
        width: imgEdge.node.width,
        height: imgEdge.node.height
      }));

      const variants = node.variants.edges.map((varEdge: any) => ({
        id: varEdge.node.id,
        title: varEdge.node.title,
        sku: varEdge.node.sku,
        price: varEdge.node.priceV2.amount,
        compare_at_price: varEdge.node.compareAtPriceV2?.amount || null
      }));

      const options = node.options.map((option: any) => ({
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
        product_type: node.productType || '',
        tags: node.tags?.join(', ') || '',
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
    console.error('Error fetching products from Shopify:', error);

    // Return sample data for demonstration if API fails
    return [
      {
        id: "1",
        title: "Sample Product 1",
        body_html: "This is a sample product",
        vendor: "Parkers Food Service",
        product_type: "Sample",
        handle: "sample-product-1",
        variants: [
          {
            id: "v1",
            title: "Default",
            price: "19.99"
          }
        ],
        images: [
          {
            src: "https://placehold.co/400",
            alt: null
          }
        ],
        options: []
      },
      {
        id: "2",
        title: "Sample Product 2",
        body_html: "Another sample product",
        vendor: "Parkers Food Service",
        product_type: "Sample",
        handle: "sample-product-2",
        variants: [
          {
            id: "v2",
            title: "Default",
            price: "29.99"
          }
        ],
        images: [
          {
            src: "https://placehold.co/400",
            alt: null
          }
        ],
        options: []
      }
    ];
  }
}

/**
 * Fetch a single product by handle using Storefront API
 * @param handle - The product handle (slug)
 * @returns {Promise<ShopifyProduct>} The product data
 */
export async function getProduct(handle: string): Promise<ShopifyProduct> {
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

    const data = await executeStorefrontQuery<{
      product: any;
    }>(query, { handle });

    if (!data?.product) {
      throw new Error(`Product with handle "${handle}" not found`);
    }

    const product = data.product;

    const images = product.images.edges.map((imgEdge: any) => ({
      id: imgEdge.node.id,
      src: imgEdge.node.src,
      alt: imgEdge.node.altText,
      width: imgEdge.node.width,
      height: imgEdge.node.height
    }));

    const variants = product.variants.edges.map((varEdge: any) => ({
      id: varEdge.node.id,
      title: varEdge.node.title,
      sku: varEdge.node.sku,
      price: varEdge.node.priceV2.amount,
      compare_at_price: varEdge.node.compareAtPriceV2?.amount || null
    }));

    const options = product.options.map((option: any) => ({
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
      product_type: product.productType || '',
      tags: product.tags?.join(', ') || '',
      created_at: product.createdAt,
      updated_at: product.updatedAt,
      published_at: product.publishedAt,
      images,
      variants,
      options
    };
  } catch (error) {
    console.error(`Error fetching product ${handle} from Shopify:`, error);

    // Return mock data for the requested product
    const products = [
      {
        id: "1",
        title: "Sample Product 1",
        body_html: "This is a sample product",
        vendor: "Parkers Food Service",
        product_type: "Sample",
        handle: "sample-product-1",
        variants: [{ id: "v1", title: "Default", price: "19.99" }],
        images: [{ src: "https://placehold.co/400", alt: null }],
        options: []
      },
      {
        id: "2",
        title: "Sample Product 2",
        body_html: "Another sample product",
        vendor: "Parkers Food Service",
        product_type: "Sample",
        handle: "sample-product-2",
        variants: [{ id: "v2", title: "Default", price: "29.99" }],
        images: [{ src: "https://placehold.co/400", alt: null }],
        options: []
      }
    ];

    const product = products.find(p => p.handle === handle);
    if (!product) {
      throw new Error(`Product with handle "${handle}" not found`);
    }

    return product;
  }
}