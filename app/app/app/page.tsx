"use client"
import { useState } from "react"
export default function Home(){
  const [phone,setPhone]=useState(""); const [user,setUser]=useState(""); const [amount,setAmount]=useState("30000");
  const pay = async (type:string)=>{
    const res = await fetch(`/api/momo/${type}`,{method:"POST", body: JSON.stringify({phone,user,amount})});
    alert(await res.text());
  }
  return (
    <div style={{maxWidth:400, margin:"40px auto", background:"white", padding:20, borderRadius:12}}>
      <h1>DATPO ISP Billing</h1>
      <p>Pay internet with Ugandan Mobile Money</p>
      <input placeholder="PPPoE Username" value={user} onChange={e=>setUser(e.target.value)} style={{width:'100%', padding:10, marginTop:10}}/>
      <input placeholder="Phone 25677xxxxxxx" value={phone} onChange={e=>setPhone(e.target.value)} style={{width:'100%', padding:10, marginTop:10}}/>
      <select value={amount} onChange={e=>setAmount(e.target.value)} style={{width:'100%', padding:10, marginTop:10}}>
        <option value="1000">1 Day - 1,000 UGX</option>
        <option value="28000">30 Days - 28,000 UGX</option>
        <option value="45000">30 Days Fast - 45,000 UGX</option>
      </select>
      <button onClick={()=>pay("mtn")} style={{width:'100%', background:'#FFCC00', padding:12, marginTop:15, border:0}}>Pay with MTN MoMo</button>
      <button onClick={()=>pay("airtel")} style={{width:'100%', background:'#FF0000', color:'white', padding:12, marginTop:10, border:0}}>Pay with Airtel Money</button>
      <button onClick={()=>pay("yo")} style={{width:'100%', background:'#0044cc', color:'white', padding:12, marginTop:10, border:0}}>Pay with Yo! (Both)</button>
    </div>
  )
}
