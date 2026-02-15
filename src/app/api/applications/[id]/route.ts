
import { NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import Application from '@/models/Application';

export const dynamic = 'force-dynamic';

export async function GET(
    req: Request,
    props: { params: Promise<{ id: string }> }
) {
    try {
        await dbConnect();
        const params = await props.params;

        const application = await Application.findById(params.id);

        if (!application) {
            return NextResponse.json(
                { success: false, message: 'Application not found' },
                { status: 404 }
            );
        }

        return NextResponse.json({ success: true, data: application });
    } catch (error) {
        console.error('Error fetching application:', error);
        return NextResponse.json(
            { success: false, message: 'Internal Server Error' },
            { status: 500 }
        );
    }
}
