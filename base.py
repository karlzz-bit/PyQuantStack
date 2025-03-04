# 计算移动平均线
data['MA20'] = data['Adj Close'].rolling(window=20).mean()
data['MA50'] = data['Adj Close'].rolling(window=50).mean()

# 绘制价格及均线
plt.figure(figsize=(12,6))
plt.plot(data['Adj Close'], label='Adjusted Close')
plt.plot(data['MA20'], label='MA20')
plt.plot(data['MA50'], label='MA50')
plt.title('AAPL Price with Moving Averages')
plt.legend()
plt.show()
