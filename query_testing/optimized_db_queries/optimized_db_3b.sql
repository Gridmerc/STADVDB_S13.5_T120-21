SELECT		SUM(C.tot_trans_count) AS 'SumofTransactionCount' , E.education_type AS 'eductype'
FROM		CREDIT_CLIENTS C
JOIN		EDUCATION_LEVELS E
ON			C.education_level_id = E.education_id
WHERE		E.education_type = "Unknown";

SELECT		SUM(C.tot_trans_count) AS 'SumofTransactionCount' , E.education_type AS 'eductype'
FROM		CREDIT_CLIENTS C
JOIN		EDUCATION_LEVELS E
ON			C.education_level_id = E.education_id
WHERE		E.education_type = "Uneducated";

SELECT		SUM(C.tot_trans_count) AS 'SumofTransactionCount' , E.education_type AS 'eductype'
FROM		CREDIT_CLIENTS C
JOIN		EDUCATION_LEVELS E
ON			C.education_level_id = E.education_id
WHERE		E.education_type = "High School";

SELECT		SUM(C.tot_trans_count) AS 'SumofTransactionCount' , E.education_type AS 'eductype'
FROM		CREDIT_CLIENTS C
JOIN		EDUCATION_LEVELS E
ON			C.education_level_id = E.education_id
WHERE		E.education_type = "College";

SELECT		SUM(C.tot_trans_count) AS 'SumofTransactionCount' , E.education_type AS 'eductype'
FROM		CREDIT_CLIENTS C
JOIN		EDUCATION_LEVELS E
ON			C.education_level_id = E.education_id
WHERE		E.education_type = "Graduate";

SELECT		SUM(C.tot_trans_count) AS 'SumofTransactionCount' , E.education_type AS 'eductype'
FROM		CREDIT_CLIENTS C
JOIN		EDUCATION_LEVELS E
ON			C.education_level_id = E.education_id
WHERE		E.education_type = "Post-Graduate";

SELECT		SUM(C.tot_trans_count) AS 'SumofTransactionCount' , E.education_type AS 'eductype'
FROM		CREDIT_CLIENTS C
JOIN		EDUCATION_LEVELS E
ON			C.education_level_id = E.education_id
WHERE		E.education_type = "Doctorate";