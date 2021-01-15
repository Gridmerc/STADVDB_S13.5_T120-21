SELECT		C.client_name, C.age, M.marital_type
FROM		CREDIT_CLIENTS C
JOIN		MARITAL_STATUSES M
ON			C.marital_status_id = M.mar_status_id
WHERE		age > 0;

SELECT		C.client_name, C.age, M.marital_type
FROM		CREDIT_CLIENTS C
JOIN		MARITAL_STATUSES M
ON			C.marital_status_id = M.mar_status_id
WHERE		age < 0;

SELECT		C.client_name, C.age, M.marital_type
FROM		CREDIT_CLIENTS C
JOIN		MARITAL_STATUSES M
ON			C.marital_status_id = M.mar_status_id
WHERE		age = 46;

SELECT		C.client_name, C.age, M.marital_type
FROM		CREDIT_CLIENTS C
JOIN		MARITAL_STATUSES M
ON			C.marital_status_id = M.mar_status_id
WHERE		age = 73;