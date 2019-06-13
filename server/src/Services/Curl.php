<?php

namespace App\Services;

/**
 * Make request easely
 * @author <hountondjigodwill@gmail.com>
 */
class Curl
{

    private $data = array(),
            $method,
            $headers = array(),
            $request,
            $response;

    /**
     * @param string $uri, The request uri
     */
    public function __construct(string $uri)
    {
        $this->request = curl_init($uri);
        curl_setopt($this->request, CURLOPT_RETURNTRANSFER, 1); 
    }

    /**
     * Defined the requets method
     * @param string $method, the method to use
     */
    public function setMethod(string $method) :self
    {
        if ($method === 'GET') {
            curl_setopt($this->request, CURLOPT_HTTPGET, true);
        } elseif ($method === 'POST') {
            curl_setopt($this->request, CURLOPT_POST, true);
        } else {
            curl_setopt($this->request, CURLOPT_CUSTOMREQUEST, $method);
        }

        $this->method = $method;

        return $this;
    }

    private function getHeaders()
    {
        if (!empty($this->headers)) {
            curl_setopt($this->request, CURLOPT_HTTPHEADER, $this->headers);
        } 
    }

    /**
     * @param array $header
     */
    public function addHeader(string $data) :self
    {
        array_push($this->headers, $data);
        return $this;
    }

    /**
     * @param array $data
     */
    public function setData(array $data, bool $encode = true) :self
    {
        curl_setopt($this->request, CURLOPT_POSTFIELDS, $encode === true ? http_build_query($data) : $data );
        $this->data = $data;
        return $this;
    }

    /**
     * @param string $username
     * @param string $password
     */
    public function setUserPassword(string $username, string $password) : self
    {
        curl_setopt($this->request, CURLOPT_USERPWD, "$username:$password");

        return $this;
    }

    public function getResponse()
    {
        $this->getHeaders();
        curl_setopt($this->request, CURLOPT_RETURNTRANSFER, true);
        $response = curl_exec($this->request);
        curl_close($this->request);
        return $response;
    }
    
}
