const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const compression = require('compression');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

// --- 1. Security Layer (Expert Protection) ---
app.use(helmet()); // HTTP 헤더 보안 (XSS, Clickjacking 등 방어)
app.use(cors({
  origin: process.env.FRONTEND_URL || '*', 
  methods: ['GET', 'POST'],
  credentials: true
}));
app.use(express.json({ limit: '10kb' })); // JSON 페이로드 크기 제한 (DoS 방어)

// Rate Limiting: 무차별 공격 및 DDoS 방어
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15분
  max: 100, // IP당 최대 100회 요청
  message: { error: 'Too many requests from this IP, please try again after 15 minutes' }
});
app.use('/api/', limiter);

// --- 2. Performance Optimization ---
app.use(compression()); // 데이터 압축 전송

// --- 3. Encapsulated Core Data (IP Protection Simulation) ---
// 실제 상용 서비스에서는 환경 변수나 보안 DB에 보관
const DATABASE = {
  archetypes: [
    { id: 'hero', name: 'The Eternal Hero', culture: 'Global', color: '#EF4444', icon: '⚔️', description: 'The force of evolution and conquest over chaos.' },
    { id: 'sage', name: 'The Cosmic Sage', culture: 'Universal', color: '#3B82F6', icon: '📜', description: 'Keeper of forbidden knowledge and ultimate truth.' },
    { id: 'alchemist', name: 'The Void Alchemist', culture: 'Hermetic', color: '#A855F7', icon: '🧪', description: 'Master of transformation.' }
  ],
  wisdom: [
    { title: 'The Icarus Protocol', culture: 'Modern Greek', message: 'Ambition is the engine, but equilibrium is the pilot.' }
  ]
};

// --- 4. Secure API Endpoints ---
app.get('/api/archetypes', (req, res) => {
  res.status(200).json(DATABASE.archetypes);
});

app.get('/api/wisdom', (req, res) => {
  res.status(200).json(DATABASE.wisdom);
});

app.post('/api/oracle', (req, res) => {
  const { question } = req.body;
  
  // Input Validation & Sanitization
  if (!question || typeof question !== 'string' || question.length < 5) {
    return res.status(400).json({ error: 'Invalid question format or too short.' });
  }

  // Core Oracle Algorithm (Client-side simulation mirroring)
  const result = {
    archetype: DATABASE.archetypes[Math.floor(Math.random() * DATABASE.archetypes.length)],
    wisdom: DATABASE.wisdom[Math.floor(Math.random() * DATABASE.wisdom.length)],
    guidance: "This guidance is protected by MythOS Security Protocol v2.",
    confidence: 99
  };

  res.status(200).json(result);
});

// --- 5. Global Error Handler (Security Context) ---
// 에러 스택 정보를 클라이언트에 노출하지 않아 해커의 취약점 분석 방지
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal Security Error - Logged for Review' });
});

app.listen(PORT, () => {
  console.log(`[MythOS Secure Server] Internal link established on port ${PORT}`);
});
