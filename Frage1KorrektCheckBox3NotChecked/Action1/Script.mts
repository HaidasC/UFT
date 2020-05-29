Browser("Test2020").Page("Test2020").WebCheckBox("ziel[]_3").Set "OFF"
Browser("Test2020").Page("Test2020").WebButton("Ergebnis prüfen").Click

Call Frage1CheckBox3("false")

Browser("Test2020").CloseAllTabs

