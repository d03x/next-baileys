import getQr, { connect_to_whatsapp } from "@/server/whatsapp"

//api ey
export async function GET() {
    connect_to_whatsapp()
    return Response.json({ status: true, qr: await getQr() })
}