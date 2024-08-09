# advance_nodejs

last streamed = 

## Important Links 
* https://www.iana.org/
* port numbers visit following link: https://www.iana.org/assignments/service-names-port-numbers/service-names-port-numbers.xhtml


200	OK
201	Created
202	Accepted but not processed
203 Non-Authoritative Information
204	No Content

300	Multiple Choices
301	Moved Permanently
302	Found (Previously "Moved Temporarily")
303	See Other
304	Not Modified

400 Bad Request - This means that client-side input fails validation.
401 Unauthorized - This means the user isn't not authorized to access a resource. It usually returns when the user isn't authenticated.
402 - Payment required.
403 Forbidden - This means the user is authenticated, but it's not allowed to access a resource.
404 Not Found - This indicates that a resource is not found.

500 - Not Implemented - Internal server error - This is a generic server error. It probably shouldn't be thrown explicitly.
501 - The server does not support the functionality required to fulfill the request.
502 Bad Gateway - This indicates an invalid response from an upstream server.
503 Service Unavailable - This indicates that something unexpected happened on server side (It can be anything like server overload, some parts of the system failed, etc.).