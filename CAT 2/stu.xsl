<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:template match="/">
<html>
<body>
<h1 style="text-align:center">Student Details</h1>
	<!-- <xsl:apply-templates select = "Company/Employee" /> -->
<table border="2" align="center">
	<tr>
	<th>Name</th>
	<th>University</th>
	<th>Email</th>
	<th>Mobnum</th>					>
	</tr>
<xsl:for-each select="CHRIST/Computer-Science">
<tr>
	<td>
	<xsl:value-of select="Stu-name"/>
	</td>
	<td>
	<xsl:value-of select="Stu-university"/>
	</td>
	<td>
    <xsl:value-of select="Stu-emailid"/>
	</td>
	<td>
    <xsl:value-of select="Stu-phonenum"/>
	</td>
</tr>
</xsl:for-each>
 </table>
</body>
</html>
</xsl:template>
</xsl:stylesheet>