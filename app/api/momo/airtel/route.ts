import { NextResponse } from "next/server"
export async function POST(req: Request){
  const { phone, user, amount } = await req.json();
  // Airtel Money Uganda API
  const auth = await fetch("https://openapiuat.airtel.africa/auth/oauth2/token",{
    method:"POST", headers:{"Content-Type":"application/json"},
    body: JSON.stringify({ client_id: process.env.AIRTEL_CLIENT_ID, client_secret: process.env.AIRTEL_SECRET, grant_type:"client_credentials"})
  });
  const { access_token } = await auth.json();
  await fetch("https://openapiuat.airtel.africa/merchant/v1/payments/",{
    method:"POST",
    headers:{ "Authorization":`Bearer ${access_token}`, "Content-Type":"application/json"},
    body: JSON.stringify({
      reference:`DATPO-${Date.now()}`, subscriber:{ msisdn: phone },
      transaction:{ amount, country:"UG", currency:"UGX", id:`DATPO-${user}` }
    })
  });
  return new NextResponse(`Airtel Money prompt sent to ${phone}. Approve to activate ${user}`);
}
