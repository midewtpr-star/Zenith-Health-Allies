const SCRIPT_URL = process.env.SHEETS_SCRIPT_URL;

module.exports = async (req, res) => {
  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  }

  if (!SCRIPT_URL) {
    return res.status(500).json({ success: false, message: 'Missing SHEETS_SCRIPT_URL env' });
  }

  try {
    const payload = req.body || {};

    const upstream = await fetch(SCRIPT_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    const contentType = upstream.headers.get('content-type') || 'application/json';
    const text = await upstream.text();

    res.status(upstream.status);
    res.setHeader('Content-Type', contentType);
    res.send(text);
  } catch (err) {
    res.status(500).json({ success: false, message: err?.message || 'Proxy error' });
  }
};