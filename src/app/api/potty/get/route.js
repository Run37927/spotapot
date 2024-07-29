import prisma from "@/lib/db";

export async function GET() {
    try {
        const potties = await prisma.potty.findMany();

        return new Response(JSON.stringify(potties), { status: 200 });
    } catch (error) {
        console.error(error);
        return new Response('cannot get potties', { status: 500 });
    }
}