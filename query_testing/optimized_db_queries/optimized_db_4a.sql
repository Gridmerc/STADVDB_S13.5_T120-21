SELECT		C.client_number, C.client_name, C.age, C.tot_revolving_bal
FROM		CREDIT_CLIENTS C
JOIN		CARDS CA
ON			C.card_category_id = CA.card_id
JOIN		EDUCATION_LEVELS E
ON			C.education_level_id = E.education_id
JOIN		MARITAL_STATUSES M
ON			C.marital_status_id = M.mar_status_id
WHERE		E.education_type = "Unknown"
AND			CA.card_type = "Blue"
AND			M.marital_type = "Single";

SELECT		C.client_number, C.client_name, C.age, C.tot_revolving_bal
FROM		CREDIT_CLIENTS C
JOIN		CARDS CA
ON			C.card_category_id = CA.card_id
JOIN		EDUCATION_LEVELS E
ON			C.education_level_id = E.education_id
JOIN		MARITAL_STATUSES M
ON			C.marital_status_id = M.mar_status_id
WHERE		E.education_type = "Uneducated"
AND			CA.card_type = "Blue"
AND			M.marital_type = "Married";

SELECT		C.client_number, C.client_name, C.age, C.tot_revolving_bal
FROM		CREDIT_CLIENTS C
JOIN		CARDS CA
ON			C.card_category_id = CA.card_id
JOIN		EDUCATION_LEVELS E
ON			C.education_level_id = E.education_id
JOIN		MARITAL_STATUSES M
ON			C.marital_status_id = M.mar_status_id
WHERE		E.education_type = "High School"
AND			CA.card_type = "Gold"
AND			M.marital_type = "Married";

SELECT		C.client_number, C.client_name, C.age, C.tot_revolving_bal
FROM		CREDIT_CLIENTS C
JOIN		CARDS CA
ON			C.card_category_id = CA.card_id
JOIN		EDUCATION_LEVELS E
ON			C.education_level_id = E.education_id
JOIN		MARITAL_STATUSES M
ON			C.marital_status_id = M.mar_status_id
WHERE		E.education_type = "College"
AND			CA.card_type = "Blue"
AND			M.marital_type = "Married";

SELECT		C.client_number, C.client_name, C.age, C.tot_revolving_bal
FROM		CREDIT_CLIENTS C
JOIN		CARDS CA
ON			C.card_category_id = CA.card_id
JOIN		EDUCATION_LEVELS E
ON			C.education_level_id = E.education_id
JOIN		MARITAL_STATUSES M
ON			C.marital_status_id = M.mar_status_id
WHERE		E.education_type = "Graduate"
AND			CA.card_type = "Gold"
AND			M.marital_type = "Single";

SELECT		C.client_number, C.client_name, C.age, C.tot_revolving_bal
FROM		CREDIT_CLIENTS C
JOIN		CARDS CA
ON			C.card_category_id = CA.card_id
JOIN		EDUCATION_LEVELS E
ON			C.education_level_id = E.education_id
JOIN		MARITAL_STATUSES M
ON			C.marital_status_id = M.mar_status_id
WHERE		E.education_type = "Post-Graduate"
AND			CA.card_type = "Blue"
AND			M.marital_type = "Single";

SELECT		C.client_number, C.client_name, C.age, C.tot_revolving_bal
FROM		CREDIT_CLIENTS C
JOIN		CARDS CA
ON			C.card_category_id = CA.card_id
JOIN		EDUCATION_LEVELS E
ON			C.education_level_id = E.education_id
JOIN		MARITAL_STATUSES M
ON			C.marital_status_id = M.mar_status_id
WHERE		E.education_type = "Doctorate"
AND			CA.card_type = "Silver"
AND			M.marital_type = "Single";