import React from 'react';

export default function App() {
  return (
    <div style={{ textAlign: 'center', padding: '50px', fontFamily: 'Arial, sans-serif', backgroundColor: '#121212', color: '#fff', minHeight: '100vh' }}>
      <h1 style={{ color: '#00e676' }}>Welcome to A4MP-REDDY</h1>
      <p style={{ fontSize: '18px' }}>Next-Gen AI Ecosystem</p>
      
      <div style={{ margin: '30px 0', padding: '20px', border: '1px solid #333', borderRadius: '8px', display: 'inline-block', backgroundColor: '#1e1e1e' }}>
        <h3>Features Included:</h3>
        <ul style={{ textAlign: 'left', lineHeight: '2' }}>
          <li>🎙️ Interactive AI Voice Agent</li>
          <li>🌾 Smart Multi-Language Weather Advisory (for Farmers)</li>
          <li>🎬 Advanced Cinematic Tools</li>
        </ul>
      </div>
      <br />
      <button style={{ padding: '12px 24px', fontSize: '16px', fontWeight: 'bold', backgroundColor: '#00e676', color: '#000', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
        Launch AI Platform
      </button>
    </div>
  );
}
