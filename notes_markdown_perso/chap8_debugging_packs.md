# Debugging & Packs

Pour installer encore plus d'outils de débogage, on va exécuter la commande 
`composer require debug --dev`. 

En fait cet alias va installer un package appelé `debug-pack`. Dans le code 
de ce package, on peut voir qu'il n'y a qu'un unique fichier composer.json,
qui demande lui-même d'autres bibliothèques.  
`debug-pack` est ce qu'on appelle un **Pack**, c'est-à-dire une feature qui
installe en réalité plusieurs packages/bibliothèques en même temps.  
Et ici, ce pack installe :
- monolog (une biblio de débogage)
- phpunit-brige pour tester
- profiler-pack (qu'on a déjà installé en fait)  

Et grâce à ça, notre `{{ dump() }}` dans le Twig est devenu bien plus
classe !  

Par contre, les packs ont un désavantage: si on veut modifier la version 
d'une biblio, ou si on veut la majorité des biblio mais pas toutes, on 
doit exécuter la commande `composr unpack debug`. 
Enfin sur mon poste, le package a été unpacké automatiquement. En effet, 
dans la partie `require-dev` du composer.json, on peut voir directement
les packages de debug dedans. 