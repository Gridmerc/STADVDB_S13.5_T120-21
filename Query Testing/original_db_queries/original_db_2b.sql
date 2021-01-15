SELECT		COUNT(C.clientID) AS 'count' , E.education_type AS 'eductype' 
FROM		CLIENTS C JOIN EDUCATION_LEVELS E
ON			C.education_level_id = E.education_id
WHERE		C.age > 0
GROUP BY	E.education_type;

SELECT		COUNT(C.clientID) AS 'count' , E.education_type AS 'eductype' 
FROM		CLIENTS C JOIN EDUCATION_LEVELS E
ON			C.education_level_id = E.education_id
WHERE		C.age < 0
GROUP BY	E.education_type;

SELECT		COUNT(C.clientID) AS 'count' , E.education_type AS 'eductype' 
FROM		CLIENTS C JOIN EDUCATION_LEVELS E
ON			C.education_level_id = E.education_id
WHERE		C.age = 46
GROUP BY	E.education_type;

SELECT		COUNT(C.clientID) AS 'count' , E.education_type AS 'eductype' 
FROM		CLIENTS C JOIN EDUCATION_LEVELS E
ON			C.education_level_id = E.education_id
WHERE		C.age = 73
GROUP BY	E.education_type;