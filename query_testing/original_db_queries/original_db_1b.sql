SELECT      clientID, client_name
FROM        CLIENTS
WHERE       dependent_count > 0;

SELECT      clientID, client_name
FROM        CLIENTS
WHERE       dependent_count < 0;

SELECT      clientID, client_name
FROM        CLIENTS
WHERE       dependent_count = 0;

SELECT      clientID, client_name
FROM        CLIENTS
WHERE       dependent_count = 5;



