# Canadian Council on Geomatics

This website is a static website utilizing HTML, JavaScript and CSS.  It was built using the VueJS framework and vue-webpack template.

# Dependencies

NodeJS and NPM

## Install

    git clone https://github.com/ccog-cocg/ccog-cocg.gc.ca/ ccog
    cd ccog
    npm install
    npm run build
    
The last command will create a dist/ folder with all the HTML, CSS and JS files bundled up.

To deploy the site, copy the files from the dist/ folder into your web root.  E.g.: /var/www/ccog
 
In order to support friendly URL's, the site makes use of HTML5 history mode as described here: https://router.vuejs.org/en/essentials/history-mode.html

Following are configuration parameters for Apache and Nginx to support this:

## Apache

		<IfModule mod_rewrite.c>
			RewriteEngine On
			RewriteBase /
			RewriteRule ^ccog\.html$ - [L]
			RewriteCond %{REQUEST_FILENAME} !-f
			RewriteCond %{REQUEST_FILENAME} !-d
			RewriteRule . /ccog.html [L]
		</IfModule>

## nginx

		location / {
			try_files $uri $uri/ /ccog.html;
		}
