const tagData = {
    // Structure
    "doctype": {
        title: "<!DOCTYPE html> Document type",
        history: "Declares the HTML document type and version.",
        code: "<!DOCTYPE html>\n<html>\n<head><title>Doc</title></head>\n<body>Content</body>\n</html>",
        quiz: "Which declaration sets the HTML document type?",
        answer: "doctype"
    },
    "html": { title: "<html> Root", history: "Root element wrapping the page.", code: "<html>...</html>", quiz: "Which is the root element of HTML?", answer: "html" },
    "head": { title: "<head> Metadata", history: "Holds metadata, links, and scripts.", code: "<head>\n  <meta charset='UTF-8'>\n  <title>Title</title>\n</head>", quiz: "Which element contains metadata?", answer: "head" },
    "title": { title: "<title> Title", history: "Defines the document title.", code: "<head>\n  <title>My Page</title>\n</head>", quiz: "Which tag sets the page title?", answer: "title" },
    "meta": { title: "<meta> Metadata", history: "Defines document metadata.", code: "<meta name='viewport' content='width=device-width, initial-scale=1.0'>", quiz: "Which tag sets metadata like viewport?", answer: "meta" },
    "link": { title: "<link> External resource", history: "Links external resources like CSS.", code: "<link rel='stylesheet' href='styles.css'>", quiz: "Which tag links external styles?", answer: "link" },
    "style": { title: "<style> CSS", history: "Embeds CSS styles.", code: "<style>body{font-family:Segoe UI}</style>", quiz: "Which tag embeds CSS?", answer: "style" },
    "script": { title: "<script> JS", history: "Embeds client-side JavaScript.", code: "<script>console.log('Hello')</script>", quiz: "Which tag embeds JavaScript?", answer: "script" },
    "body": { title: "<body> Document body", history: "Contains the visible page content.", code: "<body>Visible content</body>", quiz: "Which tag holds page content?", answer: "body" },

    // Text
    "h1": { title: "<h1>–<h6> Headings", history: "Section headings, h1 strongest.", code: "<h1>Main</h1>\n<h2>Sub</h2>", quiz: "Which heading level is strongest?", answer: "h1" },
    "p": { title: "<p> Paragraph", history: "Paragraph of text.", code: "<p>This is a paragraph.</p>", quiz: "Which tag wraps a paragraph?", answer: "p" },
    "br": { title: "<br> Line break", history: "Inserts a line break.", code: "First line<br>Second line", quiz: "Which tag inserts a line break?", answer: "br" },
    "hr": { title: "<hr> Horizontal rule", history: "A thematic break.", code: "<hr>", quiz: "Which tag adds a thematic break?", answer: "hr" },
    "a": { title: "<a> Anchor", history: "Creates hyperlinks.", code: "<a href='https://example.com' target='_blank'>Visit</a>", quiz: "Which tag creates a hyperlink?", answer: "a" },
    "abbr": { title: "<abbr> Abbreviation", history: "Defines abbreviation with tooltip.", code: "<abbr title='HyperText Markup Language'>HTML</abbr>", quiz: "Which tag shows a tooltip for abbreviation?", answer: "abbr" },
    "b": { title: "<b> Bold", history: "Stylistically bold text.", code: "<b>Bold</b>", quiz: "Which tag makes text bold without importance?", answer: "b" },
    "strong": { title: "<strong> Important", history: "Strong importance.", code: "<strong>Important</strong>", quiz: "Which tag indicates strong importance?", answer: "strong" },
    "i": { title: "<i> Italic", history: "Stylistically offset text.", code: "<i>Italic</i>", quiz: "Which tag italicizes text?", answer: "i" },
    "em": { title: "<em> Emphasis", history: "Stressed emphasis.", code: "<em>Emphasis</em>", quiz: "Which tag indicates emphasis?", answer: "em" },
    "mark": { title: "<mark> Highlight", history: "Highlighted text.", code: "<mark>Important</mark>", quiz: "Which tag highlights text?", answer: "mark" },
    "small": { title: "<small> Small", history: "Small print.", code: "<small>Note</small>", quiz: "Which tag reduces font size?", answer: "small" },
    "sub": { title: "<sub> Subscript", history: "Subscript text.", code: "H<sub>2</sub>O", quiz: "Which tag shows subscript?", answer: "sub" },
    "sup": { title: "<sup> Superscript", history: "Superscript text.", code: "E = mc<sup>2</sup>", quiz: "Which tag shows superscript?", answer: "sup" },
    "code": { title: "<code> Code", history: "Inline code.", code: "<code>console.log(x)</code>", quiz: "Which tag shows code inline?", answer: "code" },
    "pre": { title: "<pre> Preformatted", history: "Preserves whitespace.", code: "<pre>line 1\n  line 2</pre>", quiz: "Which tag preserves whitespace?", answer: "pre" },
    "kbd": { title: "<kbd> Keyboard", history: "Keyboard input.", code: "<kbd>Ctrl</kbd> + <kbd>C</kbd>", quiz: "Which tag marks keyboard input?", answer: "kbd" },
    "samp": { title: "<samp> Sample", history: "Sample output.", code: "<samp>Output: OK</samp>", quiz: "Which tag marks sample output?", answer: "samp" },
    "var": { title: "<var> Variable", history: "Variable name.", code: "<var>x</var>", quiz: "Which tag marks a variable?", answer: "var" },
    "cite": { title: "<cite> Citation", history: "Title of a work.", code: "<cite>Thinking, Fast and Slow</cite>", quiz: "Which tag cites a work title?", answer: "cite" },
    "q": { title: "<q> Quote", history: "Short inline quote.", code: "<q>Be yourself.</q>", quiz: "Which tag shows an inline quote?", answer: "q" },
    "blockquote": { title: "<blockquote> Block quote", history: "Extended quotation.", code: "<blockquote>Long quote</blockquote>", quiz: "Which tag shows a block quote?", answer: "blockquote" },
    "span": { title: "<span> Inline", history: "Generic inline container.", code: "<span class='badge'>New</span>", quiz: "Which tag is a generic inline?", answer: "span" },
    "del": { title: "<del> Deleted", history: "Deleted text.", code: "<del>Old</del>", quiz: "Which tag marks deleted text?", answer: "del" },
    "ins": { title: "<ins> Inserted", history: "Inserted text.", code: "<ins>New</ins>", quiz: "Which tag marks inserted text?", answer: "ins" },
    "u": { title: "<u> Underline", history: "Underline without semantics.", code: "<u>Decorative</u>", quiz: "Which tag underlines text?", answer: "u" },
    "s": { title: "<s> Inaccurate", history: "No longer accurate.", code: "<s>Old price</s>", quiz: "Which tag marks inaccurate text?", answer: "s" },

    // Semantic
    "header": { title: "<header>", history: "Introductory section.", code: "<header>Hero</header>", quiz: "Which tag marks header section?", answer: "header" },
    "nav": { title: "<nav>", history: "Navigation links.", code: "<nav><a href='#'>Home</a></nav>", quiz: "Which tag holds navigation?", answer: "nav" },
    "main": { title: "<main>", history: "Primary content.", code: "<main>Content</main>", quiz: "Which tag marks primary content?", answer: "main" },
    "section": { title: "<section>", history: "Standalone section.", code: "<section><h2>Title</h2></section>", quiz: "Which tag marks a section?", answer: "section" },
    "article": { title: "<article>", history: "Independent content.", code: "<article><h2>Post</h2></article>", quiz: "Which tag marks an article?", answer: "article" },
    "aside": { title: "<aside>", history: "Complementary content.", code: "<aside>Sidebar</aside>", quiz: "Which tag marks sidebar?", answer: "aside" },
    "footer": { title: "<footer>", history: "Footer content.", code: "<footer>© 2025</footer>", quiz: "Which tag marks footer?", answer: "footer" },
    "address": { title: "<address>", history: "Contact information.", code: "<address>Street, City</address>", quiz: "Which tag holds contact info?", answer: "address" },
    "time": { title: "<time>", history: "Date/time.", code: "<time datetime='2025-12-05'>Dec 5, 2025</time>", quiz: "Which tag represents time?", answer: "time" },

    // Media
    "img": {
        title: "<img>",
        history: "Embeds images.",
        code: "<img src='assets/tag-web-logo.png' alt='Tag-Web'>",
        quiz: "Which tag shows an image?",
        answer: "img" },
    "audio": { title: "<audio>", history: "Embeds audio.", code: "<audio controls><source src='assets/Believer.mp3' type='audio/mpeg'>Your browser does not support audio.</audio>", quiz: "Which tag embeds audio?", answer: "audio" },
    "video": { title: "<video>", history: "Embeds video.", code: "<video controls><source src='movie.mp4' type='video/mp4'>Your browser does not support video.</video>", quiz: "Which tag embeds video?", answer: "video" },
    "source": { title: "<source>", history: "Media source.", code: "<video controls>\n  <source src='movie.mp4' type='video/mp4'>\n  <source src='movie.ogg' type='video/ogg'>\n</video>", quiz: "Which tag defines media source?", answer: "source" },
    "track": { title: "<track>", history: "Text tracks for media.", code: "<video controls>\n  <source src='movie.mp4' type='video/mp4'>\n  <track src='subtitles_en.vtt' kind='subtitles' srclang='en' label='English'>\n</video>", quiz: "Which tag adds subtitles?", answer: "track" },
    "map": { title: "<map>", history: "Image map.", code: "<img src='img.png' usemap='#m1'>\n<map name='m1'><area shape='rect' coords='0,0,50,50' href='#'></map>", quiz: "Which tag creates image map?", answer: "map" },
    "area": { title: "<area>", history: "Clickable area.", code: "<map name='m1'><area shape='circle' coords='75,75,25' href='#'></map>", quiz: "Which tag defines clickable area?", answer: "area" },
    "figure": { title: "<figure>", history: "Self-contained content.", code: "<figure><img src='pic.jpg'><figcaption>Caption</figcaption></figure>", quiz: "Which tag wraps figure + caption?", answer: "figure" },
    "figcaption": { title: "<figcaption>", history: "Figure caption.", code: "<figcaption>Caption</figcaption>", quiz: "Which tag captions a figure?", answer: "figcaption" },
    "canvas": { title: "<canvas>", history: "Graphics drawing.", code: "<canvas id='c' width='200' height='100'></canvas>\n<script>const ctx=c.getContext('2d');ctx.fillRect(10,10,50,30);</script>", quiz: "Which tag provides a drawing surface?", answer: "canvas" },
    "svg": { title: "<svg>", history: "Vector graphics.", code: "<svg width='120' height='60'><circle cx='30' cy='30' r='20' fill='tomato'/></svg>", quiz: "Which tag defines vector graphics?", answer: "svg" },
    "iframe": { title: "<iframe>", history: "Embeds HTML page.", code: "<iframe src='https://example.com' title='Example' width='300' height='150'></iframe>", quiz: "Which tag embeds another page?", answer: "iframe" },
    "embed": { title: "<embed>", history: "Embeds external content.", code: "<embed src='file.pdf' width='300' height='200'>", quiz: "Which tag embeds external content?", answer: "embed" },
    "object": { title: "<object>", history: "Embeds objects.", code: "<object data='file.pdf' type='application/pdf' width='300' height='200'></object>", quiz: "Which tag embeds objects?", answer: "object" },
    "param": { title: "<param>", history: "Parameters for object.", code: "<object data='movie.swf'><param name='autoplay' value='true'></object>", quiz: "Which tag sets parameters for object?", answer: "param" },

    // Lists
    "ul": { title: "<ul>", history: "Unordered list.", code: "<ul><li>Item 1</li><li>Item 2</li></ul>", quiz: "Which tag defines bullet list?", answer: "ul" },
    "ol": { title: "<ol>", history: "Ordered list.", code: "<ol><li>Step 1</li><li>Step 2</li></ol>", quiz: "Which tag defines numbered list?", answer: "ol" },
    "li": { title: "<li>", history: "List item.", code: "<ul><li>Item</li></ul>", quiz: "Which tag defines a list item?", answer: "li" },
    "dl": { title: "<dl>", history: "Description list.", code: "<dl><dt>HTML</dt><dd>Language</dd></dl>", quiz: "Which tag defines description list?", answer: "dl" },
    "dt": { title: "<dt>", history: "Term.", code: "<dt>Term</dt>", quiz: "Which tag defines term?", answer: "dt" },
    "dd": { title: "<dd>", history: "Definition.", code: "<dd>Definition</dd>", quiz: "Which tag defines description?", answer: "dd" },

    // Forms
    "form": { title: "<form>", history: "Form container.", code: "<form><input type='text'><button>Submit</button></form>", quiz: "Which tag wraps form fields?", answer: "form" },
    "input": { title: "<input>", history: "Input field.", code: "<input type='text' placeholder='Name'>", quiz: "Which tag creates an input?", answer: "input" },
    "textarea": { title: "<textarea>", history: "Multiline input.", code: "<textarea rows='4' cols='40'>Text</textarea>", quiz: "Which tag creates multiline input?", answer: "textarea" },
    "button": { title: "<button>", history: "Clickable button.", code: "<button type='button'>Click</button>", quiz: "Which tag creates a button?", answer: "button" },
    "select": { title: "<select>", history: "Dropdown.", code: "<select><option>A</option><option>B</option></select>", quiz: "Which tag creates dropdown?", answer: "select" },
    "optgroup": { title: "<optgroup>", history: "Group options.", code: "<select><optgroup label='Fruits'><option>Apple</option></optgroup></select>", quiz: "Which tag groups dropdown options?", answer: "optgroup" },
    "option": { title: "<option>", history: "Dropdown option.", code: "<select><option>One</option><option>Two</option></select>", quiz: "Which tag defines dropdown option?", answer: "option" },
    "label": { title: "<label>", history: "Field label.", code: "<label for='n'>Name</label><input id='n'>", quiz: "Which tag labels an input?", answer: "label" },
    "fieldset": { title: "<fieldset>", history: "Group fields.", code: "<fieldset><legend>Info</legend><input></fieldset>", quiz: "Which tag groups related fields?", answer: "fieldset" },
    "legend": { title: "<legend>", history: "Fieldset title.", code: "<legend>Details</legend>", quiz: "Which tag titles a fieldset?", answer: "legend" },
    "datalist": { title: "<datalist>", history: "Autocomplete options.", code: "<input list='b'><datalist id='b'><option>Chrome</option></datalist>", quiz: "Which tag provides predefined options?", answer: "datalist" },
    "output": { title: "<output>", history: "Calculation result.", code: "<form oninput='r.value=+a.value + +b.value'><input id='a' type='number'> + <input id='b' type='number'> = <output name='r'></output></form>", quiz: "Which tag shows calculation result?", answer: "output" },
    "progress": { title: "<progress>", history: "Task progress.", code: "<progress value='70' max='100'>70%</progress>", quiz: "Which tag shows progress?", answer: "progress" },
    "meter": { title: "<meter>", history: "Measurement.", code: "<meter value='0.6' min='0' max='1'>60%</meter>", quiz: "Which tag shows a measurement?", answer: "meter" },

    // Tables
    "table": { title: "<table>", history: "Tabular data container.", code: "<table border='1'><tr><th>Item</th><th>Qty</th></tr><tr><td>Apples</td><td>5</td></tr></table>", quiz: "Which tag defines a table?", answer: "table" },
    "caption": { title: "<caption>", history: "Table title.", code: "<table><caption>Marks</caption><tr><th>Name</th><th>Score</th></tr></table>", quiz: "Which tag titles a table?", answer: "caption" },
    "thead": { title: "<thead>", history: "Header rows.", code: "<table><thead><tr><th>A</th><th>B</th></tr></thead><tbody><tr><td>1</td><td>2</td></tr></tbody></table>", quiz: "Which tag groups header rows?", answer: "thead" },
    "tbody": { title: "<tbody>", history: "Body rows.", code: "<table><tbody><tr><td>A</td><td>B</td></tr></tbody></table>", quiz: "Which tag groups body rows?", answer: "tbody" },
    "tfoot": { title: "<tfoot>", history: "Footer rows.", code: "<table><tfoot><tr><td>Total</td><td>100</td></tr></tfoot></table>", quiz: "Which tag groups footer rows?", answer: "tfoot" },
    "tr": { title: "<tr>", history: "Table row.", code: "<table><tr><td>X</td><td>Y</td></tr></table>", quiz: "Which tag defines a table row?", answer: "tr" },
    "td": { title: "<td>", history: "Data cell.", code: "<table><tr><td>Cell</td></tr></table>", quiz: "Which tag defines a data cell?", answer: "td" },
    "th": { title: "<th>", history: "Header cell.", code: "<table><tr><th>Head</th></tr></table>", quiz: "Which tag defines a header cell?", answer: "th" },
    "colgroup": { title: "<colgroup>", history: "Column group.", code: "<table><colgroup><col span='2' style='background:#eee'></colgroup><tr><th>A</th><th>B</th></tr></table>", quiz: "Which tag groups columns?", answer: "colgroup" },
    "col": { title: "<col>", history: "Column properties.", code: "<table><colgroup><col style='background:#eee'><col style='background:#ddd'></colgroup><tr><th>A</th><th>B</th></tr></table>", quiz: "Which tag defines column properties?", answer: "col" },

    // Deprecated examples
        "acronym": {
            title: "<acronym> (Deprecated)",
            history: "Old tag used to mark acronyms; replaced by <abbr> in modern HTML.",
            code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>acronym Example</title>
</head>
<body>
  <h1>&lt;acronym&gt; Example (Deprecated)</h1>
  <p>This page shows the old &lt;acronym&gt; tag for learning only.</p>
  <p><acronym title="World Wide Web">WWW</acronym> was used to mark acronyms.</p>
</body>
</html>`,
            quiz: "Which deprecated tag defined acronyms?",
            answer: "acronym"
        },

        "applet": {
            title: "<applet> (Deprecated)",
            history: "Used to embed Java applets; modern browsers no longer support it.",
            code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>applet Example</title>
</head>
<body>
  <h1>&lt;applet&gt; Example (Deprecated)</h1>
  <p>This demonstrates the old applet tag (for historical learning only).</p>
  <applet code="ExampleApplet.class" width="300" height="100">Applet fallback content</applet>
</body>
</html>`,
            quiz: "Which deprecated tag was used to embed Java applets?",
            answer: "applet"
        },

        "big": {
            title: "<big> (Deprecated)",
            history: "Increased text size; use CSS font-size instead.",
            code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>big Example</title>
</head>
<body>
  <h1>&lt;big&gt; Example (Deprecated)</h1>
  <p>Old usage: <big>This text is bigger</big></p>
  <p>Modern: use CSS like <code>font-size</code>.</p>
</body>
</html>`,
            quiz: "Which deprecated tag increased text size?",
            answer: "big"
        },

        "center": {
            title: "<center> (Deprecated)",
            history: "Centered content; use CSS text-align:center instead.",
            code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>center Example</title>
</head>
<body>
  <h1>&lt;center&gt; Example (Deprecated)</h1>
  <center><p>This paragraph is centered using &lt;center&gt; (deprecated).</p></center>
  <p>Modern approach: use <code>style="text-align:center"</code> or CSS classes.</p>
</body>
</html>`,
            quiz: "Which deprecated tag centered content?",
            answer: "center"
        },

        "font": {
            title: "<font> (Deprecated)",
            history: "Inline font styling; replaced by CSS (font-family, color).",
            code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>font Example</title>
</head>
<body>
  <h1>&lt;font&gt; Example (Deprecated)</h1>
  <p><font face="Arial" color="red">This text uses the old &lt;font&gt; tag.</font></p>
  <p>Modern: use CSS properties like <code>color</code> and <code>font-family</code>.</p>
</body>
</html>`,
            quiz: "Which deprecated tag was used for inline font styling?",
            answer: "font"
        },

        "frame": {
            title: "<frame> (Deprecated)",
            history: "Part of the frameset model; avoid using frames in modern layouts.",
            code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>frame Example (Deprecated)</title>
</head>
<body>
  <h1>&lt;frame&gt; Example (Deprecated)</h1>
  <p>Frames are part of the old frameset model and are deprecated. Example shown as text only.</p>
  <p>Old usage (not recommended): &lt;frame src="nav.html"&gt;</p>
</body>
</html>`,
            quiz: "Which deprecated tag defined a single frame inside a frameset?",
            answer: "frame"
        },

        "frameset": {
            title: "<frameset> (Deprecated)",
            history: "Container for frames-based layouts; replaced by modern CSS layouts.",
            code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>frameset Example (Deprecated)</title>
</head>
<body>
  <h1>&lt;frameset&gt; Example (Deprecated)</h1>
  <p>Frameset replaced &lt;body&gt; in old HTML to create frames. Do not use in modern pages.</p>
  <p>Example concept: &lt;frameset cols="25%,75%"&gt; &lt;frame src="nav.html"&gt; &lt;frame src="main.html"&gt; &lt;/frameset&gt;</p>
</body>
</html>`,
            quiz: "Which deprecated tag was used as a container for frames?",
            answer: "frameset"
        },

        "dir": {
            title: "<dir> (Deprecated)",
            history: "Directory-style list; use <ul> instead.",
            code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>dir Example (Deprecated)</title>
</head>
<body>
  <h1>&lt;dir&gt; Example (Deprecated)</h1>
  <p>Old usage:</p>
  <dir>
    <li>Item A</li>
    <li>Item B</li>
  </dir>
  <p>Modern: use &lt;ul&gt; with &lt;li&gt;.</p>
</body>
</html>`,
            quiz: "Which deprecated tag created a directory-style list?",
            answer: "dir"
        },

        "isindex": {
            title: "<isindex> (Deprecated)",
            history: "Provided a single-line search prompt in very old HTML; replaced by forms and inputs.",
            code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>isindex Example (Deprecated)</title>
</head>
<body>
  <h1>&lt;isindex&gt; Example (Deprecated)</h1>
  <p>The &lt;isindex&gt; tag provided a single-line search prompt in very old HTML.</p>
  <p>Modern: use &lt;form&gt; and &lt;input type="search"&gt;.</p>
</body>
</html>`,
            quiz: "Which deprecated tag provided a simple search input?",
            answer: "isindex"
        },

        "keygen": {
            title: "<keygen> (Deprecated)",
            history: "Generated client-side keys for certificates; deprecated for security and compatibility reasons.",
            code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>keygen Example (Deprecated)</title>
</head>
<body>
  <h1>&lt;keygen&gt; Example (Deprecated)</h1>
  <p>Old usage: &lt;keygen name="key"&gt; to generate client keys. Deprecated due to security and browser support.</p>
  <p>Modern alternatives: use Web Crypto APIs or server-side key handling.</p>
</body>
</html>`,
            quiz: "Which deprecated tag was used for client-side key generation?",
            answer: "keygen"
        },

        "menuitem": {
            title: "<menuitem> (Deprecated)",
            history: "Intended for context menu items; had limited support and is deprecated.",
            code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>menuitem Example (Deprecated)</title>
</head>
<body>
  <h1>&lt;menuitem&gt; Example (Deprecated)</h1>
  <p>The &lt;menuitem&gt; element was intended for context menus but had poor support.</p>
  <p>Use custom context menus via JavaScript and ARIA for accessibility.</p>
</body>
</html>`,
            quiz: "Which deprecated tag represented a context menu item?",
            answer: "menuitem"
        },

        "marquee": {
            title: "<marquee> (Deprecated)",
            history: "Creates scrolling text; use CSS animations instead.",
            code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>marquee Example (Deprecated)</title>
</head>
<body>
  <h1>&lt;marquee&gt; Example (Deprecated)</h1>
  <p><marquee>Scrolling text using &lt;marquee&gt; (deprecated)</marquee></p>
  <p>Modern: use CSS animations for scrolling effects.</p>
</body>
</html>`,
            quiz: "Which deprecated tag created scrolling text?",
            answer: "marquee"
        },

        "nobr": {
            title: "<nobr> (Deprecated)",
            history: "Prevents line breaks inside content; use CSS white-space instead.",
            code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>nobr Example (Deprecated)</title>
</head>
<body>
  <h1>&lt;nobr&gt; Example (Deprecated)</h1>
  <p><nobr>This text will not wrap using &lt;nobr&gt; (deprecated)</nobr></p>
  <p>Modern: use <code>white-space: nowrap;</code> in CSS.</p>
</body>
</html>`,
            quiz: "Which deprecated tag prevented line breaks?",
            answer: "nobr"
        },

        "noembed": {
            title: "<noembed> (Deprecated)",
            history: "Provided fallback content for embedded objects in very old browsers.",
            code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>noembed Example (Deprecated)</title>
</head>
<body>
  <h1>&lt;noembed&gt; Example (Deprecated)</h1>
  <p>The &lt;noembed&gt; element provided fallback for embedded content in very old browsers.</p>
  <p>Modern: use &lt;object&gt; fallback content or feature detection.</p>
</body>
</html>`,
            quiz: "Which deprecated tag provided fallback for embedded content?",
            answer: "noembed"
        },

        "spacer": {
            title: "<spacer> (Deprecated)",
            history: "Used to add layout spacing; use CSS margin/padding instead.",
            code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>spacer Example (Deprecated)</title>
</head>
<body>
  <h1>&lt;spacer&gt; Example (Deprecated)</h1>
  <p>Old usage: &lt;spacer size="10"&gt; to add space. Deprecated—use CSS spacing.</p>
  <p>Modern: use <code>margin</code> or <code>padding</code>.</p>
</body>
</html>`,
            quiz: "Which deprecated tag was used as a layout spacer?",
            answer: "spacer"
        },

        "strike": {
            title: "<strike> (Deprecated)",
            history: "Old strikethrough tag; use <s> or CSS text-decoration instead.",
            code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>strike Example (Deprecated)</title>
</head>
<body>
  <h1>&lt;strike&gt; Example (Deprecated)</h1>
  <p><strike>Old strikethrough text</strike></p>
  <p>Modern: use &lt;s&gt; or <code>text-decoration: line-through;</code>.</p>
</body>
</html>`,
            quiz: "Which deprecated tag showed strikethrough text?",
            answer: "strike"
        },

        "tt": {
            title: "<tt> (Deprecated)",
            history: "Teletype/monospace text; use CSS font-family: monospace instead.",
            code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>tt Example (Deprecated)</title>
</head>
<body>
  <h1>&lt;tt&gt; Example (Deprecated)</h1>
  <p><tt>Teletype monospace text</tt></p>
  <p>Modern: use <code>font-family: monospace;</code> in CSS.</p>
</body>
</html>`,
            quiz: "Which deprecated tag displayed teletype/monospace text?",
            answer: "tt"
        },

        "xmp": {
            title: "<xmp> (Deprecated)",
            history: "Displayed raw preformatted HTML; replaced by <pre> with proper escaping.",
            code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>xmp Example (Deprecated)</title>
</head>
<body>
  <h1>&lt;xmp&gt; Example (Deprecated)</h1>
  <p>The &lt;xmp&gt; tag showed raw HTML without parsing in very old browsers:</p>
  <xmp><b>Raw bold text shown literally</b></xmp>
  <p>Modern: use &lt;pre&gt; with HTML escaping or code blocks.</p>
</body>
</html>`,
            quiz: "Which deprecated tag displayed raw preformatted HTML?",
            answer: "xmp"
        }
};
function openModal(tag) {
    document.getElementById('modal').style.display = 'flex';
    document.getElementById('modal-title').innerHTML = tagData[tag].title;
    document.getElementById('modal-history').innerHTML = tagData[tag].history;
    document.getElementById('modal-editor').value = tagData[tag].code;
    document.getElementById('live-preview').srcdoc = tagData[tag].code;
    document.getElementById('quiz-question').innerHTML = tagData[tag].quiz;
    document.getElementById('quiz-answer').value = '';
    document.getElementById('quiz-feedback').innerHTML = '';

    // yahan tag ko hidden attribute me store hota ha
    document.getElementById('quiz').setAttribute('data-tag', tag);
  document.getElementById("modal-content").classList.remove("modal-dark");

}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
}

function copyCode() {
    const code = document.getElementById('modal-editor').value;
    navigator.clipboard.writeText(code).then(() => {
        alert('🎉 Code Copied! 🎉');
    });
}


function runLiveCode() {
    const code = document.getElementById('modal-editor').value;
    document.getElementById('live-preview').srcdoc = code;
}

function checkAnswer() {
    // hidden attribute 
    const tag = document.getElementById('quiz').getAttribute('data-tag');
    const answer = document.getElementById('quiz-answer').value.trim().toLowerCase();
    const correct = tagData[tag].answer.toLowerCase();

    if (answer === correct) {
      document.getElementById('quiz-feedback').innerHTML = "<span style='color:#00FFFF;'>Correct!</span>";
    } else {
      document.getElementById('quiz-feedback').innerHTML = "<span style='color:#ffb703;'>Try again!</span>";
    }
}
function searchTag() {
    const input = document.getElementById('searchBar').value.toLowerCase();
    const cards = document.querySelectorAll('.tag-card');

    cards.forEach(card => {
        const tag = card.textContent.toLowerCase(); // card ka text
        if (tag.includes(input)) {
            card.style.display = "inline-block"; // show match
            card.classList.add("highlight");
        } else {
            card.style.display = "none"; // hide non-match
            card.classList.remove("highlight");
        }
    });


    if (input === "") {
        cards.forEach(card => {
            card.style.display = "inline-block";
            card.classList.remove("highlight");
        });
    }
}
// scrool button
document.getElementById("scrollTopBtn").addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});


document.getElementById("scrollBottomBtn").addEventListener("click", () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
});


window.addEventListener("scroll", () => {
    const topBtn = document.getElementById("scrollTopBtn");
    if (window.scrollY > 200) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
});

function toggleModalTheme() {
  document.getElementById("modal-content")
    .classList.toggle("modal-dark");
}

