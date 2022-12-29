module.exports = {
    /* eslint-disable */
    getAllPrice: `
    SELECT 
             price_id  AS "priceId"
            ,price_name   
            ,price_path   
    FROM 
            price
    ORDER BY
            price_id 
    ;`,
    
    getOneFilePrice: `
    SELECT
       price_id         AS "priceId"
      ,price_path       AS "pricePath"
    FROM 
       price 
    WHERE 
       price_id = $1
  `,
    updateFilePrice: `
    UPDATE 
      price 
    SET 
      price_path = $1
    WHERE 
      price_id = $2   
    ;`,
        /* eslint-disable */
};