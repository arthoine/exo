$(document).ready(() => {
    let constraintsText = {
        name: 'Le nom d\'un utilisateur ne peut contenir plus de 20 caractères et ne doit contenir que des lettres.',
        email: 'Il doit s\'agir d\'un e-mail valide',
        password: 'Le mot de passe ne peut contenir que des chiffres et des lettres. Il doit disposer d\'au moins 6 caractères',
        birthDate: 'L\'utilisateur doit être une personne majeure',
        comment: 'Le commentaire ne peut excéder plus de 200 caractères'
    }

    $('.js-hasHelpText').each(function() {
        let helpText = '<p class="help-text">' + constraintsText[$(this).attr('name')] + '</p>'
        $(this).after(helpText)
    })

    let form = $('#form')

    form.animate({ 'width': '50%' }, 2000)

    $('h1, legend').hide().show(1000)

    form.on('focus', 'input, textarea', function() {
        $(this).next('.help-text').show('slow')
    })

    form.on('blur', 'input, textarea', function() {
        $('.help-text').hide()
    })
});