Browser("Test2020").Page("Test2020").WebCheckBox("ziel[]").Set "OFF"
Browser("Test2020").Page("Test2020").WebButton("Ergebnis prüfen").Click

Call Frage1CheckBox1("false")

Browser("Test2020").CloseAllTabs

