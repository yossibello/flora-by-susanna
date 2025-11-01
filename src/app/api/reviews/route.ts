import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

// GET all reviews
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const flowerId = searchParams.get('flowerId');

    const reviews = await prisma.review.findMany({
      where: {
        ...(flowerId && { flowerId }),
      },
      include: {
        customer: {
          select: {
            name: true,
            email: true,
          },
        },
        flower: {
          select: {
            name: true,
          },
        },
      },
      orderBy: {
        createdAt: 'desc',
      },
    });

    return NextResponse.json(reviews);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch reviews' },
      { status: 500 }
    );
  }
}

// POST create new review
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { customerId, flowerId, rating, comment } = body;

    if (rating < 1 || rating > 5) {
      return NextResponse.json(
        { error: 'Rating must be between 1 and 5' },
        { status: 400 }
      );
    }

    const review = await prisma.review.create({
      data: {
        customerId,
        flowerId,
        rating: parseInt(rating),
        comment,
      },
      include: {
        customer: {
          select: {
            name: true,
          },
        },
      },
    });

    return NextResponse.json(review, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to create review' },
      { status: 500 }
    );
  }
}
