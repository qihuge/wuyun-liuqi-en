module.exports = {
  "priority": ["qie", "wang", "wenzheng", "wen"],
  "consensusCount": 2,
  "yinYangRule": {
    "阳": ["热", "实", "里", "数", "洪", "红"],
    "阴": ["寒", "虚", "表", "迟", "沉", "白"]
  },
  "conflictRule": {
    "hanReConflict": "followQie",
    "xuShiConflict": "followQieAndWang",
    "biaoLiConflict": "followQie"
  }
};