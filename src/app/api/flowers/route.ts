import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

// GET all flowers
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const category = searchParams.get('category');
    const available = searchParams.get('available');

    const flowers = await prisma.flower.findMany({
      where: {
        ...(category && { category }),
        ...(available && { availability: available === 'true' }),
      },
      orderBy: {
        createdAt: 'desc',
      },
    });

    return NextResponse.json(flowers);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch flowers' },
      { status: 500 }
    );
  }
}

// POST create new flower
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, description, price, category, imageUrl, stockCount } = body;

    const flower = await prisma.flower.create({
      data: {
        name,
        description,
        price: parseFloat(price),
        category,
        imageUrl,
        stockCount: parseInt(stockCount) || 0,
        availability: true,
      },
    });

    return NextResponse.json(flower, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to create flower' },
      { status: 500 }
    );
  }
}
