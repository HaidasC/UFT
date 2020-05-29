
Browser("Test2020").Page("Test2020").WebEdit("user").Set DataTable("user", dtGlobalSheet) @@ hightlight id_;_Browser("Test2020").Page("Test2020").WebEdit("user")_;_script infofile_;_ZIP::ssf4.xml_;_
Browser("Test2020").Page("Test2020").WebEdit("passwort").SetSecure "5e9caf4c71c149f05d251dbc2e3933f405a0caa66aaa" @@ hightlight id_;_Browser("Test2020").Page("Test2020").WebEdit("passwort")_;_script infofile_;_ZIP::ssf5.xml_;_
Browser("Test2020").Page("Test2020").WebButton("login").Click
Browser("Test2020").Page("Test2020").WebElement("Das eingegebene Passwort").check CheckPoint("Das eingegebene Passwort ist nicht korrekt.") @@ hightlight id_;_Browser("Test2020").Page("Test2020").WebElement("Das eingegebene Passwort")_;_script infofile_;_ZIP::ssf9.xml_;_
x = Browser("Test2020").Page("Test2020").WebElement("Das eingegebene Passwort").GetROProperty("style/color")
If x = "rgb(255, 0, 0)" Then
	Reporter.ReportEvent micDone,"Login", "Der Schriftzug ist rot."
Else 
	Reporter.ReportEvent micFail,"Login", "Der Schriftzug ist nicht rot."
End If
Browser("Test2020").CloseAllTabs
