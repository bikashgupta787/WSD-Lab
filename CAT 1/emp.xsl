<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
	<xsl:template match="/">
		<html>
			<body>
				<h1 style="text-align:center">Employee Management System</h1>
				<xsl:apply-templates select = "Company/Employee" /> 
				<table border="2" align="center">
					<tr>
						<th>ID</th>
		                <th>Name</th>
		                <th>Age</th>
		                <th>Salary</th>
		                <th>Email</th>
		                <th>Mobnum</th>
		                <th>Designation</th>
		                <th>Promotion</th>
		            </tr>
		            <xsl:for-each select="Company/Employee">
		                	<tr>
		                		<td>
		                			<xsl:value-of select="Emp-id"/>
		                		</td>
		                		<td>
		                			<xsl:value-of select="Emp-name"/>
		                		</td>
		                        <td>
		                            <xsl:value-of select="Emp-age"/>
		                        </td>
		                        <td>
		                            <xsl:value-of select="Emp-salary"/>
		                        </td>
		                        <td>
		                            <xsl:value-of select="Emp-emailid"/>
		                        </td>
		                        <td>
		                            <xsl:value-of select="Emp-Phonenum"/>
		                        </td>
		                        <td>
		                            <xsl:value-of select="Emp-designation"/>
		                        </td>
		                        <td>
		                        	<xsl:choose>
		                        		<xsl:when test="Emp-age &gt; 50">Associate Project manager</xsl:when>
									    <xsl:when test="Emp-age &gt;40 and Emp-age &lt;49">Team Leader</xsl:when>
									    <xsl:otherwise>Developer</xsl:otherwise>
							        </xsl:choose>
						        </td>
					    </tr>
					    </xsl:for-each>
		        </table>
		    </body>
		</html>
</xsl:template>
</xsl:stylesheet>