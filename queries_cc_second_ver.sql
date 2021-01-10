-- The queries here are the sample of the optimized dataset.
-- Made by Nilo Cantil II Jatico

-- 1.a. List the names of clients, age and marital status based on age.

SELECT		C.client_name, C.age, M.marital_type
FROM		CREDIT_CLIENTS C
JOIN		MARITAL_STATUSES M
ON			C.marital_status_id = M.mar_status_id
WHERE		age < 30;

-- 1.b. List the names of clients based on the number of dependents.

SELECT		client_number, client_name
FROM		CREDIT_CLIENTS
WHERE		dependent_count = 1;

-- 2.a. List the client ID and names based on their card.

SELECT		client_number, client_name
FROM		CREDIT_CLIENTS C
JOIN		CARDS CA
ON			C.card_category_id = CA.card_id
WHERE		CA.card_type = "Platinum";

-- 2.b. Count the number of clients on each education level based on their age.

SELECT		COUNT(C.client_number) AS 'count' , E.education_type AS 'eductype' 
FROM		CREDIT_CLIENTS C JOIN EDUCATION_LEVELS E
ON			C.education_level_id = E.education_id
WHERE		C.age < 30
GROUP BY	E.education_type;

-- 3.a. Get the average age of clients who have an income status of $60K - $80K and having a Gold card.

SELECT		AVG(C.age) AS 'AvgAge' 
FROM		CREDIT_CLIENTS C 
JOIN 		INCOMES I
ON			C.income_category_id = I.income_id
JOIN		CARDS CA
ON			C.card_category_id = CA.card_id
WHERE		I.income_type = "$60K - $80K"
AND			CA.card_type = "Gold";

-- 3.b. Get the sum of total transaction count from clients that are college students.

SELECT		SUM(C.tot_trans_count) AS 'SumofTransactionCount' , E.education_type AS 'eductype'
FROM		CREDIT_CLIENTS C
JOIN		EDUCATION_LEVELS E
ON			C.education_level_id = E.education_id
WHERE		E.education_type = "College";

-- 4. Display the client ID, client name, age, and total revolving balance based on the education, card type and marital status.

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