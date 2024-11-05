<?php
    function getElements($url,$selector){
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, $url);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        $html = curl_exec($ch);
        curl_close($ch);

        $dom = new DOMDocument();
        @$dom->loadHTML($html);
        $xpath = new DOMXPath($dom);
        $elements = $xpath->query($selector);

        if ($elements->length > 0) {
            return $elements->item(0)->nodeValue;
        } else {
            return "Elemento no encontrado";
        }
    }

    $url = "https://www.example.com";
    $selector = "//h1";
    echo getElements($url, $selector);
?>