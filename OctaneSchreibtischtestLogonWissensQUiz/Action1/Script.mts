Browser("Test2020").Page("Test2020").WebEdit("user").Set DataTable("user", dtGlobalSheet) @@ hightlight id_;_Browser("Test2020").Page("Test2020").WebEdit("user")_;_script infofile_;_ZIP::ssf4.xml_;_
Browser("Test2020").Page("Test2020").WebEdit("passwort").SetSecure "5e9caf4c71c149f05d251dbc2e3933f405a0caa66b9e" @@ hightlight id_;_Browser("Test2020").Page("Test2020").WebEdit("passwort")_;_script infofile_;_ZIP::ssf5.xml_;_
Browser("Test2020").Page("Test2020").WebButton("login").Click
If Browser("Test2020").Page("Test2020").WebElement("Kleines Test2020 Wissensquiz").Exist(5) Then
	Reporter.ReportEvent micPass,"Login erfolgreich!","Login für den User " & DataTable("user",dtGlobalSheet) & " war erfolgreich"
Else
	Reporter.ReportEvent micFail,"Login nicht erfolgreich!","Login für den User " & DataTable("user",dtGlobalSheet) & " war nicht erfolgreich"
End If
Browser("Test2020").CloseAllTabs
