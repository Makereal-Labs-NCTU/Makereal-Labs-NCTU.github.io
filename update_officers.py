import os
import json
import requests   
from collections import defaultdict
from dotenv import load_dotenv

NOTION_VERSION = "2022-06-28"

load_dotenv()
notion_key = os.getenv("NOTION_API_KEY")
database_id = os.getenv("NOTION_DATABASE_ID")

position_map = {
    "社長": "chairperson",
    "副社長": "vice_president",
    "教學": "teaching_leader",
    "公關總長": "PR",
    "公關": "PR",
    "美宣": "AD",
    "資材": "IM",
    "文書": "doc",
    "總務": "GA",
    "網頁": "Web",
    "雲端": "Cloud",
    "網管": "MIS",
}

if not notion_key or not database_id:
    print("error: NOTION_API_KEY or NOTION_DATABASE_ID not set")
    exit(1)
    

url = f"https://api.notion.com/v1/databases/{database_id}/query"
headers = {
    "Authorization": f"Bearer {notion_key}",
    "Notion-Version": NOTION_VERSION,
    "Content-Type": "application/json"
}

try:
    response = requests.post(url, headers=headers)
    if response.status_code != 200:
        print(f"error: {response.status_code} {response.text}")
        exit(1)

    data = response.json()
    results = []

    for page in data.get("results", []):
        properties = page.get("properties", {})

        name_prop = properties.get("姓名", {}).get("title", [])
        name = "".join([t["plain_text"] for t in name_prop]) if name_prop else ""

        position_prop = properties.get("職位", {}).get("multi_select", [])
        positions = [p["name"] for p in position_prop] if position_prop else []

        mailto = ""
        email_prop = properties.get("Email")
        if email_prop and email_prop.get("type") == "email":
            mailto = email_prop.get("email", "")


        results.append({
            "name": name,
            "position": positions,
            "email": mailto
        })

    officer_list = defaultdict(list)
    for result in results:
        name = result["name"]
        positions = result["position"]
        email = result["email"]
        for position in positions:
            key = position_map.get(position, position)
            if key:
                officer_list[key].append({"name": name, "email": email})

    output_file = "public/club_officers.json"
    with open(output_file, "w", encoding="utf-8") as f:
        json.dump(officer_list, f, ensure_ascii=False, indent=4)

    print(f"Officers data successfully written to {output_file}")

except Exception as e:
    print(f"error: {e}")
    exit(1)
import os
import requests
import json   
from collections import defaultdict

NOTION_VERSION = "2022-06-28"

notion_key = os.getenv("NOTION_API_KEY")
database_id = os.getenv("NOTION_DATABASE_ID")

position_map = {
    "社長": "chairperson",
    "副社長": "vice_president",
    "教學": "teaching_leader",
    "公關總長": "PR",
    "公關": "PR",
    "美宣": "AD",
    "資材": "IM",
    "文書": "doc",
    "總務": "GA",
    "網頁": "Web",
    "雲端": "Cloud",
    "網管": "MIS",
}

if not notion_key or not database_id:
    print("error: NOTION_API_KEY or NOTION_DATABASE_ID not set")
    exit(1)
    

url = f"https://api.notion.com/v1/databases/{database_id}/query"
headers = {
    "Authorization": f"Bearer {notion_key}",
    "Notion-Version": NOTION_VERSION,
    "Content-Type": "application/json"
}

try:
    response = requests.post(url, headers=headers)
    if response.status_code != 200:
        print(f"error: {response.status_code} {response.text}")
        exit(1)

    data = response.json()
    results = []

    for page in data.get("results", []):
        properties = page.get("properties", {})

        name_prop = properties.get("姓名", {}).get("title", [])
        name = "".join([t["plain_text"] for t in name_prop]) if name_prop else ""

        position_prop = properties.get("職位", {}).get("multi_select", [])
        positions = [p["name"] for p in position_prop] if position_prop else []

        mailto = ""
        email_prop = properties.get("Email")
        if email_prop and email_prop.get("type") == "email":
            mailto = email_prop.get("email", "")


        results.append({
            "name": name,
            "position": positions,
            "email": mailto
        })

    officer_list = defaultdict(list)
    for result in results:
        name = result["name"]
        positions = result["position"]
        email = result["email"]
        for position in positions:
            key = position_map.get(position, position)
            if key:
                officer_list[key].append({"name": name, "email": email})

    output_file = "public/club_officers.json"
    with open(output_file, "w", encoding="utf-8") as f:
        json.dump(officer_list, f, ensure_ascii=False, indent=4)

    print(f"Officers data successfully written to {output_file}")

except Exception as e:
    print(f"error: {e}")
    exit(1)
