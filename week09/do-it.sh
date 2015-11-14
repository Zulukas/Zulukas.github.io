#!/bin/bash

echo "Making tar file for week09 for CS213"
rm -f kevin_andres_week_09.tar
xsltproc week09.xsl bsa.xml > bsa.html
tar -cf kevin_andres_week_09.tar do-it.sh week09.xsl bsa.xml bsa.html bsa.css
echo "Done!"