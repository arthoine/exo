<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>Final project</title>
    </head>
    <body>
        <h1>Client REST pour Postman Echo</h1>

        <div class="rest_block">
        <form method="POST" action="">
            <label for="get_data">Données en GET</label>
            <input id="get_data" name="get_data" />
            <input type="button" id="get_endpoint" value="Envoyer une requête en GET" />
            <br />
            <h2>Résultats Appel en GET</h2>
            <textarea id="result_get"></textarea>
        </form>
        </div>

        <div class="rest_block">
        <form method="POST" action="">
            <label for="post_data">Données en POST</label>
            <input id="post_data" name="post_data" />
            <input type="button" id="post_endpoint" value="Envoyer une requête en POST" />
            <br />
            <h2>Résultats Appel en POST</h2>
            <textarea id="result_post"></textarea>
        </form>
        </div>

        <div class="rest_block">
        <form method="POST" action="">
            <label for="delete_data">Données en DELETE</label>
            <input id="delete_data" name="delete_data" />
            <input type="button" id="delete_endpoint" value="Envoyer une requête en DELETE" />
            <br />
            <h2>Résultats Appel en DELETE</h2>
            <textarea id="result_delete"></textarea>
        </form>
        </div>
        <script>
        const endpoint = 'https://postman-echo.com/'

        // Les fonctions d'appel
        function api_get(data) {
            const request = new XMLHttpRequest();
            request.open('GET', `${endpoint}get?${data}`, false);
            request.setRequestHeader('Content-type', 'application/json');
            request.send();
            response_from_api = JSON.parse(request.responseText);

            return JSON.stringify(response_from_api.args);
        }

        function api_post(data) {
            const request = new XMLHttpRequest();
            request.open('POST', `${endpoint}post`, false);
            request.setRequestHeader('Content-type', 'application/json');
            request.send(data);

            response_from_api = JSON.parse(request.responseText, true);
            return JSON.stringify(response_from_api.args);
        }

        function api_delete() {
            const request = new XMLHttpRequest();
            request.open('DELETE', `${endpoint}patch`, false);
            request.setRequestHeader('Content-type', 'application/json');
            request.send();
            response_from_api = JSON.parse(request.responseText, true);
            return JSON.stringify(response_from_api.args);
        }

        // Gestion de la soumission des formulaires
        const get_form = document.getElementById('get_endpoint');
        const post_form = document.getElementById('post_endpoint');
        const delete_form = document.getElementById('delete_endpoint');

        // Appels en GET
        get_form.addEventListener('click', () => {
            const input_data = document.getElementById('get_data').value;
            const textarea = document.getElementById('result_get');

            textarea.innerHTML = api_get(input_data);
        });

        // Appels en POST
        post_form.addEventListener('click', () => {
            const input_data = document.getElementById('post_data').value;
            const textarea = document.getElementById('result_post');

            textarea.innerHTML = api_get(input_data);
        });

        // Appels en DELETE
        delete_form.addEventListener('click', () => {
            const input_data = document.getElementById('delete_data').value;
            const textarea = document.getElementById('result_delete');

            textarea.innerHTML = api_get(input_data);
        });
            
        </script>
    </body>
</html>