# Services

On appelle **Service** n'importe quel objet qui effectue des actions telle que générer des e-mails, 
envoyer des e-mails, enregistrer des données en base, etc. Le fonctionnement et les évolutions de 
Symfony se basent entièrement sur un système de services. 

En tapant en console `tail -f var/log/dev.log` à la racine du projet, puis en rafraîchissant la page, on peut voir
que Symfony a ajouté de nouveaux messages de logs, ce qui montre que Symfony a en place un système de logs.  
Comme c'est un service qui est employé (comme toujours en Symfony), alors un objet de log doit être en place dans le code.  

Cet objet est l'objet **LoggerInterface**. On peut l'utiliser directement dans une fonction Symfony en l'appelant 
en nouveau paramètre d'une fonction, puis via la méthode `->info`, comme présenté sur le code ci-dessous: 
```PHP
public function toggleArticleHeart($slug, LoggerInterface $logger)
{
    // TODO - actually heart/unheart the article
    // return new JsonResponse(['hearts' => rand(5, 100)]);
    $logger->info('Article is being hearted');
    return $this->json(['hearts' => rand(5, 100)]) ;
}
```

On rappelle que de base le PHP est non typé.  
La force ici de Symfony est dans ce qu'on appelle l'**Autowiring** : si on met un type de service en paramètre 
d'une méthode Symfony, ce dernier va directement rechercher le service associé. Donc si on a besoin d'un service, il suffit 
de savoir le bon nom du type à utiliser. La liste des types appelables 
par autowiring peut être listée via la commande `./bin/console debug:autowiring`.  
Plus on installera des packages, plus on aura de services dans la liste. Notons que certains services ont deux types 
d'objet associés utilisables (comme pour Twig par exemple).  
D'ailleurs en parlant de Twig, l'utilisation de la ligne 
`this->render` dans ArticleController n'est qu'un raccourci pour appeler le service de Twig et sa méthode associée.  
On pourrait donc remplacer le code de `show()` par celui-ci:

```PHP
public function show($slug, Environment $twigEnvironment)
{
    ...   
    $html = $twigEnvironment->render('article/show.html.twig', [
        'title' => ucwords(str_replace('-', ' ', $slug)),
        'comments' => $comments,
        'slug' => $slug
    ]);
    
    return new Response($html);
}
```

En Symfony, tout est un service. Idem pour les configurations, doctrines, forms, Security, API, etc. En ayant bien compris 
que tout ce qu'on utilisera en Symfony est un service, on pourra apprendre plus efficacement la suite ! 