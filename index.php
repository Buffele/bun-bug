<?php

require __DIR__ . '/vendor/autoload.php';

use GuzzleHttp\Client;
use GuzzleHttp\Exception\RequestException;
use GuzzleHttp\RequestOptions;

function doRequest(): void
{
    $client = new Client;
    $url = 'http://localhost:3000/example';

    $data = [
        'name' => 'Test Name',
        'data' => str_repeat('A', 5 * 1024 * 1024),
    ];

    try {
        $response = $client->post($url, [
            RequestOptions::TIMEOUT => 5,
            RequestOptions::CONNECT_TIMEOUT => 2,
            RequestOptions::JSON => $data,
            // Uncommenting this would fix the issue.
            //RequestOptions::EXPECT => false,
        ]);

        if ($response->getStatusCode() === 200) {
            echo 'Request successful: ' . $response->getBody();
        } else {
            echo 'Request failed with status code: ' . $response->getStatusCode();
        }
    } catch (RequestException $e) {
        echo 'Request error: ' . $e->getMessage();
    }
}

doRequest();