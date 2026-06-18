const tagData = {
    "!doctype": {
        title: "<!doctype>",
        history: "The doctype declaration defines the HTML version",
        code: "<!DOCTYPE html>\n<html>\n<head>\n<title>Title of the document</title>\n</head>\n<body>\nThe content of the document......\n</body>\n</html>",
        quiz: "Which is the tag that tells the browser which version of HTML user used?",
        answer: "doctype"
    },
    // "h1": {
    //     title: "<h1> Heading Tag",
    //     history: "Since HTML 2, for headings h1-h6",
    //     code: "<h1>This is heading 1</h1>",
    //     quiz: "What tag is used for the largest heading?",
    //     answer: "h1"
    // },
      h1: {
    title: "&lt;h1&gt; Heading Tag",
    history: "<strong>About:</strong> The &lt;h1&gt; tag defines the most important heading on the page.<br><br><strong>Modern Use:</strong> Search engines use headings to index the structure of your web pages. Always use exactly one h1 per page.",
    code: "<h1>Hello World</h1>\n<p>Welcome to Tag Web! Start learning code.</p>",
    quiz: "Which tag creates the highest level system document heading hierarchy?",
    answer: "h1"
  },
    "p": {
        title: "<p> Paragraph Tag",
        history: "Used for paragraphs of text",
        code: "<p>This is a paragraph.</p>",
        quiz: "Which tag wraps a paragraph?",
        answer: "p"
    },
    "b": {
        title: "<b> Bold Tag",
        history: "Used to make text bold",
        code: "<b>This text is bold</b>",
        quiz: "Which tag is used to make text bold?",
        answer: "b"
    },
    "a": {
        title: "<a> Anchor tag",
        history: "Used to navigate other files or pages",
        code: "<a href='https://www.w3schools.com/' target='_blank' >This is Anchor tag</a><br><br><a href='https://www.google.com' target='_blank'>Go to Google</a>",
        quiz: "Which tag is used to navigate other files or pages?",
        answer: "anchor tag"
    },
    "nav": {
        title: "<nav> Navigation Bar",
        history: "Navigation bars are typically located at the top or at the side of a webpage.",
        code: "<ul><li><a href='tagweb.html'>Home</a></li><li><a href='news.asp'>News</a></li><li><a href='contact.asp'>Contact</a></li><li><a href='about.asp'>About</a></li></ul>",
        quiz: "Which tag is used to define a section of a webpage that contains navigation links.?",
        answer: "nav"
    },
    "href": {
        title: "<href> Hyperlink Reference",
        history: "It specifies the destination URL (Uniform Resource Locator) or the path to the resource that the hyperlink points to.",
        code: "<a href=''>Link</a>",
        quiz: "Which tag is used to insert some links.?",
        answer: "href"
    },
    "target": {
        title: "<target> Target tag",
        history: "It jumps the link into new webpage without opening the link in the same page",
        code: "'<a href= 'https://www.w3schools.com/' target='_blank'>Visit W3Schools!</a>",
        quiz: "Which tag is used to open a link of a webpage or anyother in new blank file.?",
        answer: "target"
    },
    "ul": {
        title: "<ul> Unordered List",
        history: "Used for bullet lists",
        code: "<ul><li>Item1</li><li>Item2</li></ul>",
        quiz: "Which tag is used for unordered list?",
        answer: "ul"
    },
    "ol": {
        title: "<ol> Ordered List",
        history: "Numbered lists",
        code: "<ol><li>Step1</li><li>Step2</li></ol>",
        quiz: "Which tag is used for numbered list?",
        answer: "ol"
    },
    "li": {
        title: "<li> List Item",
        history: "Defines an item inside <ul> or <ol>",
        code: "<ul><li>First item</li><li>Second item</li></ul>",
        quiz: "Which tag defines a list item?",
        answer: "li"
    },
    "dl": {
        title: "<dl> Description List",
        history: "Used for a list of terms and their descriptions",
        code: "<dl><dt>HTML</dt><dd>HyperText Markup Language</dd></dl>",
        quiz: "Which tag is used for description lists?",
        answer: "dl"
    },
    "dt": {
        title: "<dt> Description Term",
        history: "Defines a term in a description list",
        code: "<dl><dt>CSS</dt><dd>Cascading Style Sheets</dd></dl>",
        quiz: "Which tag defines the term in a description list?",
        answer: "dt"
    },
    "dd": {
        title: "<dd> Description Definition",
        history: "Defines the description or value of a term in a description list",
        code: "<dl><dt>JavaScript</dt><dd>A programming language for the web</dd></dl>",
        quiz: "Which tag defines the description in a description list?",
        answer: "dd"
    },
    "form": {
        title: "<form> Form Container",
        history: "Forms for user input",
        code: "<form><input type='text' placeholder='Name'><button>Submit</button></form>",
        quiz: "Which tag wraps form elements?",
        answer: "form"
    },
    "input": {
        title: "<input> Input Field",
        history: "For text, radio, checkbox, etc.",
        code: "<input type='text' placeholder='Name'>",
        quiz: "Which tag is used for input fields?",
        answer: "input"
    },

    "audio": {
        title: "<audio> Audio Tag",
        history: "Introduced in HTML5, used to embed audio files with optional controls.",
        code: "<audio controls>\n  <source src='assets/Believer.mp3' type='audio/mpeg'>\n  Your browser does not support the audio element.\n</audio>",
        quiz: "Which tag is used to embed audio in HTML?",
        answer: "audio"
    },
    "img": {
        title: "<img> Image",
        history: "For embedding images",
        code: "<img src='https://i.pinimg.com/474x/9a/f0/36/9af036b6c356add9971cae4ba9e1058a.jpg' alt='img sample' width='100%''>",
        quiz: "Which tag is used to show image?",
        answer: "img"
    },
    // semmantic tag
    "header": {
        title: "<header> Header Tag",
        history: "Defines a container for introductory content or navigation links in HTML.",
        code: "<header>\n  <h1>My Website</h1>\n  <nav>\n    <a href='#home'>Home</a>\n    <a href='#about'>About</a>\n    <a href='#contact'>Contact</a>\n  </nav>\n</header>",
        quiz: "Which tag is used to define the top section of a webpage?",
        answer: "header"
    },
    "footer": {
        title: "<footer> Footer Tag",
        history: "Defines a container for footer content like author info, copyright, or links.",
        code: "<footer>\n  <p>© 2025 My Website. All rights reserved.</p>\n  <a href='#privacy'>Privacy Policy</a>\n</footer>",
        quiz: "Which tag is used to define the bottom section of a webpage?",
        answer: "footer"
    },
    // table tags
    "table": {
        title: "<table> Table Tag",
        history: "Defines a table structure in HTML.",
        code: "<table border='1'>\n  <tr><th>Name</th><th>Age</th></tr>\n  <tr><td>Ali</td><td>20</td></tr>\n</table>",
        quiz: "Which tag defines a table in HTML?",
        answer: "table"
    },
    "caption": {
        title: "<caption> Table Caption Tag",
        history: "Defines a title or caption for a table.",
        code: "<table border='1'>\n  <caption>Student Marks</caption>\n  <tr><th>Name</th><th>Marks</th></tr>\n  <tr><td>Ali</td><td>90</td></tr>\n</table>",
        quiz: "Which tag defines a title for a table?",
        answer: "caption"
    },
    "thead": {
        title: "<thead> Table Head Tag",
        history: "Groups the header content in a table.",
        code: "<table border='1'>\n  <thead>\n    <tr><th>Name</th><th>Age</th></tr>\n  </thead>\n  <tbody>\n    <tr><td>Ali</td><td>20</td></tr>\n  </tbody>\n</table>",
        quiz: "Which tag groups the header rows in a table?",
        answer: "thead"
    },
    "tbody": {
        title: "<tbody> Table Body Tag",
        history: "Groups the main body content in a table.",
        code: "<table border='1'>\n  <thead><tr><th>Name</th><th>Age</th></tr></thead>\n  <tbody>\n    <tr><td>Ali</td><td>20</td></tr>\n    <tr><td>Sara</td><td>22</td></tr>\n  </tbody>\n</table>",
        quiz: "Which tag groups the main body rows in a table?",
        answer: "tbody"
    },
    "tfoot": {
        title: "<tfoot> Table Footer Tag",
        history: "Groups the footer content in a table, often for totals.",
        code: "<table border='1'>\n  <thead><tr><th>Item</th><th>Price</th></tr></thead>\n  <tbody>\n    <tr><td>Apple</td><td>$2</td></tr>\n    <tr><td>Banana</td><td>$1</td></tr>\n  </tbody>\n  <tfoot>\n    <tr><td>Total</td><td>$3</td></tr>\n  </tfoot>\n</table>",
        quiz: "Which tag groups the footer rows in a table?",
        answer: "tfoot"
    },
    "tr": {
        title: "<tr> Table Row Tag",
        history: "Defines a row of cells in a table.",
        code: "<table border='1'>\n  <tr><td>Ali</td><td>20</td></tr>\n</table>",
        quiz: "Which tag defines a row in a table?",
        answer: "tr"
    },
    "td": {
        title: "<td> Table Data Cell Tag",
        history: "Defines a standard data cell in a table.",
        code: "<table border='1'>\n  <tr><td>Ali</td><td>20</td></tr>\n</table>",
        quiz: "Which tag defines a data cell in a table?",
        answer: "td"
    },
    "th": {
        title: "<th> Table Header Cell Tag",
        history: "Defines a header cell in a table.",
        code: "<table border='1'>\n  <tr><th>Name</th><th>Age</th></tr>\n</table>",
        quiz: "Which tag defines a header cell in a table?",
        answer: "th"
    },
    "colgroup": {
        title: "<colgroup> Column Group Tag",
        history: "Defines a group of columns in a table for styling.",
        code: "<table border='1'>\n  <colgroup>\n    <col span='2' style='background:#f9f9f9'>\n  </colgroup>\n  <tr><th>Name</th><th>Age</th></tr>\n  <tr><td>Ali</td><td>20</td></tr>\n</table>",
        quiz: "Which tag groups columns in a table?",
        answer: "colgroup"
    },
    "col": {
        title: "<col> Column Tag",
        history: "Defines column properties inside a <colgroup>.",
        code: "<table border='1'>\n  <colgroup>\n    <col style='background:#eee'>\n    <col style='background:#ddd'>\n  </colgroup>\n  <tr><th>Name</th><th>Age</th></tr>\n  <tr><td>Ali</td><td>20</td></tr>\n</table>",
        quiz: "Which tag defines properties for a single column?",
        answer: "col"
    },
    "cite": {
        title: "<cite> Citation Tag",
        history: "Used to define the title of a creative work (book, website, movie, etc.).",
        code: "<p>My favorite book is <cite>The Alchemist</cite>.</p>",
        quiz: "Which tag is used to define the title of a creative work?",
        answer: "cite"
    },
    "q": {
        title: "<q> Inline Quote Tag",
        history: "Used for short inline quotations inside a paragraph.",
        code: "<p>Ali said, <q>Practice makes perfect.</q></p>",
        quiz: "Which tag is used for inline quotations?",
        answer: "q"
    },
    "blockquote": {
        title: "<blockquote> Block Quote Tag",
        history: "Used for longer quotations that are displayed as separate blocks.",
        code: "<blockquote>\n  Success is not final, failure is not fatal: it is the courage to continue that counts.\n</blockquote>",
        quiz: "Which tag is used for block-level quotations?",
        answer: "blockquote"
    }
};