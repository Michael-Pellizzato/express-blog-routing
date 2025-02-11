/*Esercizio
Creare un file di routing (routers/posts.js) che conterrà le rotte necessario per l'entità post.
All'interno creare le rotte per le operazioni CRUD (Index, Show, Create, Update e Delete)
Tutte le risposte saranno dei testi che confermeranno l’operazione che il server deve eseguire, secondo le convenzioni REST.
Ad esempio:
Se viene chiamata /posts col verbo GET ci aspettiamo “Lista dei post”;
Se viene chiamato /posts/1 col verbo DELETE ci aspettiamo “Cancellazione del post 1”
e via dicendo…
Registrare il router dentro app.js con il prefisso posts/.
Nota:
Avete anche l’array dei post che vi abbiamo fornito, salvatelo da qualche parte. Ci servirà per i prossimi step. Per oggi vi può servire in caso vogliate provare i bonus.
Bonus
Provare a restituire la lista dei post dalla rotta index, in formato json
Provare a restituire un singolo post dalla rotta show, sempre in formato json
Buon Lavoro*/

const express = require('express')
const app = express()
const port = 3000
app.use(express.static("public"))

app.get('/', (req, res) => {
    const post = [
        {
            titolo: "Ciambellone Soffice",
            contenuto: "Un dolce classico e soffice, perfetto per la colazione o la merenda. Semplice da preparare e sempre gradito.",
            immagine: "ciambellone.jpeg",
            tags: ["dolce", "colazione", "ciambellone", "tradizionale"]
          },
          {
            titolo: "Cracker alla Barbabietola",
            contenuto: "Snack croccanti e colorati grazie alla barbabietola. Perfetti per un aperitivo originale e sano.",
            immagine: "cracker_barbabietola.jpeg",
            tags: ["snack", "salato", "barbabietola", "aperitivo"]
          },
          {
            titolo: "Pane Fritto Dolce",
            contenuto: "Una ricetta semplice ma irresistibile: pane fritto dolce, croccante fuori e morbido dentro.",
            immagine: "pane_fritto_dolce.jpeg",
            tags: ["dolce", "frittura", "pane", "tradizione"]
          },
          {
            titolo: "Pasta alla Barbabietola",
            contenuto: "Un primo piatto colorato e cremoso con barbabietola e formaggio per un tocco gourmet.",
            immagine: "pasta_barbabietola.jpeg",
            tags: ["primo", "pasta", "barbabietola", "colorato"]
          },
          {
            titolo: "Torta Paesana",
            contenuto: "Un dolce tradizionale rustico a base di pane raffermo, cioccolato e latte. Una vera delizia casalinga.",
            immagine: "torta_paesana.jpeg",
            tags: ["dolce", "tradizionale", "cioccolato", "pane"]
          }
    ];
    //res.type('json').send(post)    -forma intera-
    res.json(post)
  })

  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })