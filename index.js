const express = require("express");
const axios = require("axios");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();

const app = express();
const PORT = process.env.PORT

app.use(cors());
app.use(express.json());

app.get("/me", async (req, res) => {
  const user = {
    email: process.env.USER_EMAIL,
    name: process.env.USER_NAME,
    stack: process.env.USER_STACK
  };

  try {
    const response = await axios.get("https://catfact.ninja/fact", { timeout: 5000 });

    res.status(200).json({
      status: "success",
      user,
      timestamp: new Date().toISOString(),
      fact: response.data.fact,
    });
  } catch (error) {
    console.error("Error fetching cat fact:", error.message);

    res.status(200).json({
      status: "success",
      user,
      timestamp: new Date().toISOString(),
      fact: "Cats are fascinating creatures—curious, graceful, and full of mystery!",
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});