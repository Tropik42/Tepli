module.exports = {
    /* eslint-disable */
        getContacts: `
            SELECT 
                 cont_id AS "contId"
                ,data
            FROM 
                contacts
            ORDER BY
                cont_id
        ;`,
        updateContacts: `
         UPDATE 
            contacts
            SET
        data = $1
        where cont_id = $2
        ;`,
        

    /* eslint-disable */
    };