# Flex & Aliases

Pour étudier le principe des Recipes, on va premièrement exécuter la commande 
`composer require sec-checker` (une note sur le tuto recommande d'ajouter `--dev`
mais quand je le mets j'ai une erreur 403, donc je ne le mets pas).

Notons que dans composer.json, on peut voir une dépendance appelée **symfony/flex**.  
Il s'agit de la dépendance associée au plugin **Flex**, qui a lui-même deux avantages 
("superpouvoirs").  

Le premier avantage est le **système d'alias**. 

Sur le site **https://flex.symfony.com/**, on peut accéder au serveur de Recipes de Symfony.  
En tapant "security" dans la barre de recherche, on peut y voir un package appelé
sensiolabs/security-checker, qui a en-dessous des aliases (sec-check, sec-checker, etc).

Grâce à Flex, on peut juste exécuter des commandes comme `composer require sec-checker` (ou 
tout autre alias à la place de sec-checker) pour installer sensiolabs/security-checker.  
Ce système d'aliases sert de raccourci pour que la plupart des commandes Composer soient bien moins longues 
à écrire.  
Une fois cette commande exécutée, on peut voir que le package a bien été ajouté dans 
Composer sous le nom de sensiolabs/security-checker.  

Le deuxième avantage du plugin Flex est le **système de Recipes**.  

Lorsqu'on fait un `git status` après avoir exécuté la commande d'installation de sec-checker,
on peut voir qu'un fichier `symfony.lock` a été modifié, et qu'un nouveau fichier de config
`config/packages/security_checker.yaml` a été créé.  
Le fichier symfony.lock est géré par Flex. Il garde une trace des Recipes qui ont été 
installées. On peut l'ignorer pour le moment.  

Bon alors comme ce security-checker est obsolète, j'ai du le remplacer en téléchargeant
un exécutable ici : https://github.com/fabpot/local-php-security-checker (linux amd64),
en le rendant exécutable, en le renommant, puis en l'exécutant: 
```
chmod 777 local-php-security-checker_1.0.0_linux_amd64
mv local-php-security-checker_1.0.0_linux_amd64 local-php-security-checker
./local-php-security-checker
```
Et c'est ainsi que j'ai pu avoir le même résultat `No packages have known vulnerabilities.` 
que dans le tuto, ce qui a fait tourner correctement le 
security-checker attendu.

Mais _si j'avais fait le tuto à l'époque où ce dernier était à jour_, il m'aurait suffit 
d'exécuter `php ./bin/console security:check`, ce qui aurait fournit le même résultat,
mais cette fois en ayant correctement appliqué le principe des Recipes.

A chaque installation de package, Flex va exécuter sa Recipe s'il y en a une. 
Une recipe peut ajouter des fichiers des config, créer des répertoires ou simplement
modifier des fichiers déjà existant, comme par exemple ajouter des trucs dans un .gitignore.
Ca permet d'installer des trucs sans avoir à faire du setup en plus, ce qui peut 
souvent être assez pratique. 

Normalement, en ajoutant cette Recipe, un nouveau script aurait du apparaître dans 
le composer.json, sous la forme d'un `"security-checker security:check": "script"`, qui 
aurait dû être exécuté à chaque `composer install` (ce qui aurait été pratique pour
vérifier certaines failles de sécurité à chaque exécution de cette dernière commande).

De plus si on retire le package, Flex va également retirer les Recipes associés.  

Les Recipes sont situés sur GitHub: sur flex.symfony.com, on peut remarque la présence
du code de la Recipe, dans un projet de `symfony/recipes` (le dépôt officiel).  
Toutes les Recipes sont soient dans ce projet, soit dans un projet du type
`symfony/recipes-contrib`.
