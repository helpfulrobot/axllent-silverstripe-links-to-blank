# silverstripe-links-to-blank

## Append target="_blank" using JavaScript for SilverStripe 3
Extension to add JavaScript to all pages to add target="_blank" to all **outgoing** links, as well as all links to PDF, DOC, and Excel files

## Requirements
* SilverStripe 3+

## Usage
To link to the JavaScript resource add the following to your in your template(s) before </body>
<pre>$LinksToBlank</pre>
or for inline (compressed) JavaScript add the following to your in your template(s) before </body>
<pre>$LinksToBlankInline</pre>