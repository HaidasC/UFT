Browser("Test2020").Page("Test2020").WebCheckBox("ziel[]_2").Set "OFF"
Browser("Test2020").Page("Test2020").WebButton("Ergebnis prüfen").Click

Call Frage1CheckBox2("false")

Browser("Test2020").CloseAllTabs

