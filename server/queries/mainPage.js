module.exports = {
/* eslint-disable */
createImages: `
    INSERT INTO 
        main_page_images (img)
    VALUES ($1)
    RETURNING 
        image_id       
        ,img 
`,

    getAllImages: `
    SELECT
      image_id        AS "imageId"
      ,img
    FROM 
      main_page_images 
    ORDER BY 
      image_id
  `,
    getOneImages: `
    SELECT
      image_id        AS "imageId"
      ,img
    FROM 
      main_page_images 
    WHERE 
      image_id = $1
  `,
  deleteImages: `
    DELETE
    FROM 
      main_page_images 
    WHERE 
      image_id = $1
  `,
 /* eslint-enable */
};
