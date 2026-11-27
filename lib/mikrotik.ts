export async function mikrotikEnable(username:string){
  // Call MikroTik API - simple fetch to RouterOS REST API
  const host = process.env.MIKROTIK_HOST;
  const auth = Buffer.from(`${process.env.MIKROTIK_USER}:${process.env.MIKROTIK_PASS}`).toString('base64');
  await fetch(`http://${host}/rest/ppp/secret/enable`,{
    method:"POST", headers:{ Authorization:`Basic ${auth}`, "Content-Type":"application/json"},
    body: JSON.stringify({ ".id": username })
  });
}
