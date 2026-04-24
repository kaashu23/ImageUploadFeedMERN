const express = require("express");
const multer = require("multer");
const cors = require("cors");

const { uploadFile } = require("./services/storage.service");
const postModel = require("./models/post.model");

const app = express();

app.use(cors({
  origin: "https://imageuploadermern.netlify.app",
  methods: ["GET", "POST"],
}));
app.use(express.json());

const upload = multer({ storage: multer.memoryStorage() });


app.post("/create-post", upload.single("image"), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: "No image uploaded" });
    }

    const result = await uploadFile(req.file.buffer);

    const post = await postModel.create({
      image: result.url,
      caption: req.body.caption,
    });

    res.status(201).json({
      message: "Post created successfully",
      post,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});


app.get("/posts", async (req, res) => {
  try {
    const posts = await postModel.find().sort({ _id: -1 });

    res.status(200).json({
      message: "Posts fetched successfully",
      posts,
    });
  } catch (error) {
    res.status(500).json({ message: "Error fetching posts" });
  }
});

module.exports = app;