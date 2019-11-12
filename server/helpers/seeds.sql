TRUNCATE TABLE `Bookings`;
TRUNCATE TABLE `WorkspacePics`;
TRUNCATE TABLE `WorkspaceAvailabilities`;
TRUNCATE TABLE `Workspaces`;
TRUNCATE TABLE `WorkspaceLocation`;
TRUNCATE TABLE `WorkspaceFeature`;
TRUNCATE TABLE `Feature`;
TRUNCATE TABLE `Users`;
TRUNCATE TABLE `UserRoles`;

INSERT INTO `UserRoles`
(
`name`
)
VALUES
( "Owner"),
( "Customer");

INSERT INTO `Users`
(
`username`,
`password`,
`UserRoleId`
)
VALUES
('Skybuilders','abcd',1);

INSERT INTO `Users`
(
`username`,
`password`,
`UserRoleId`
)
VALUES
('johnsmith','abcd',2);