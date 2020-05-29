Browser("Test2020").Page("Test2020").WebCheckBox("ziel[]_2").Set "ON"
Browser("Test2020").Page("Test2020").WebButton("Ergebnis prüfen").Click

Call Frage1CheckBox2("true")

Browser("Test2020").CloseAllTabs

