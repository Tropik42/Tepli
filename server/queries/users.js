module.exports = {
  getAllUsers: `
    SELECT
      user_id  AS "userId"
      ,user_name AS "username"
      ,is_admin AS "isAdmin"
    FROM 
      users 
    ORDER BY 
      user_id
  `,

  userLogin: `
    SELECT 
      user_id        AS "userId"
      ,is_admin      AS "isAdmin"
      ,user_password AS "userPassword"
    FROM 
      users 
    WHERE 
      user_name = $1
  `,
};
