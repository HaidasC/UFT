﻿Browser("Test2020").Page("Test2020").WebCheckBox("ziel[]").Set "ON"
Browser("Test2020").Page("Test2020").WebButton("Ergebnis prüfen").Click

Call Frage1CheckBox1("true")

Browser("Test2020").CloseAllTabs

