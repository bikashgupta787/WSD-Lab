<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:template match="/">
<html>
<body>
<h1 style="text-align:center">Student Management System</h1>
	<!-- <xsl:apply-templates select = "Company/Employee" /> -->
<table border="2" align="center">
	<tr>
	<th>ID</th>
	<th>Name</th>
	<th>Age</th>
	<th>Class</th>
    <th>Sec</th>
	<th>Email</th>
	<th>Mobnum</th>
						>
	</tr>
<xsl:for-each select="School/Student">
<xsl:sort select ="Student-name"/>
<tr>
	<td>
	<xsl:value-of select="Student-id"/>
	</td>
	<td>
	<xsl:value-of select="Student-name"/>
	</td>
	<td>
	<xsl:value-of select="Student-age"/>
	</td>
    <xsl:choose>
    <xsl:when test="Student-class=10"><td bgcolor="green">
    <xsl:value-of select="Student-class"/>
    </td>
    </xsl:when>
    <xsl:otherwise>
    <td>
    <xsl:value-of select="Student-class"/>  
    </td>
    </xsl:otherwise>
    </xsl:choose>
    <td>
	<xsl:value-of select="Student-sec"/>
	</td>
	<td>
	<xsl:value-of select="Student-emailid"/>
	</td>
	<td>
    <xsl:value-of select="Student-phonenum"/>
	</td>
	</tr>
  </xsl:for-each>
 </table>


 <table border="2" align="center">
	<tr>
	<th>ID</th>
	<th>Name</th>
	<th>Age</th>
	<th>Class</th>
    <th>Sec</th>
	<th>Email</th>
	<th>Mobnum</th>
						>
	</tr>
<xsl:for-each select="School/Student">
<xsl:if test ="Student-age &gt; 10">
<tr>
	<td>
	<xsl:value-of select="Student-id"/>
	</td>
	<td>
	<xsl:value-of select="Student-name"/>
	</td>
	<td>
	<xsl:value-of select="Student-age"/>
	</td>
    <td>
    <xsl:value-of select="Student-class"/>
    </td>
	<td>
	<xsl:value-of select="Student-sec"/>
	</td>
	<td>
	<xsl:value-of select="Student-emailid"/>
	</td>
	<td>
    <xsl:value-of select="Student-phonenum"/>
	</td>
	</tr>
</xsl:if>
  </xsl:for-each>
 </table>
</body>
</html>
</xsl:template>
</xsl:stylesheet>