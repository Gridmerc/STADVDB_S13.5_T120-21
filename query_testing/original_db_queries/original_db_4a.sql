SELECT		C.clientID, C.client_name, CI.tot_revolving_bal, C.age
FROM		CLIENTS C
JOIN		CREDIT_INFOS CI
ON			C.clientID = CI.clientID
JOIN		CARDS CA
ON			C.card_category_id = CA.card_id
JOIN		EDUCATION_LEVELS E
ON			C.education_level_id = E.education_id
WHERE		E.education_type = 'Unknown'
AND			CA.card_type = 'Blue'
AND			C.marital_status = 'Single';

SELECT		C.clientID, C.client_name, CI.tot_revolving_bal, C.age
FROM		CLIENTS C
JOIN		CREDIT_INFOS CI
ON			C.clientID = CI.clientID
JOIN		CARDS CA
ON			C.card_category_id = CA.card_id
JOIN		EDUCATION_LEVELS E
ON			C.education_level_id = E.education_id
WHERE		E.education_type = 'Uneducated'
AND			CA.card_type = 'Blue'
AND			C.marital_status = 'Married';

SELECT		C.clientID, C.client_name, CI.tot_revolving_bal, C.age
FROM		CLIENTS C
JOIN		CREDIT_INFOS CI
ON			C.clientID = CI.clientID
JOIN		CARDS CA
ON			C.card_category_id = CA.card_id
JOIN		EDUCATION_LEVELS E
ON			C.education_level_id = E.education_id
WHERE		E.education_type = 'High School'
AND			CA.card_type = 'Gold'
AND			C.marital_status = 'Married';

SELECT		C.clientID, C.client_name, CI.tot_revolving_bal, C.age
FROM		CLIENTS C
JOIN		CREDIT_INFOS CI
ON			C.clientID = CI.clientID
JOIN		CARDS CA
ON			C.card_category_id = CA.card_id
JOIN		EDUCATION_LEVELS E
ON			C.education_level_id = E.education_id
WHERE		E.education_type = 'College'
AND			CA.card_type = 'Blue'
AND			C.marital_status = 'Married';

SELECT		C.clientID, C.client_name, CI.tot_revolving_bal, C.age
FROM		CLIENTS C
JOIN		CREDIT_INFOS CI
ON			C.clientID = CI.clientID
JOIN		CARDS CA
ON			C.card_category_id = CA.card_id
JOIN		EDUCATION_LEVELS E
ON			C.education_level_id = E.education_id
WHERE		E.education_type = 'Graduate'
AND			CA.card_type = 'Gold'
AND			C.marital_status = 'Single';

SELECT		C.clientID, C.client_name, CI.tot_revolving_bal, C.age
FROM		CLIENTS C
JOIN		CREDIT_INFOS CI
ON			C.clientID = CI.clientID
JOIN		CARDS CA
ON			C.card_category_id = CA.card_id
JOIN		EDUCATION_LEVELS E
ON			C.education_level_id = E.education_id
WHERE		E.education_type = 'Post-Graduate'
AND			CA.card_type = 'Blue'
AND			C.marital_status = 'Single';

SELECT		C.clientID, C.client_name, CI.tot_revolving_bal, C.age
FROM		CLIENTS C
JOIN		CREDIT_INFOS CI
ON			C.clientID = CI.clientID
JOIN		CARDS CA
ON			C.card_category_id = CA.card_id
JOIN		EDUCATION_LEVELS E
ON			C.education_level_id = E.education_id
WHERE		E.education_type = 'Doctorate'
AND			CA.card_type = 'Silver'
AND			C.marital_status = 'Single';