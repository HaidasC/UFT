Browser("Test2020").Page("Test2020").WebCheckBox("ziel[]").Set "OFF" @@ hightlight id_;_Browser("Test2020").Page("Test2020").WebCheckBox("ziel[] 2")_;_script infofile_;_ZIP::ssf15.xml_;_
Browser("Test2020").Page("Test2020").WebCheckBox("ziel[]_2").Set "ON" @@ hightlight id_;_Browser("Test2020").Page("Test2020").WebCheckBox("ziel[] 2")_;_script infofile_;_ZIP::ssf15.xml_;_
Browser("Test2020").Page("Test2020").WebCheckBox("ziel[]_3").Set "OFF" @@ hightlight id_;_Browser("Test2020").Page("Test2020").WebCheckBox("ziel[] 2")_;_script infofile_;_ZIP::ssf15.xml_;_
Browser("Test2020").Page("Test2020").WebButton("Ergebnis prüfen").Click @@ hightlight id_;_Browser("Test2020").Page("Test2020").WebButton("Ergebnis prüfen")_;_script infofile_;_ZIP::ssf16.xml_;_

Call Frage1CheckBox1("false")
Call Frage1CheckBox2("true")
Call Frage1Checkbox3("false")


Browser("Test2020").CloseAllTabs
