# 结合 ReAct 的手段将 deepseek 打造成智能体
from dis import Instruction
import json # 用来处理 JSON 数据
from llm import client # 用于与 LLM 交互
from prompt import ReAct_PROMPT # 定义 ReAct 提示模板
from tool import tools, get_closing_price # 工具列表
import re # 用正则表达式匹配

# 定义发送消息的函数

def send_message(messages):
    """
    向 LLM 发送消息并获取响应
    :param message: 要发送的消息
    :return: LLM 生成的响应
    """
    response = client.chat.cmpletions.create(
        model ="deepseek-chat",
        messages=messages,
    )
    return response

if __name__ == '__main__': # 主函数入口
    # 设置助手的角色
    Instruction = "你是一个股票助手, 可以回答股票相关的问题"

    # 假设用户输入的消息
    query = "青岛啤酒和贵州茅台的收盘价哪个更高？"

    # 使用模板构建完整的提示词
    prompt = ReAct_PROMPT.fomat(
        instructions=Instruction,
        tool = tools,
        tool_names = "get_closing_price",
        input=query,
    )

    # print("prompt:", prompt)
    # 准备消息列表
    messages = [
        {"role":"system", "content":prompt},
    ]
    # 发送消息并获取 LLM 的响应
    response = send_message(messages)
    response_text = response.choices[0].message.content

    #print(response_text)
    final_answer_match = re.search(r"最终答案:\s*(.*)", response_text)
    if final_answer_match:
        final_answer = final_answer_match.group(1)
        print("最终答案:", final_answer)
        
    messages.append(response.choices[0].message)

    # 处理 LLM 响应, 提取行动和参数
    action_match = re.search(r"行动:\s*(.*)", response_text)
    action_input_match = re.search(r'行动输入:\s*({.*?})".*?"", response_text)
    if action_match:
        action = action_match.group(1)
        print("行动:", action)