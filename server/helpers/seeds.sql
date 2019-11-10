INSERT INTO `UserRoles`
(
`name`,
`createdAt`,
`updatedAt`
)
VALUES
( "Owner",now(),now()),
( "Customer",now(),now())
;

INSERT INTO `Users`
(
`username`,
`password`,
`UserRoleId`,
`createdAt`,
`updatedAt`
)
VALUES
('Skybuilders','abcd',1,now(),now())