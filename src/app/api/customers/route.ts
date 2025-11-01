import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

// GET all customers
export async function GET() {
  try {
    const customers = await prisma.customer.findMany({
      include: {
        orders: {
          orderBy: {
            orderDate: 'desc',
          },
          take: 5,
        },
        _count: {
          select: {
            orders: true,
            reviews: true,
          },
        },
      },
      orderBy: {
        createdAt: 'desc',
      },
    });

    return NextResponse.json(customers);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch customers' },
      { status: 500 }
    );
  }
}

// POST create new customer
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, name, phone, address, city, postalCode, country } = body;

    // Check if customer already exists
    const existingCustomer = await prisma.customer.findUnique({
      where: { email },
    });

    if (existingCustomer) {
      return NextResponse.json(
        { error: 'Customer with this email already exists' },
        { status: 400 }
      );
    }

    const customer = await prisma.customer.create({
      data: {
        email,
        name,
        phone,
        address,
        city,
        postalCode,
        country: country || 'Sweden',
      },
    });

    return NextResponse.json(customer, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to create customer' },
      { status: 500 }
    );
  }
}
