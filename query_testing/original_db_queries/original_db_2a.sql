SELECT	    clientID, client_name
FROM	    CLIENTS C 
JOIN        CARDS CA
ON		    C.card_category_id = CA.card_id
WHERE	    CA.card_type = "Blue";

SELECT	    clientID, client_name
FROM	    CLIENTS C 
JOIN        CARDS CA
ON		    C.card_category_id = CA.card_id
WHERE	    CA.card_type = "Silver";

SELECT	    clientID, client_name
FROM	    CLIENTS C 
JOIN        CARDS CA
ON		    C.card_category_id = CA.card_id
WHERE	    CA.card_type = "Gold";

SELECT	    clientID, client_name
FROM	    CLIENTS C 
JOIN        CARDS CA
ON		    C.card_category_id = CA.card_id
WHERE	    CA.card_type = "Platinum";


