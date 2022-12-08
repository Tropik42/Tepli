module.exports = {
/* eslint-disable */
    getAbout: `
        SELECT 
             about_id AS "aboutId"
            ,body
        FROM 
            about
        ORDER BY
            about_id DESC
    ;`,
    updateAbout: `
        UPDATE 
            about 
        SET 
            body = $1
        WHERE 
            about_id = $2 
        ;`,
/* eslint-disable */
};
