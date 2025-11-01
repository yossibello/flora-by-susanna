export interface Customer {
  id: string;
  email: string;
  name: string;
  phone?: string;
  address?: string;
  city?: string;
  postalCode?: string;
  country: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Flower {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  imageUrl?: string;
  availability: boolean;
  stockCount: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface Order {
  id: string;
  customerId: string;
  orderDate: Date;
  deliveryDate?: Date;
  deliveryAddress: string;
  deliveryCity: string;
  deliveryPostal: string;
  status: 'pending' | 'confirmed' | 'delivered' | 'cancelled';
  totalAmount: number;
  notes?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface OrderItem {
  id: string;
  orderId: string;
  flowerId: string;
  quantity: number;
  price: number;
  createdAt: Date;
}

export interface Review {
  id: string;
  customerId: string;
  flowerId?: string;
  rating: number;
  comment?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface CreateOrderInput {
  customerId: string;
  deliveryDate?: Date;
  deliveryAddress: string;
  deliveryCity: string;
  deliveryPostal: string;
  notes?: string;
  items: {
    flowerId: string;
    quantity: number;
  }[];
}
