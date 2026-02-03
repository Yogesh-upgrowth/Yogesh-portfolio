#!/bin/bash
echo '<?xml version="1.0" encoding="UTF-8"?>' > sitemap.xml
echo '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">' >> sitemap.xml

find . -name "*.html" ! -path "./node_modules/*" | while read page; do
  path=$(echo $page | sed 's|^\./||')
  echo "<url><loc>https://pmyogesh.com/${path}</loc></url>" >> sitemap.xml
done

echo '</urlset>' >> sitemap.xml
