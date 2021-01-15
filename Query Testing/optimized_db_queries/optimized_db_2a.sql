SELECT		client_number, client_name
FROM		CREDIT_CLIENTS C
JOIN		CARDS CA
ON			C.card_category_id = CA.card_id
WHERE		CA.card_type = "Blue";

SELECT		client_number, client_name
FROM		CREDIT_CLIENTS C
JOIN		CARDS CA
ON			C.card_category_id = CA.card_id
WHERE		CA.card_type = "Silver";

SELECT		client_number, client_name
FROM		CREDIT_CLIENTS C
JOIN		CARDS CA
ON			C.card_category_id = CA.card_id
WHERE		CA.card_type = "Gold";

SELECT		client_number, client_name
FROM		CREDIT_CLIENTS C
JOIN		CARDS CA
ON			C.card_category_id = CA.card_id
WHERE		CA.card_type = "Platinum";