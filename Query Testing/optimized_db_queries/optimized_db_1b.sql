SELECT		client_number, client_name
FROM		CREDIT_CLIENTS
WHERE		dependent_count > 0;

SELECT		client_number, client_name
FROM		CREDIT_CLIENTS
WHERE		dependent_count < 0;

SELECT		client_number, client_name
FROM		CREDIT_CLIENTS
WHERE		dependent_count = 0;

SELECT		client_number, client_name
FROM		CREDIT_CLIENTS
WHERE		dependent_count = 5;