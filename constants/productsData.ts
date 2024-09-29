export type productType = {
    id: number,
    name: string,
    price: number,
    description: string,
    imageUrl: string,
}


export const products:productType[] = [
    {
        id: 1,
        name: "Four Cheese Pizza",
        price: 34,
        description: "Chicken, mozzarella, cheddar and parmesan cheeses, cheese sauce, tomatoes, alfredo sauce, garlic",
        imageUrl: "/cheesy.webp"
    },
    {
        id: 2,
        name: "Pepperoni Pizza",
        price: 29,
        description: "Spicy pepperoni, mozzarella, marinara sauce, and oregano on a classic crust",
        imageUrl: "/chorizo-fresh.webp"
    },
    {
        id: 3,
        name: "Margherita Pizza",
        price: 25,
        description: "Fresh tomatoes, mozzarella, and basil on a classic tomato base",
        imageUrl: "/pepperoni-fresh.webp"
    },
    {
        id: 4,
        name: "BBQ Chicken Pizza",
        price: 36,
        description: "Grilled chicken, red onions, mozzarella, and BBQ sauce",
        imageUrl: "/dodster.webp"
    },
    {
        id: 5,
        name: "Hawaiian Pizza",
        price: 32,
        description: "Ham, pineapple, mozzarella, and tomato sauce on a thick crust",
        imageUrl: "/ham-and-cheese-sandwich.webp"
    }
];
