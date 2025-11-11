import { CustomerDTO } from "@/cases/products/customers/dtos/customer";

export interface OrderItem {
    id? : string;
    product: ProductDTO;
    quantity: number;
    value: number;
}

export interface OrderDTO {
    id?: string;
    customer: CustomerDTO;
    status: string;
    total: number;
    items: OrderItem[]
    createdAt: Date;
    updateAt: Date;
}