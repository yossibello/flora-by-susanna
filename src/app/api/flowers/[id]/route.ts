import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

// GET single flower
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  try {
    const flower = await prisma.flower.findUnique({
      where: { id },
      include: {
        reviews: {
          include: {
            customer: {
              select: {
                name: true,
              },
            },
          },
          orderBy: {
            createdAt: 'desc',
          },
        },
      },
    });

    if (!flower) {
      return NextResponse.json(
        { error: 'Flower not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(flower);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch flower' },
      { status: 500 }
    );
  }
}

// PUT update flower
export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  try {
    const body = await request.json();
    const flower = await prisma.flower.update({
      where: { id },
      data: body,
    });

    return NextResponse.json(flower);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to update flower' },
      { status: 500 }
    );
  }
}

// DELETE flower
export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  try {
    await prisma.flower.delete({
      where: { id },
    });

    return NextResponse.json({ message: 'Flower deleted successfully' });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to delete flower' },
      { status: 500 }
    );
  }
}
