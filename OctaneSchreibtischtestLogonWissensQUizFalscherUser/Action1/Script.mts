
Browser("Test2020").Page("Test2020").WebEdit("user").Set DataTable("user", dtGlobalSheet) @@ hightlight id_;_Browser("Test2020").Page("Test2020").WebEdit("user")_;_script infofile_;_ZIP::ssf4.xml_;_
Browser("Test2020").Page("Test2020").WebEdit("passwort").SetSecure "5e9caf4c71c149f05d251dbc2e3933f405a0caa66b9e" @@ hightlight id_;_Browser("Test2020").Page("Test2020").WebEdit("passwort")_;_script infofile_;_ZIP::ssf5.xml_;_
Browser("Test2020").Page("Test2020").WebButton("login").Click
Browser("Test2020").Page("Test2020").WebElement("Der eingegebene User ist").Check CheckPoint("Der eingegebene User ist dem System nicht bekannt.") @@ hightlight id_;_Browser("Test2020").Page("Test2020").WebElement("Der eingegebene User ist")_;_script infofile_;_ZIP::ssf8.xml_;_
Browser("Test2020").CloseAllTabs
