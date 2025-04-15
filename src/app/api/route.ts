import getQr, { connectToWhatsApp } from "@/server/whatsapp"

//api ey
export async function GET() {
    connectToWhatsApp()
    return Response.json({ status: true, qr: await getQr() })
}