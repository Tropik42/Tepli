module.exports = {
/* eslint-disable */
    getAbout: `
        SELECT 
            about_id AS "aboutId"
            ,body
        FROM 
            about
        ORDER BY
            about_id
    `,
/* eslint-disable */
};