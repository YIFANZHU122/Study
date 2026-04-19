from openai import OpenAI
import os
from dotenv import load_dotenv

load_dotenv('.env.local')  


client = OpenAI(
    api_key=os.getenv('DEEPSEEK_API_KEY'),
    base_url="https://api.deepseek.com/v1",
)

response = client.chat.completions.create(
    model = 'deepseek-reasoner',
    messages=[
        {'role': 'system','content':'你是一个足球邻域的专家，请尽量帮我回答与足球相关的问题。'},
        {'role': 'user','content':'c罗是哪个国家的足球远动员？'},
    ]
)

print('思考过程:')
print(response.choices[0].message.reasoning_content)

print('回答:')
print(response.choices[0].message.content)