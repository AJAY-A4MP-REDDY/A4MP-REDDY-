
import React, { useState } from 'react';

export default function App() {
  const [isListening, setIsListening] = useState(false);
  const [chatMessage, setChatMessage] = useState("Hi, my name is A4MP REDDY. How can I help you?");

  return (
    <div style={{ backgroundColor: '#06060e', color: '#ffffff', minHeight: '100vh', fontFamily: 'sans-serif', padding: '20px' }}>
      
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'between', alignItems: 'center', justifyContent: 'space-between', marginBottom: '4px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{ background: 'linear-gradient(135deg, #00f2fe 0%, #4facfe 100%)', borderRadius: '50%', width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>A4</div>
          <span style={{ fontSize: '20px', fontWeight: 'bold', letterSpacing: '1px' }}>A4MP-<span style={{ color: '#4facfe' }}>REDDY</span></span>
        </div>
        <button style={{ background: 'linear-gradient(90deg, #00d2ff 0%, #9a4eff 100%)', color: '#fff', border: 'none', padding: '10px 24px', borderRadius: '20px', fontWeight: 'bold', cursor: 'pointer' }}>Launch →</button>
      </div>

      <hr style={{ borderColor: '#151525', margin: '15px 0' }} />

      {/* Hero Section */}
      <div style={{ textAlign: 'center', margin: '40px 0' }}>
        <span style={{ backgroundColor: '#121225', padding: '6px 16px', borderRadius: '20px', fontSize: '13px', color: '#8a8ab0', border: '1px solid #222244' }}>● v2.0 — Neural Edge Release</span>
        <h1 style={{ fontSize: '42px', fontWeight: 'bold', margin: '20px 0 10px 0', background: 'linear-gradient(90deg, #00f2fe 0%, #9a4eff 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>A4MP-REDDY</h1>
        <h2 style={{ fontSize: '22px', fontWeight: 'normal', color: '#e2e2e9', marginBottom: '20px' }}>The Next-Gen AI Ecosystem</h2>
        <p style={{ color: '#8a8ab0', maxWidth: '500px', margin: '0 auto 30px auto', lineHeight: '1.6' }}>
          One cinematic platform for generative imagery, language intelligence, and a multilingual weather advisory engine — engineered for builders who think in futures.
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', alignItems: 'center' }}>
          <button style={{ background: 'linear-gradient(90deg, #00d2ff 0%, #9a4eff 100%)', color: '#fff', border: 'none', width: '260px', padding: '14px', borderRadius: '25px', fontWeight: 'bold', fontSize: '16px' }}>Try the Live Console</button>
          <button style={{ backgroundColor: '#111122', color: '#8a8ab0', border: '1px solid #222244', width: '260px', padding: '14px', borderRadius: '25px', fontSize: '16px' }}>Explore Modules</button>
        </div>
      </div>

      {/* Stats */}
      <div style={{ display: 'flex', justifyContent: 'space-around', gap: '10px', margin: '40px 0' }}>
        {[['12+', 'AI modules'], ['80ms', 'edge latency'], ['40+', 'languages']].map(([stat, label]) => (
          <div key={stat} style={{ backgroundColor: '#0b0b16', border: '1px solid #15152a', padding: '20px', borderRadius: '15px', textAlign: 'center', flex: 1 }}>
            <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#00d2ff' }}>{stat}</div>
            <div style={{ fontSize: '12px', color: '#8a8ab0', marginTop: '5px' }}>{label}</div>
          </div>
        ))}
      </div>

      {/* Modules Stack */}
      <div style={{ margin: '40px 0' }}>
        <span style={{ color: '#00d2ff', fontSize: '12px', fontWeight: 'bold', letterSpacing: '2px' }}>MODULES</span>
        <h3 style={{ fontSize: '28px', margin: '10px 0' }}>A unified stack for <span style={{ background: 'linear-gradient(90deg, #00f2fe 0%, #9a4eff 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>intelligent products</span>.</h3>
        <p style={{ color: '#8a8ab0', lineHeight: '1.6' }}>Three flagship modules, one consistent design language. Compose them or use them solo.</p>
        
        {/* Module Cards */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginTop: '20px' }}>
          <div style={{ backgroundColor: '#0b0b16', border: '1px solid #15152a', padding: '25px', borderRadius: '20px' }}>
            <span style={{ color: '#8a8ab0', fontSize: '12px' }}>VISION</span>
            <h4 style={{ fontSize: '20px', margin: '10px 0' }}>AI Image Editing</h4>
            <p style={{ color: '#8a8ab0', fontSize: '14px' }}>Inpaint, restyle, and upscale with neural precision. Drag, prompt, ship.</p>
            <div style={{ color: '#00f2fe', fontSize: '12px', marginTop: '15px' }}>● Live module</div>
          </div>
          <div style={{ backgroundColor: '#0b0b16', border: '1px solid #15152a', padding: '25px', borderRadius: '20px' }}>
            <span style={{ color: '#8a8ab0', fontSize: '12px' }}>LANGUAGE</span>
            <h4 style={{ fontSize: '20px', margin: '10px 0' }}>Text Generation</h4>
            <p style={{ color: '#8a8ab0', fontSize: '14px' }}>Long-form drafts, code, and structured outputs powered by frontier models.</p>
            <div style={{ color: '#00f2fe', fontSize: '12px', marginTop: '15px' }}>● Live module</div>
          </div>
        </div>
      </div>

      {/* Voice Agent Section */}
      <div style={{ backgroundColor: '#0b0b16', border: '1px solid #15152a', padding: '30px 20px', borderRadius: '25px', textAlign: 'center', margin: '40px 0' }}>
        <span style={{ color: '#9a4eff', fontSize: '12px', fontWeight: 'bold', letterSpacing: '2px' }}>VOICE CORE</span>
        <h3 style={{ fontSize: '26px', margin: '10px 0' }}>Talk to <span style={{ color: '#00f2fe' }}>A4MP REDDY</span></h3>
        <p style={{ color: '#8a8ab0', fontSize: '14px', marginBottom: '30px' }}>Tap the orb, speak naturally — A4MP REDDY listens, thinks, and speaks back.</p>
        
        {/* Interactive Orb */}
        <div 
          onClick={() => setIsListening(!isListening)}
          style={{ 
            width: '160px', height: '160px', borderRadius: '50%', margin: '0 auto 30px auto',
            background: isListening ? 'radial-gradient(circle, #9a4eff 0%, #06060e 70%)' : 'radial-gradient(circle, #00f2fe 0%, #06060e 70%)',
            boxShadow: isListening ? '0 0 30px #9a4eff' : '0 0 30px #00f2fe',
            display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', transition: 'all 0.5s ease'
          }}
        >
          <span style={{ fontSize: '40px' }}>🎙️</span>
        </div>
        <div style={{ color: '#8a8ab0', fontSize: '12px', letterSpacing: '1px', marginBottom: '20px' }}>
          {isListening ? "LISTENING . . . . . . . . . . . . ." : "TAP THE ORB TO SPEAK"}
        </div>

        {/* Chat Output box */}
        <div style={{ backgroundColor: '#06060e', border: '1px solid #15152a', borderRadius: '15px', padding: '15px', textAlign: 'left', display: 'flex', gap: '15px', alignItems: 'start' }}>
          <div style={{ background: 'linear-gradient(135deg, #9a4eff 0%, #00f2fe 100%)', borderRadius: '50%', width: '45px', height: '45px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', flexShrink: 0, fontSize: '12px' }}>A4MP</div>
          <div>
            <div style={{ fontWeight: 'bold', fontSize: '14px' }}>A4MP REDDY <span style={{ color: '#00f2fe', fontSize: '11px', fontWeight: 'normal', marginLeft: '5px' }}>• Voice Agent • Online</span></div>
            <div style={{ color: '#c5c5d2', fontSize: '14px', marginTop: '8px', backgroundColor: '#111125', padding: '12px', borderRadius: '0 12px 12px 12px' }}>
              {isListening ? "I'm listening to you, tell me AJAY KUMAR..." : chatMessage}
            </div>
          </div>
        </div>
      </div>

      {/* Weather Advisory Section */}
      <div style={{ margin: '40px 0' }}>
        <span style={{ color: '#00d2ff', fontSize: '12px', fontWeight: 'bold', letterSpacing: '2px' }}>WEATHER ADVISORY</span>
        <h3 style={{ fontSize: '28px', margin: '10px 0' }}>Forecasts that <span style={{ color: '#00f2fe' }}>speak your language</span>.</h3>
        <p style={{ color: '#8a8ab0', marginBottom: '20px' }}>Conversational weather guidance localized for tone, units, and cultural context.</p>
        <div style={{ color: '#8a8ab0', fontSize: '14px', marginBottom: '20px' }}>live · 40+ locales</div>

        {/* Weather Cards */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          <div style={{ background: 'linear-gradient(180deg, #111125 0%, #0b0b16 100%)', border: '1px solid #15152a', padding: '20px', borderRadius: '20px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ color: '#8a8ab0', fontSize: '16px' }}>Hyderabad</span>
              <span style={{ fontSize: '24px' }}>☀️</span>
            </div>
            <div style={{ fontSize: '48px', fontWeight: 'bold', margin: '10px 0', color: '#00f2fe' }}>31°</div>
            <div style={{ color: '#e2e2e9', marginBottom: '15px' }}>Partly cloudy</div>
            <div style={{ borderTop: '1px solid #1a1a35', paddingTop: '10px' }}>
              <div style={{ color: '#9a4eff', fontSize: '12px', fontWeight: 'bold' }}>తెలుగు</div>
              <div style={{ color: '#00f2fe', fontSize: '14px', marginTop: '4px' }}>మంచి రోజు — తేలికపాటి దుస్తులు ధరించండి.</div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
                       }
          
