SELECT		AVG(C.age) AS 'AvgAge' 
FROM		CREDIT_CLIENTS C 
JOIN 		INCOMES I
ON			C.income_category_id = I.income_id
JOIN		CARDS CA
ON			C.card_category_id = CA.card_id
WHERE		I.income_type = "Less than $40K"
AND			CA.card_type = "Blue";

SELECT		AVG(C.age) AS 'AvgAge' 
FROM		CREDIT_CLIENTS C 
JOIN 		INCOMES I
ON			C.income_category_id = I.income_id
JOIN		CARDS CA
ON			C.card_category_id = CA.card_id
WHERE		I.income_type = "Less than $40K"
AND			CA.card_type = "Platinum";

SELECT		AVG(C.age) AS 'AvgAge' 
FROM		CREDIT_CLIENTS C 
JOIN 		INCOMES I
ON			C.income_category_id = I.income_id
JOIN		CARDS CA
ON			C.card_category_id = CA.card_id
WHERE		I.income_type = "$80K - $120K"
AND			CA.card_type = "Blue";

SELECT		AVG(C.age) AS 'AvgAge' 
FROM		CREDIT_CLIENTS C 
JOIN 		INCOMES I
ON			C.income_category_id = I.income_id
JOIN		CARDS CA
ON			C.card_category_id = CA.card_id
WHERE		I.income_type = "$80K - $120K"
AND			CA.card_type = "Platinum";