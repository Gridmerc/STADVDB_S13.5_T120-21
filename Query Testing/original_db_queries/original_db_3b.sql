SELECT		SUM(CI.tot_trans_count) AS 'SumofTransactionCount' , E.education_type AS 'eductype'
FROM		CLIENTS C
JOIN		EDUCATION_LEVELS E
ON			C.education_level_id = E.education_id
JOIN		CREDIT_INFOS CI
ON			C.clientID = CI.clientID
WHERE		E.education_type = "Unknown";

SELECT		SUM(CI.tot_trans_count) AS 'SumofTransactionCount' , E.education_type AS 'eductype'
FROM		CLIENTS C
JOIN		EDUCATION_LEVELS E
ON			C.education_level_id = E.education_id
JOIN		CREDIT_INFOS CI
ON			C.clientID = CI.clientID
WHERE		E.education_type = "Uneducated";

SELECT		SUM(CI.tot_trans_count) AS 'SumofTransactionCount' , E.education_type AS 'eductype'
FROM		CLIENTS C
JOIN		EDUCATION_LEVELS E
ON			C.education_level_id = E.education_id
JOIN		CREDIT_INFOS CI
ON			C.clientID = CI.clientID
WHERE		E.education_type = "High School";

SELECT		SUM(CI.tot_trans_count) AS 'SumofTransactionCount' , E.education_type AS 'eductype'
FROM		CLIENTS C
JOIN		EDUCATION_LEVELS E
ON			C.education_level_id = E.education_id
JOIN		CREDIT_INFOS CI
ON			C.clientID = CI.clientID
WHERE		E.education_type = "College";

SELECT		SUM(CI.tot_trans_count) AS 'SumofTransactionCount' , E.education_type AS 'eductype'
FROM		CLIENTS C
JOIN		EDUCATION_LEVELS E
ON			C.education_level_id = E.education_id
JOIN		CREDIT_INFOS CI
ON			C.clientID = CI.clientID
WHERE		E.education_type = "Graduate";

SELECT		SUM(CI.tot_trans_count) AS 'SumofTransactionCount' , E.education_type AS 'eductype'
FROM		CLIENTS C
JOIN		EDUCATION_LEVELS E
ON			C.education_level_id = E.education_id
JOIN		CREDIT_INFOS CI
ON			C.clientID = CI.clientID
WHERE		E.education_type = "Post-Graduate";

SELECT		SUM(CI.tot_trans_count) AS 'SumofTransactionCount' , E.education_type AS 'eductype'
FROM		CLIENTS C
JOIN		EDUCATION_LEVELS E
ON			C.education_level_id = E.education_id
JOIN		CREDIT_INFOS CI
ON			C.clientID = CI.clientID
WHERE		E.education_type = "Doctorate";