$(document).ready(function() {
    $('.js-like-article').on('click', function(e) {
        e.preventDefault();

        var $link = $(e.currentTarget);

        // filling or emptying the heart icon depending on the previous value
        $link.toggleClass('fa-heart-o').toggleClass('fa-heart');

        $('.js-like-article-count').html('TEST');
    });
});