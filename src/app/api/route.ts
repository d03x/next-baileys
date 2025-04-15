import getQr, { connectToWhatsApp } from "@/server/whatsapp"

//api ey
export async function GET(request: Request) {
    connectToWhatsApp()
    return Response.json({ status: true, qr: await getQr() })
}