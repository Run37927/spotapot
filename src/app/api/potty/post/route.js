import prisma from "@/lib/db";

export async function POST(req) {
    const body = await req.json();
    const { name, latitude, longitude } = body;

    try {
        const potty = await prisma.potty.create({
            data: {
                name,
                latitude,
                longitude
            }
        });

        return new Response(JSON.stringify(potty), { status: 200 });
    } catch (error) {
        console.error(error);
        return new Response('cannot post a potty', { status: 500 });
    }
}