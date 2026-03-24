import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
from sklearn.linear_model import LinearRegression

# dataset
data = {
    "Hours_Studied": [1,2,3,4,5,6,7,8,9],
    "Scores": [35,40,50,55,65,70,75,85,95]
}

df = pd.DataFrame(data)
print(df)

# input-output
X = df[["Hours_Studied"]]
y = df["Scores"]

# train model
model = LinearRegression()
model.fit(X, y)

# prediction
# hours = np.array([[5]])
# predicted_score = model.predict(hours)
# print("Predicted Score:", model.predict(hours)[0])

# 🔥 USER INPUT
hours = float(input("Enter hours studied: "))
hours_array = np.array([[hours]])

prediction = model.predict(hours_array)

print(f"Predicted Score: {prediction[0]:.2f}")

# graph
plt.scatter(X, y)
plt.plot(X, model.predict(X))

plt.xlabel("Hours Studied")
plt.ylabel("Scores")
plt.title("Student Score Prediction")

plt.show()