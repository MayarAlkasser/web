const http = require("http");
const url = require("url");
const persistence = require("./models/persistence");

let feld = persistence.tutorialsFled;
let ausgabe = [];

http.createServer(function (req, res) {
    const queryObject = url.parse(req.url, true).query;
    queryObject.search = new String(queryObject.search).toLowerCase();

  ausgabe.forEach(element=> {
      ausgabe.pop();
  })
  feld.forEach((element) => {
      let objektName = new String(element.name).toLowerCase();
    if (objektName.includes(queryObject.search)) {
      ausgabe.push(element);
    }
  });
  if (ausgabe.length === 0) {
    send(res, html(`<h4>Keine Tutorials gefunden</h4>`, queryObject.search));
  } else {
    send(res, html(createListe(),queryObject.search));
  }
}).listen(8844);

function send(response, body) {
  response.writeHead(200, { "content-type": "text/html; charset=utf-8" });
  response.end(body);
}

function html(platzhalter, search) {
  return `
<!DOCTYPE html>
<html lang="de">

<head>
    <meta charset="UTF-8">
    <link rel="stylesheet" type="text/css" href="http://localhost:8020/css/style.css">
    <link rel="stylesheet" type="text/css" href="http://localhost:8020/css/flexbox.css">
    <link rel="stylesheet" type="text/css" href="http://localhost:8020/css/tiles.css">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Search Page</title>
</head>

<body>
    <header>
        <img src="http://localhost:8020/img/homepage-logo.png" width="150" height="150" alt="homepage Logo">
        <h1>Deine Suchergebnisse</h1>
    </header>
    <nav>
        <div id="a">
            <a href="http://localhost:8020/list">Homepage </a>
            <a href="http://localhost:8020/form">Neues Tutorial anlegen</a>
        </div>
    </nav>
    <div id="hauptBereich">
        <main id="listMain">
            <h3>Tutorials mit: ${search}</h3>
            <ul>
                ${platzhalter}
            </ul>
        </main>
        <aside class="innenBereich">
            <h3>Neue Tutorials</h3>
            <ul>
                <li>HTML5 Der schnelle Einstieg, 10.2021 - Dauer: 2 Stunden 40 Minuten</li>
                <li>CSS3 Tutorial, 02.2013 - Dauer: 1 Stunden 55 Minuten</li>
            </ul>
        </aside>
    </div>
    <footer>
        <hr>
        &copy;2021 EasyLearn
    </footer>
    <script src="../v0/assets/javaScript/list.js"> </script>
    <script src="../v0/assets/javaScript/burgermenu.js"></script>

</body>

</html>

`;
}

function createListe() {
  let result = "";
  for (let element of ausgabe) {
    result += `<li> <a href="http://localhost:8020/tutorial?name=${element.name}" > ${element.name} ${element.dauer} </a> </li>`;
  }

  return result;
}