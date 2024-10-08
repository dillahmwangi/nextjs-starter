// This is the default export for the ProductDetails component
export default function ProductDetails({
    params, // Destructuring to get params from the props
}: {
    params: { productId: string }; // Defining the type for params, which contains productId as a string

}) {
    // Returning an <h1> element displaying product details
    return <h1>Details about product {params.productId}</h1>
    // The productId is extracted from the params and displayed in the heading
}
    