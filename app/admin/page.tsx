export default function Admin(){
  return (
    <div style={{padding:20}}>
      <h1>DATPO Admin - MikroTik Sync</h1>
      <button onClick={async()=>{ const r=await fetch('/api/mikrotik/sync',{method:'POST'}); alert(await r.text())}}>Sync MikroTik PPPoE Users</button>
      <p>All payments come here. Connect your MikroTik to auto-enable users after MoMo pay.</p>
    </div>
  )
}
