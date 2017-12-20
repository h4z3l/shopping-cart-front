interface OrderObject {
    creditCardNumber: string;
    securityCode: string;
    expirationDate: string;
}

interface OrderItem {
    productId: string;
    quantity: number;
}

export interface Order {
    order: OrderObject;
    items: OrderItem[];
}