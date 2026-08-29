const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// السماح للواجهة بالاتصال بالخادم
const cors = require('cors');
app.use(cors());
app.use(express.json());

// مسار تجريبي للتأكد أن الخادم شغال
app.get('/', (req, res) => {
  res.send('Server is running successfully!');
});
app.post('/generate-video', (req, res) => {
  const { prompt, aspectRatio, style } = req.body;

  // رد تجريبي فقط — لاحقًا نضيف توليد الفيديو الحقيقي
  res.json({
    success: true,
    downloadUrl: "https://example.com/video.mp4",
    prompt,
    aspectRatio,
    style
  });
});

// تشغيل الخادم
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
