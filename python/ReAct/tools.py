# 工具列表, 第三方函数说明书
tools = [
    {
        "name":"get_closing_price",
        "description":"获取股票的收盘价",
        "parameters":{
            "type":"object",
            "properties":{
                "name":{
                    "type":"string",
                    "description":"股票名称,例如:青岛啤酒",
                }
            },
            "required":["name"],
        }
    }
]



def get_closing_price(name:str):
    # 朝第三方api请求
    """
    获取股票的收盘价
    :param name: 股票名称
    :return: 收盘价
    """
    pass