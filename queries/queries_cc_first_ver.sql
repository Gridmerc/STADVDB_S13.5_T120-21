-- The queries here is only a sample. You may alter some lines to merge them into the controller folder.
-- Made by Nilo Cantil II Jatico

-- One Table

-- 1. List the names of clients, age and marital status based on age.

SELECT      client_name, age, marital_status
FROM        CLIENTS
WHERE       age < 30;

-- 2. List the names of clients based on the number of dependents.

SELECT      clientID, client_name
FROM        CLIENTS
WHERE       dependent_count = 1;

-- Two Tables

-- 1. List the client ID and names based on their card.

SELECT	    clientID, client_name
FROM	    CLIENTS C JOIN CARDS CA
ON		    C.card_category_id = CA.card_id
WHERE	    CA.card_type = "Platinum";

-- 2. Count the number of clients on each education level based on their age

SELECT		COUNT(C.clientID) AS 'count' , E.education_type AS 'eductype' 
FROM		CLIENTS C JOIN EDUCATION_LEVELS E
ON			C.education_level_id = E.education_id
WHERE		C.age < 30
GROUP BY	E.education_type;

-- Three Tables

-- 1. Get the average age of clients who have an income status of $60K - $80K and having a Gold card.

SELECT		AVG(age)  AS 'AvgAge' 
FROM		CLIENTS C JOIN INCOMES I
ON			C.income_category_id = I.income_id
JOIN		CARDS CA
ON			C.card_category_id = CA.card_id
WHERE		I.income_type = "$60K - $80K"
AND			CA.card_type = "Gold";

-- 2. Get the sum of total transaction count from clients that are college students.

SELECT		SUM(CI.tot_trans_count) AS 'SumofTransactionCount' , E.education_type AS 'eductype'
FROM		CLIENTS C
JOIN		EDUCATION_LEVELS E
ON			C.education_level_id = E.education_id
JOIN		CREDIT_INFOS CI
ON			C.clientID = CI.clientID
WHERE		E.education_type = "College";

-- Four Tables

-- 1. Display the client ID, client name, age, and total revolving balance based on the education, card type and marital status.

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