require("dotenv").config(); // .env file theke environment variable load kore
const http = require("http");
const fs = require("fs");
const gemini = require("@google/genai");

const GEMINI_Key = process.env.GEMINI_API_KEY; // hardcode na kore .env theke key nicchi
const client = new gemini.GoogleGenAI({
    apiKey: GEMINI_Key// api key diye client create korlam, client k call dile gemini api call kora jabe
});


const server = http.createServer((req, res) =>{// server create korlam
    if (req.url === "/"){
        res.end(fs.readFileSync("index.html"));
        return;
    } else if (req.url === "/style.css") {
        res.writeHead(200, { "Content-Type": "text/css" });
        res.end(fs.readFileSync("style.css"));
        return;
    } else if (req.url === "/ai") {
        let body = "";
        req.on("data", chunk => body += chunk)
        req.on("end", async () => {
            const prompt = JSON.parse(body).prompt;
            console.log(prompt)
            const interaction = await client.interactions.create({
              model: "gemini-omni-1.1-flash",
              input: prompt,
            });
            console.log(interaction.output_text);
            res.end(JSON.stringify({ answer: interaction.output_text }));
        });
    }
});


server.listen(4000, () =>{
    console.log("server is running on port 4000")
})