import { NextResponse } from "next/server"
export async function POST(req: Request){
  const { phone, amount, user } = await req.json();
  await fetch("https://paymentsapi.yo.co.ug/api/v1/request",{
    method:"POST", headers:{"Content-Type":"application/json"},
    body: JSON.stringify({
      username: process.env.YO_API_USER, password: process.env.YO_API_PASS,
      phone, amount, narrative: `DATPO Internet ${user}`, external_reference: `DATPO-${Date.now()}`
    })
  });
  return new NextResponse(`Yo! Payment request sent to ${phone}. Dial *165# or *185# to approve for ${user}`);
}
