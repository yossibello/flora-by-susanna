import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

// GET all orders
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const customerId = searchParams.get('customerId');
    const status = searchParams.get('status');

    const orders = await prisma.order.findMany({
      where: {
        ...(customerId && { customerId }),
        ...(status && { status }),
      },
      include: {
        customer: {
          select: {
            name: true,
            email: true,
            phone: true,
          },
        },
        orderItems: {
          include: {
            flower: true,
          },
        },
      },
      orderBy: {
        orderDate: 'desc',
      },
    });

    return NextResponse.json(orders);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch orders' },
      { status: 500 }
    );
  }
}

// POST create new order
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      customerId,
      deliveryDate,
      deliveryAddress,
      deliveryCity,
      deliveryPostal,
      notes,
      items,
    } = body;

    // Calculate total amount
    let totalAmount = 0;
    for (const item of items) {
      const flower = await prisma.flower.findUnique({
        where: { id: item.flowerId },
      });
      if (flower) {
        totalAmount += flower.price * item.quantity;
      }
    }

    // Create order with items
    const order = await prisma.order.create({
      data: {
        customerId,
        deliveryDate: deliveryDate ? new Date(deliveryDate) : undefined,
        deliveryAddress,
        deliveryCity,
        deliveryPostal,
        notes,
        totalAmount,
        status: 'pending',
        orderItems: {
          create: await Promise.all(
            items.map(async (item: any) => {
              const flower = await prisma.flower.findUnique({
                where: { id: item.flowerId },
              });
              return {
                flowerId: item.flowerId,
                quantity: item.quantity,
                price: flower?.price || 0,
              };
            })
          ),
        },
      },
      include: {
        orderItems: {
          include: {
            flower: true,
          },
        },
      },
    });

    return NextResponse.json(order, { status: 201 });
  } catch (error) {
    console.error('Order creation error:', error);
    return NextResponse.json(
      { error: 'Failed to create order' },
      { status: 500 }
    );
  }
}
