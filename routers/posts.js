
const express = require('express')
const router = express.Router()
const post = [
    {
        titolo: "Ciambellone Soffice",
        contenuto: "Un dolce classico e soffice, perfetto per la colazione o la merenda. Semplice da preparare e sempre gradito.",
        immagine: "ciambellone.jpeg",
        tags: ["dolce", "colazione", "ciambellone", "tradizionale"],
        id: 1
      },
      {
        titolo: "Cracker alla Barbabietola",
        contenuto: "Snack croccanti e colorati grazie alla barbabietola. Perfetti per un aperitivo originale e sano.",
        immagine: "cracker_barbabietola.jpeg",
        tags: ["snack", "salato", "barbabietola", "aperitivo"],
        id: 2
      },
      {
        titolo: "Pane Fritto Dolce",
        contenuto: "Una ricetta semplice ma irresistibile: pane fritto dolce, croccante fuori e morbido dentro.",
        immagine: "pane_fritto_dolce.jpeg",
        tags: ["dolce", "frittura", "pane", "tradizione"],
        id: 3
      },
      {
        titolo: "Pasta alla Barbabietola",
        contenuto: "Un primo piatto colorato e cremoso con barbabietola e formaggio per un tocco gourmet.",
        immagine: "pasta_barbabietola.jpeg",
        tags: ["primo", "pasta", "barbabietola", "colorato"],
        id: 4
      },
      {
        titolo: "Torta Paesana",
        contenuto: "Un dolce tradizionale rustico a base di pane raffermo, cioccolato e latte. Una vera delizia casalinga.",
        immagine: "torta_paesana.jpeg",
        tags: ["dolce", "tradizionale", "cioccolato", "pane"],
        id: 5
      }
];

//res.type('json').send(post)    -forma intera-


  // completo (index)
  router.get('/', function (req, res) {
    res.json(post)
    });
    // mostra
   router.get("/:id", function (req, res) {
    const oggettoTrovato = post.find((a) => a.id === parseInt(req.params.id));
    res.json(oggettoTrovato)
    });
    // creazione
   router.post('/', function (req, res) {
    res.send('Creazione nuovo post');
    });
    // aggiornare
   router.put('/:id', function (req, res) {
    res.send('Modifica integrale del post ' + req.params.id);
    });
    // modificare
   router.patch('/:id', function (req, res) {
    res.send('Modifica parziale del post ' + req.params.id);
    });
    // eliminare
   router.delete('/:id', function (req, res) {
    res.send('Eliminazione del post ' + req.params.id);
    });

    module.exports = router