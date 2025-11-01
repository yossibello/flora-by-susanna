import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

// GET single order
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  try {
    const order = await prisma.order.findUnique({
      where: { id },
      include: {
        customer: true,
        orderItems: {
          include: {
            flower: true,
          },
        },
      },
    });

    if (!order) {
      return NextResponse.json(
        { error: 'Order not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(order);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch order' },
      { status: 500 }
    );
  }
}

// PUT update order status
export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  try {
    const body = await request.json();
    const order = await prisma.order.update({
      where: { id },
      data: {
        status: body.status,
        deliveryDate: body.deliveryDate ? new Date(body.deliveryDate) : undefined,
      },
      include: {
        orderItems: {
          include: {
            flower: true,
          },
        },
      },
    });

    return NextResponse.json(order);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to update order' },
      { status: 500 }
    );
  }
}

// DELETE order
export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  try {
    await prisma.order.delete({
      where: { id },
    });

    return NextResponse.json({ message: 'Order deleted successfully' });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to delete order' },
      { status: 500 }
    );
  }
}
