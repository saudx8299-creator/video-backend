const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

const cors = require("cors");
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Runway Server is running!");
});

app.post("/generate-video", async (req, res) => {
  const { prompt } = req.body;

  try {
    const response = await fetch(
      "https://api.runwayml.com/v1/generate/video",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer key_93f02b6bd2565ab401dc3b8739eced44a4ff954ba05b7eff1f8bb6ee83efe9dba28203e7e96a92c1ad03b9637e99cbca26f7703b9af8f3c88eefb0c5848a031d"
        },
        body: JSON.stringify({
          model: "gen3-alpha",
          prompt: prompt,
          size: "1280x720",
          duration: 5
        })
      }
    );

    const data = await response.json();

    res.json({
      success: true,
      video: data.result_url
    });

  } catch (error) {
    res.json({
      success: false,
      error: "خطأ أثناء توليد الفيديو"
    });
  }
});

app.listen(port, () => {
  console.log(`Runway server running on port ${port}`);
});
