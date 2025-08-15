import express from "express";
import createApp from "./app";

const app = createApp();
const port = process.env.PORT || 3333;

app.listen(port, () => {
    console.log(`🚀 Server running at port http://localhost:${port}`);
});