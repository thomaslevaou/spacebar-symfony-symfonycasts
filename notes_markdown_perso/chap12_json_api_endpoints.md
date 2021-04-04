# JSON API Endpoint 

Après avoir vu l'insertion d'un code jQuery dans une page Twig, on va pour le moment étudier 
la réception du retour AJAX.  
C'est pourquoi on a ajouté une nouvelle méthode `toggleArticleHeart` dans `ArticleController`,
qui va avoir pour route `* @Route("/news/{slug}/heart", name="article_toggle_heart")`, de sorte 
que la slug permettra de savoir quel article sera liké (on utilise le nom pour identifier 
pour le moment, mais quand on aura une bdd on utilisera un id de news).  

Notons qu'à ce moment, on a ajouté un commentaire `TODO` pour se rappeler qu'on doit 
màj la méthode en la connectant à une base de données plus tard. Les commentaires 
ainsi formés sont repérables par PhpStorm.  

Ici, on doit retourner une réponse json (pour la vue) qui en même temps doit être un objet de type Response (pour Symfony).  
Le mieux est donc de retourner un objet de type JsonResponse, ce qui peut être exécuté de deux manières différentes :
- Soit via la commande `return new JsonResponse(['hearts' => rand(5,100)]);`;
- Soit via la commande `return $this->json(['hearts' => rand(5,100)]);`. 

Non seulement ces options font un `json_encode` pour nous, mais modifient aussi le header 
en un `application/json`, ce qui est plus sympa pour le JavaScript.  

Suite à l'insertion d'une de ces options, en allant sur `http://localhost:8000/news/why-asteroids-taste-like-bacon/heart`,
on peut y voir le retour du json sur la page. On appelle ce genre de page un **Endpoint API**.  

Maintenant qu'on a vu cet Endpoint, comme il va insérer des données au serveur (ajouter des LIKE par exemple), on va 
éviter de l'appeler en GET (best practice) alors que c'est le cas actuellement vu qu'on y a accès via l'URL.  

Pour rendre cette Endpoit accessible uniquement en POST, on va le préciser dans l'annotation de la méthode 
comme sur l'extrait de code suivant : 
```PHP
/**
 * @Route("/news/{slug}/heart", name="article_toggle_heart", methods={"POST"})
 */
```

L'Endpoint n'est alors plus accessible par l'URL : le Profiler Symfony affiche une erreur indiquant le modèle n'est accessible 
qu'en POST, quand on entre l'URL.  
En exécutant `./bin/console debug:router` en fenêtre de commande, on peut voir que la méthode `article_toggle_heart` n'est 
accessible qu'en `POST`, là où les autres méthodes sont accessibles via n'importe quelle méthode (`ANY`).  

Pour appeler cette méthode en jQuery, on va passer par la propriété `href` de la balise Twig, dont on va récupérer la 
valeur avec jQuery avant l'appel AJAX.  

On peut alors récupérer le contenu de l'AJAX via le `done` habituel.  
Notons que dès qu'un appel AJAX est effectué, le Profiler affiche une icône de "recyclage" pour donner des traces 
sur les appels AJAX effectués. Ce qui permet de regarder les perfs, les exceptions levées, déboguer,  etc