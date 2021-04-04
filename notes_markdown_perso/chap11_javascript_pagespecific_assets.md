# JavaScript & Page-Specific Assets

Dans ce chapitre et les suivants, on va voir comment envoyer une requête AJAX dans les règles de l'art sur une page Symfony, et 
prendre en compte son retour pour mettre à jour le front-end.  
Premièrement, dans le fichier `base.html.twig`, on peut voir à la ligne 54 que jQuery est inclus dans le front.  
On peut alors créer un dossier `js` dans `public`, dans lequel on crée un fichier `article_show.js`.  
On ne veut l'inclure que sur la page affichant les articles.  
Pour que le code jQuery puisse repérer le bouton like sur la page de l'article, on ajoute le code suivant dans 
`show.html.twig`:
```HTML
<span class="pl-2 article-details">
    <span class="js-like-article-count">5</span>
    <a href="#" class="fa fa-heart-o like-article js-like-article"></a>
</span>
```

Ce qui permet alors de mettre à jour le code jQuery avec un premier code pour réagir au clic sur le coeur : 
```JavaScript
$(document).ready(function() {
    $('.js-like-article').on('click', function(e) {
        e.preventDefault();

        var $link = e.currentTarget();

        // filling or emptying the heart icon depending on the previous value
        $link.toggleClass('fa-heart-o').toggleClass('fa-heart');

        $('.js-like-article-count').html('TEST');
    });
});
```

Pour inclure ce code sur la page de l'article, on pourrait le mettre dans le block 
javascripts de `base.html.twig` avec les autres scripts. Mais ça inclurait le fichier 
sur toutes les vues, alors qu'on le veut sur toutes les pages.  
Mais on ne peut pas non plus le mettre dans `show.html.twig`, parce que 
le fichier JavaScript serait appelé avant l'appel à jQuery. Le code du 
fichier ne fonctionnerait alors simplement pas ! 
Pour résoudre ce problème, on va **override (surcharger) le {% block javascripts %}**.  

Concrètement ça veut dire qu'en bas du fichier html.show.twig (ou n'importe où ailleurs 
sur ce fichier), on va créer un nouveau `{% block javascripts %}` avec le code suivant :
```HTML
{% block javascripts %}
    {{ parent() }}
    <script src="{{ asset('js/article_show.js') }}"></script>
{% endblock %}
```

La commande `{{ parent() }}` étant là pour appeler le `{% block javascripts %}` parent (celui 
de `base.html.twig`. 
