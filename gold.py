import requests

url = "https://goldbullioneg.com"

headers = {
    "User-Agent": "Mozilla/5.0"
}

response = requests.get(url, headers=headers)

print("Status Code:", response.status_code)

with open("page.html", "w", encoding="utf-8") as f:
    f.write(response.text)

print("تم حفظ الصفحة في page.html")
