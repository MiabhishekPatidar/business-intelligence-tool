from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from dotenv import load_dotenv
import os
import openai

load_dotenv()

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # frontend URL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

client = openai.OpenAI(api_key=os.getenv("OPENAI_API_KEY"))  # ✅ Correct key

class InsightRequest(BaseModel):
    title: str
    summary: str
    value: str

@app.post("/generate-insight")
async def generate_insight(req: InsightRequest):
    prompt = f"""
    Analyze this business metric and generate a short insight summary:

    Title: {req.title}
    Value: {req.value}
    Summary: {req.summary}

    Write a short, polished business narrative for the CEO.
    """

    response = client.chat.completions.create(
        model="gpt-3.5-turbo",
        messages=[
            {"role": "system", "content": "You are a business analyst assistant."},
            {"role": "user", "content": prompt}
        ],
        temperature=0.7,
        max_tokens=200
    )

    return {"insight": response.choices[0].message.content}
