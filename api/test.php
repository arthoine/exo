<html>
<head>
    <title>Liste de pays en utilisant SOAP en JavaScript</title>
    <script type="text/javascript">
        function soap() {
            var xmlhttp = new XMLHttpRequest();
            xmlhttp.open('POST', 'http://webservices.oorsprong.org/websamples.countryinfo/CountryInfoService.wso', true);

            // Créer la requête SOAP
            var soap_request =
                '<?xml version="1.0" encoding="utf-8"?>' +
                '<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">' + 
                    '<soap:Body>' +
                        '<ListOfCountryNamesByName xmlns="http://www.oorsprong.org/websamples.countryinfo">' +
                        '</ListOfCountryNamesByName>' +
                    '</soap:Body>' +
                '</soap:Envelope>';

            xmlhttp.onreadystatechange = function () {
                if (xmlhttp.readyState == 4) {
                    if (xmlhttp.status == 200) {
                        console.log(xmlhttp.responseText)
                        result = document.getElementById('result')
                        result.innerHTML = xmlhttp.responseText
                    }
                }
            }
            // Requête en POST avec XML en type de contenu
            xmlhttp.setRequestHeader('Content-Type', 'text/xml; charset=utf-8');
            xmlhttp.send(soap_request);
        }
    </script>
</head>
<body>
    <form name="soap-client" action="" method="POST">
        <input type="button" value="Lancer la requête SOAP" onclick="soap();" />
    </form>
    <pre lang="xml" id="result"></pre>
</body>
</html>