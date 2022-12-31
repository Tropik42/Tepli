module.exports = {
/* eslint-disable */
    getAllNews: `
        SELECT
             n.news_id                              AS "newsId"
            ,TO_CHAR(create_datetime, 'DD.MM.YYYY') AS "newsDate"
            ,n.title
            ,n.body
            ,n.state
            ,i.img      

        FROM 
            news AS n
            LEFT JOIN images AS i ON n.news_id = i.news_id   

        ORDER BY 
            n.news_id DESC
        ;`,

    getOneNews: `
        SELECT 
             news_id                                AS "newsId"
            ,TO_CHAR(create_datetime, 'DD.MM.YYYY') AS "newsDate"
            ,title
            ,body
            ,state
        FROM 
            news 
        WHERE 
            news_id = $1
        ;`,

    createNews: `
        INSERT INTO news (
             title
            ,body
        )
        VALUES (
             $1
            ,$2
        )
        RETURNING 
             news_id          AS "newsId"
            ,create_datetime  AS "newsDate"
            ,title
            ,body
            ,state
        ;`,

    updateNews: `
        UPDATE 
            news 
        SET 
            title = $1
           ,body  = $2 
        WHERE 
            news_id = $3
        ;`,

    createImage: `
        INSERT INTO images (
             news_id
            ,img
        )
        VALUES (
             $1
            ,$2
        )
        RETURNING 
             image_id AS "imageId"
            ,news_id  AS "newsId"
            ,img      
        ;`,

    getNewsImages: `
        SELECT
             news.title   AS "newsTitle"
            ,news.body    AS "newsBody"   
            ,images.img      
        FROM
            news AS n           
            LEFT JOIN images AS i ON n.news_id = i.news_id   
        ;`,

/* eslint-enable */
};
