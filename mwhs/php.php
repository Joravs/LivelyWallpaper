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

    $url = "https://zonaolympus.com/series/comic-me-canse-de-ser-un-lame-culos-y-ahora-tengo-90-mil-millones-de-monedas-de-oro77723123125324";
    $selector = "//.font-medium text-xl";
    echo getElements($url, $selector);
?>