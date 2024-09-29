import Container from "@/components/shared/general/Container";
import ProductsList from "@/components/shared/products-components/ProductsList";

export default function ProductsPage() {
    return (
        <div className="pt-20">
            <Container>
                <ProductsList />
            </Container>
        </div>
    )
}