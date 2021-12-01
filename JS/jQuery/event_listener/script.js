$(document).ready(() => {
    $('#comment').keyup(function() {
        $('#commentValue').html($(this).val())
    })
});