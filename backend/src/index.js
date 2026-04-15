const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const archetypes = [
  { id: 'hero', name: 'The Hero', culture: 'Universal', color: '#EF4444', icon: '⚔️', description: 'The brave adventurer seeking glory and transformation.' },
  { id: 'sage', name: 'The Sage', culture: 'Greek', color: '#3B82F6', icon: '📜', description: 'The wise teacher who seeks truth and understanding.' },
  { id: 'creator', name: 'The Creator', culture: 'Norse', color: '#A855F7', icon: '🔨', description: 'The innovative spirit who brings new things into being.' },
  { id: 'lover', name: 'The Lover', culture: 'Roman', color: '#EC4899', icon: '❤️', description: 'The passionate soul who values intimacy and beauty.' },
  { id: 'jester', name: 'The Jester', culture: 'Celtic', color: '#EAB308', icon: '🎭', description: 'The trickster who uses humor to speak truth to power.' },
  { id: 'magician', name: 'The Magician', culture: 'Egyptian', color: '#6366F1', icon: '🔮', description: 'The visionary who transforms the world through knowledge.' }
];

const wisdom = [
  {
    title: 'Odysseus & The Sirens',
    culture: 'Greek',
    message: 'Sometimes the greatest strength is knowing when to resist temptation.',
    application: 'Career decisions, avoiding distractions'
  },
  {
    title: 'The Phoenix Rising',
    culture: 'Egyptian',
    message: 'Every ending contains the seed of a new beginning.',
    application: 'Personal transformation, overcoming setbacks'
  },
  {
    title: "Thor's Hammer",
    culture: 'Norse',
    message: 'True power comes from worthiness, not just strength.',
    application: 'Leadership development, earning respect'
  }
];

app.get('/api/archetypes', (req, res) => {
  res.json(archetypes);
});

app.get('/api/wisdom', (req, res) => {
  res.json(wisdom);
});

app.post('/api/oracle', (req, res) => {
  const { question } = req.body;
  if (!question) return res.status(400).json({ error: 'Question is required' });

  // Simulate divine processing
  const randomArchetype = archetypes[Math.floor(Math.random() * archetypes.length)];
  const randomWisdom = wisdom[Math.floor(Math.random() * wisdom.length)];

  res.json({
    archetype: randomArchetype,
    wisdom: randomWisdom,
    guidance: `Channel your inner ${randomArchetype.name}. ${randomWisdom.message}`,
    confidence: 85 + Math.floor(Math.random() * 15)
  });
});

app.listen(PORT, () => {
  console.log(`MythOS Backend running on port ${PORT}`);
});
