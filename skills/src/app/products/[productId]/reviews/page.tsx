export default function ProductReview({params}: {
    params: {productId: string}
}){
    return (
        <h1>Review about Product {params.productId} </h1>
    )
}