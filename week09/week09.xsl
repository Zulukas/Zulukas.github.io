<?xml version="1.0" encoding="utf-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

	<xsl:output indent="yes"/>

	<xsl:template match="/bsa">
		<html>
			<head>
				<title>Week 09</title>
				<link rel="stylesheet" type="text/css" href="bsa.css"/>
			</head>
			<body>
				<div id="content">
					<div id="header">
						Boy Scout Information
					</div>
					<div id="maintext">
						<xsl:for-each select="council"> <!--Iterate through all councils-->
							<hr/>
							<h1><xsl:value-of select="@name"/></h1>
							<hr/>
							<xsl:for-each select="troop"> <!--Iterate through all troops for this council-->
								<h2> <!--Print name of number of troop-->
									<xsl:value-of select="@name"/>
									<xsl:text> #</xsl:text>
									<xsl:value-of select="@number"/>
								</h2>

								<xsl:for-each select="scout">
									<h3> <!--Print the full name of each boyscout in this troop-->
										<xsl:value-of select="firstname"/>
										<xsl:text> </xsl:text> <!--Add a space for prettier formatting-->
										<xsl:value-of select="lastname"/>
									</h3>
									<h4> <!--Print the information of each boyscout in this troop-->
										<xsl:value-of select="phone"/><br/>
										<xsl:value-of select="address/street"/><br/>
										<xsl:text> </xsl:text> <!--Add a space for prettier formatting-->
										<xsl:value-of select="address/city"/>
										<xsl:text>, </xsl:text> <!--Add a space for prettier formatting-->
										<xsl:value-of select="address/state"/>
									</h4>
									<h5>Rank(s):</h5> <!--Display this scout's rank-->
									<xsl:choose>
										<xsl:when test="rank">									
											<ul>
												<xsl:for-each select="rank">
													<li>
														<xsl:value-of select="text()"/>
														<xsl:text>: </xsl:text>
														<xsl:value-of select="@date-earned"/>
													</li>
												</xsl:for-each>
											</ul>
										</xsl:when>
										<xsl:otherwise>
											<ul>
												<li>No rank awarded</li>
											</ul>
										</xsl:otherwise>
									</xsl:choose>
									
									<h5>Merit Badge(s):</h5> <!--Display the badges of this scout-->
									<xsl:choose>								
										<xsl:when test="meritbadge">									
											<ul>
												<xsl:for-each select="meritbadge">
													<li>
														<xsl:value-of select="text()"/>
														<xsl:text>: </xsl:text>
														<xsl:value-of select="@date-earned"/>
													</li>
												</xsl:for-each>
											</ul>
										</xsl:when>
										<xsl:otherwise>
											<ul><li>No merit badges awarded</li></ul>
										</xsl:otherwise>
									</xsl:choose>
								</xsl:for-each>						
							</xsl:for-each>
						</xsl:for-each>
					</div>
				</div>
			</body>
		</html>
	</xsl:template>
</xsl:stylesheet>

<!--

<table border="1">
					<tr>
						<td>Name</td>
						<td>Size</td>
						<td>Type></td>
					</tr>
					<xsl:for-each select="file">
						<tr>
							<td><xsl:value-of select="@name"/></td>
							<td><xsl:value-of select="@size"/></td>
							<td><xsl:value-of select="@type"/></td>
						</tr>
					</xsl:for-each>
				</table>

 -->