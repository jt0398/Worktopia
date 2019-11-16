INSERT INTO `userroles`
(
`name`,
`createdAt`,
`updatedAt`
)
VALUES
( "Owner", now(), now()),
( "Customer", now(), now());

INSERT INTO `users`
(
`username`,
`password`,
`UserRoleId`,
`createdAt`,
`updatedAt`
)
VALUES
('Skybuilders','abcd',1, now(), now());

INSERT INTO `users`
(
`username`,
`password`,
`UserRoleId`,
`createdAt`,
`updatedAt`
)
VALUES
('johnsmith','abcd',2, now(), now());

INSERT INTO `users`
(
`username`,
`password`,
`UserRoleId`,
`createdAt`,
`updatedAt`
)
VALUES
('Realestate','abcd',1, now(), now());

INSERT INTO `users`
(
`username`,
`password`,
`UserRoleId`,
`createdAt`,
`updatedAt`
)
VALUES
('bobwayne','abcd',2, now(), now());

INSERT INTO `workspacelocations`
(
  `addr1`,
  `addr2`,
  `city`,
  `province`,
  `postal_code`,
  `full_address`,
  `UserId`,
  `createdAt`,
`updatedAt`
)
VALUES(
  '123 Dundas Street',
  '',
  'Mississauga',
  'Ontario',
  'A4N 3G1',
  '',
  1, now(), now()
);

INSERT INTO `workspacelocations`
(
  `addr1`,
  `addr2`,
  `city`,
  `province`,
  `postal_code`,
  `full_address`,
  `UserId`,
  `createdAt`,
`updatedAt`
)
VALUES(
  '701 Thomas Rd.',
  '',
  'Mississauga',
  'Ontario',
  'L2Y 4S1',
  '',
  1, now(), now()
);

INSERT INTO `workspacelocations`
(
  `addr1`,
  `addr2`,
  `city`,
  `province`,
  `postal_code`,
  `full_address`,
  `UserId`,
  `createdAt`,
`updatedAt`
)
VALUES(
  '67 Burnhamthorpe Rd',
  '',
  'Mississauga',
  'Ontario',
  'B2P 4R7',
  '',
  2, now(), now()
);

INSERT INTO `workspacelocations`
(
  `addr1`,
  `addr2`,
  `city`,
  `province`,
  `postal_code`,
  `full_address`,
  `UserId`,
  `createdAt`,
`updatedAt`
)
VALUES(
  '1033 Courtney Park',
  '',
  'Mississauga',
  'Ontario',
  'L1S 6M2',
  '',
  2, now(), now()
);

INSERT INTO features (
`name`,
`createdAt`,
`updatedAt`
)
VALUES ('Free Parking', now(), now()),
('Free Wifi', now(), now()),
('Playing Area', now(), now()),
('Lake View', now(), now()),
('Garden View', now(), now()),
('Projector', now(), now()),
('Computers', now(), now());

INSERT INTO workspacetypes (`name`,
`createdAt`,
`updatedAt`
)
VALUES('Room',now(), now());

INSERT INTO workspaces (
`name`,
`description`,
`dimension`,
`no_occupants`,
`floor`,
`rental_price`,
`isActive`,
`createdAt`,
`updatedAt`,
`WorkspaceTypeId`,
`WorkspaceLocationId`
)
VALUES ('Great Room'
, 'Private, lockable, and secure office space to accommodate teams of all sizes.',
'40ft x 50ft'
, 15
,'13th floor'
, 250.99
, 1
, now(), now()
,1,4); 

INSERT INTO workspaces (
`name`,
`description`,
`dimension`,
`no_occupants`,
`floor`,
`rental_price`,
`isActive`,
`createdAt`,
`updatedAt`,
`WorkspaceTypeId`,
`WorkspaceLocationId`
)
VALUES ('Downtown Coworking Space'
, 'This location features two floors of beautifully designed lounges, private offices, and conference rooms—plus tons of amenities.',
'500ft x 450ft'
, 50
,'7th floor'
, 690.99
, 1
, now(), now()
,1,4); 

INSERT INTO workspaces (
`name`,
`description`,
`dimension`,
`no_occupants`,
`floor`,
`rental_price`,
`isActive`,
`createdAt`,
`updatedAt`,
`WorkspaceTypeId`,
`WorkspaceLocationId`
)
VALUES ('Standard Private Office'
, 'Get down to business fast with move-in ready private offices to accommodate teams of all sizes. Includes desks and chairs.',
'500ft x 450ft'
, 100
,'20th floor'
, 1500.00
, 1
, now(), now()
,1,4); 

INSERT INTO workspaces (
`name`,
`description`,
`dimension`,
`no_occupants`,
`floor`,
`rental_price`,
`isActive`,
`createdAt`,
`updatedAt`,
`WorkspaceTypeId`,
`WorkspaceLocationId`
)
VALUES ('Office Suites'
, 'An upgraded private office with access to premium shared spaces and amenities. Includes your own meeting rooms, lounges, and executive offices dedicated to your team.',
'200ft x 350ft'
, 25
,'20th floor'
, 1500.00
, 1
, now(), now()
,1,4); 


INSERT INTO workspaces (
`name`,
`description`,
`dimension`,
`no_occupants`,
`floor`,
`rental_price`,
`isActive`,
`createdAt`,
`updatedAt`,
`WorkspaceTypeId`,
`WorkspaceLocationId`
)
VALUES ('Party Room'
, 'Planning a private event? Whether it''s a full-day conference, influencer workshop, or networking happy hour, you''ll impress your guests well before the welcome speech.',
'500ft x 350ft'
, 100
,'Main floor'
, 1500.00
, 1
, now(), now()
,1,4); 


INSERT INTO workspaces (
`name`,
`description`,
`dimension`,
`no_occupants`,
`floor`,
`rental_price`,
`isActive`,
`createdAt`,
`updatedAt`,
`WorkspaceTypeId`,
`WorkspaceLocationId`
)
VALUES ('Corporate Event Spaces'
, 'With a distinctly historic charm and an unforgettable spiral staircase, this event space is perfect for dinners, presentations, lectures, conferences, small fashion shows, and parties.',
'500ft x 350ft'
, 200
,'5th floor'
, 3500.00
, 1
, now(), now()
,1,4);

INSERT INTO WorkspaceFeatures (
`createdAt`,
`updatedAt`,
`FeatureId`,
`WorkspaceId`,
`status`
)
VALUES 
(now(), now(),1,1,true),
(now(), now(),2,1,false),
(now(), now(),4,1,true);

INSERT INTO WorkspaceFeatures (
`createdAt`,
`updatedAt`,
`FeatureId`,
`WorkspaceId`,
`status`

)
VALUES 
(now(), now(),1,2,false),
(now(), now(),2,2,false),
(now(), now(),6,2,true);

INSERT INTO WorkspaceFeatures (
`createdAt`,
`updatedAt`,
`FeatureId`,
`WorkspaceId`,
`status`
)
VALUES 
(now(), now(),1,3,true),
(now(), now(),2,3,true),
(now(), now(),6,3,true);

INSERT INTO WorkspaceFeatures (
`createdAt`,
`updatedAt`,
`FeatureId`,
`WorkspaceId`,
`status`
)
VALUES 
(now(), now(),1,4,false),
(now(), now(),2,4,true),
(now(), now(),3,4,true),
(now(), now(),6,4,true);

INSERT INTO WorkspaceFeatures (
`createdAt`,
`updatedAt`,
`FeatureId`,
`WorkspaceId`,
`status`
)
VALUES 
(now(), now(),1,5,false),
(now(), now(),2,5,true),
(now(), now(),5,5,true),
(now(), now(),7,5,true);

INSERT INTO WorkspaceFeatures (
`createdAt`,
`updatedAt`,
`FeatureId`,
`WorkspaceId`,
`status`
)
VALUES 
(now(), now(),1,6,false),
(now(), now(),2,6,false),
(now(), now(),4,6,false);

INSERT INTO workspaceavailabilities (
`date`,
`createdAt`,
`updatedAt`,
`WorkspaceId`
)
VALUES 
('2019-11-01',now(), now(),1),
('2019-11-02',now(), now(),1),
('2019-11-03',now(), now(),1),
('2019-11-04',now(), now(),1),
('2019-11-05',now(), now(),1),
('2019-11-06',now(), now(),1),
('2019-11-07',now(), now(),1),
('2019-11-08',now(), now(),1),
('2019-11-09',now(), now(),1),
('2019-11-10',now(), now(),1),
('2019-11-11',now(), now(),1),
('2019-11-12',now(), now(),1),
('2019-11-13',now(), now(),1),
('2019-11-14',now(), now(),1),
('2019-11-15',now(), now(),1),
('2019-11-16',now(), now(),1),
('2019-11-17',now(), now(),1),
('2019-11-18',now(), now(),1),
('2019-11-19',now(), now(),1),
('2019-11-20',now(), now(),1);


INSERT INTO workspaceavailabilities (
`date`,
`createdAt`,
`updatedAt`,
`WorkspaceId`
)
VALUES 
('2019-11-01',now(), now(),2),
('2019-11-02',now(), now(),2),
('2019-11-03',now(), now(),2),
('2019-11-04',now(), now(),2),
('2019-11-05',now(), now(),2),
('2019-11-06',now(), now(),2),
('2019-11-07',now(), now(),2),
('2019-11-08',now(), now(),2),
('2019-11-09',now(), now(),2),
('2019-11-10',now(), now(),2),
('2019-11-11',now(), now(),2),
('2019-11-12',now(), now(),2),
('2019-11-13',now(), now(),2),
('2019-11-14',now(), now(),2),
('2019-11-15',now(), now(),2),
('2019-11-16',now(), now(),2),
('2019-11-17',now(), now(),2),
('2019-11-18',now(), now(),2),
('2019-11-19',now(), now(),2),
('2019-11-20',now(), now(),2);

INSERT INTO workspaceavailabilities (
`date`,
`createdAt`,
`updatedAt`,
`WorkspaceId`
)
VALUES 
('2019-11-01',now(), now(),3),
('2019-11-02',now(), now(),3),
('2019-11-03',now(), now(),3),
('2019-11-04',now(), now(),3),
('2019-11-05',now(), now(),3),
('2019-11-06',now(), now(),3),
('2019-11-07',now(), now(),3),
('2019-11-08',now(), now(),3),
('2019-11-09',now(), now(),3),
('2019-11-10',now(), now(),3),
('2019-11-11',now(), now(),3),
('2019-11-12',now(), now(),3),
('2019-11-13',now(), now(),3),
('2019-11-14',now(), now(),3),
('2019-11-15',now(), now(),3),
('2019-11-16',now(), now(),3),
('2019-11-17',now(), now(),3),
('2019-11-18',now(), now(),3),
('2019-11-19',now(), now(),3),
('2019-11-20',now(), now(),3);

INSERT INTO workspaceavailabilities (
`date`,
`createdAt`,
`updatedAt`,
`WorkspaceId`
)
VALUES 
('2019-11-01',now(), now(),4),
('2019-11-02',now(), now(),4),
('2019-11-03',now(), now(),4),
('2019-11-04',now(), now(),4),
('2019-11-05',now(), now(),4),
('2019-11-06',now(), now(),4),
('2019-11-07',now(), now(),4),
('2019-11-08',now(), now(),4),
('2019-11-09',now(), now(),4),
('2019-11-10',now(), now(),4),
('2019-11-11',now(), now(),4),
('2019-11-12',now(), now(),4),
('2019-11-13',now(), now(),4),
('2019-11-14',now(), now(),4),
('2019-11-15',now(), now(),4),
('2019-11-16',now(), now(),4),
('2019-11-17',now(), now(),4),
('2019-11-18',now(), now(),4),
('2019-11-19',now(), now(),4),
('2019-11-20',now(), now(),4);

INSERT INTO workspaceavailabilities (
`date`,
`createdAt`,
`updatedAt`,
`WorkspaceId`
)
VALUES 
('2019-11-01',now(), now(),5),
('2019-11-02',now(), now(),5),
('2019-11-03',now(), now(),5),
('2019-11-04',now(), now(),5),
('2019-11-05',now(), now(),5),
('2019-11-06',now(), now(),5),
('2019-11-07',now(), now(),5),
('2019-11-08',now(), now(),5),
('2019-11-09',now(), now(),5),
('2019-11-10',now(), now(),5),
('2019-11-11',now(), now(),5),
('2019-11-12',now(), now(),5),
('2019-11-13',now(), now(),5),
('2019-11-14',now(), now(),5),
('2019-11-15',now(), now(),5),
('2019-11-16',now(), now(),5),
('2019-11-17',now(), now(),5),
('2019-11-18',now(), now(),5),
('2019-11-19',now(), now(),5),
('2019-11-20',now(), now(),5);

INSERT INTO workspaceavailabilities (
`date`,
`createdAt`,
`updatedAt`,
`WorkspaceId`
)
VALUES 
('2019-11-01',now(), now(),6),
('2019-11-02',now(), now(),6),
('2019-11-03',now(), now(),6),
('2019-11-04',now(), now(),6),
('2019-11-05',now(), now(),6),
('2019-11-06',now(), now(),6),
('2019-11-07',now(), now(),6),
('2019-11-08',now(), now(),6),
('2019-11-09',now(), now(),6),
('2019-11-10',now(), now(),6),
('2019-11-11',now(), now(),6),
('2019-11-12',now(), now(),6),
('2019-11-13',now(), now(),6),
('2019-11-14',now(), now(),6),
('2019-11-15',now(), now(),6),
('2019-11-16',now(), now(),6),
('2019-11-17',now(), now(),6),
('2019-11-18',now(), now(),6),
('2019-11-19',now(), now(),6),
('2019-11-20',now(), now(),6);

INSERT INTO `workspacepics` (
`image_path`,
`WorkspaceId`,
`createdAt`,
`updatedAt`
)
VALUES(
'https://cdn.wework.com/6vy33zo2mgy3/Ce1Us3g6Moo6Ykq6SwKee/318e3d71f5c1210c922b881561868995/G5b7AT6k.jpeg?auto=compress&faces=false&w=550&fit=crop&dpr=1.25&h=',
1, now(), now());

INSERT INTO `workspacepics` (
`image_path`,
`WorkspaceId`,
`createdAt`,
`updatedAt`
)
VALUES(
'https://cdn.wework.com/6vy33zo2mgy3/24JPX2TU76YyGsOeeYQuM8/e740d7005cd1d496477853f02c087394/HQ-Cover.jpg?auto=compress&faces=false&w=550&fit=crop&dpr=1.25&h=',
2, now(), now());

INSERT INTO `workspacepics` (
`image_path`,
`WorkspaceId`,
`createdAt`,
`updatedAt`
)
VALUES(
'https://cdn.wework.com/6vy33zo2mgy3/606CEz8LuwEMSgqYWYSayU/945c65a58d8e039b19fd6a8a52efd00a/SPO-3.jpg?auto=compress&faces=false&w=500&fit=fill&dpr=1.25&h=',
3, now(), now());

INSERT INTO `workspacepics` (
`image_path`,
`WorkspaceId`,
`createdAt`,
`updatedAt`
)
VALUES(
'https://cdn.wework.com/6vy33zo2mgy3/4nhei78KYM6Gq6ImcqkIw8/978ab3a8230b129004b716b9538fa128/20180828-WeWork-Cityplaza-Three---Common-Areas---Wide-4.jpg?auto=compress&faces=false&w=500&fit=fill&dpr=1.25&h=',
3, now(), now());

INSERT INTO `workspacepics` (
`image_path`,
`WorkspaceId`,
`createdAt`,
`updatedAt`
)
VALUES(
'//cdn.wework.com/6vy33zo2mgy3/3d3PboH51YQMmO0MWGWQcQ/97db5d2969096f04d3c53a6a245408fd/20181004_London_Hammersmith-Brook-Green_Common-Area_02-_1_.jpg?auto=compress&faces=false&w=600&fit=crop&dpr=1.25&h=',
4, now(), now());

INSERT INTO `workspacepics` (
`image_path`,
`WorkspaceId`,
`createdAt`,
`updatedAt`
)
VALUES(
'https://ctfassets.imgix.net/6vy33zo2mgy3/6abfbTgCnC2MU2kYQ0Sia8/3dd71891eca35eaa88d80bcab3b8f4ef/Screen_Shot_2018-04-04_at_12.15.47_PM.png?auto=format%20compress&fit=crop&q=50&w=1200&h=675 1200w',
5, now(), now());

INSERT INTO `workspacepics` (
`image_path`,
`WorkspaceId`,
`createdAt`,
`updatedAt`
)
VALUES(
'https://ctfassets.imgix.net/6vy33zo2mgy3/4oFMBGbF3OG42iyOQMcSAW/c99ebea2c317927b8f288a30295309f8/20180131_Bryant_Park_Event_Space-1.jpg?auto=format%20compress&amp;fit=crop&amp;q=50&amp;w=600&amp;h=338 600w',
6, now(), now());

INSERT INTO `bookings`
(
`start_date`,`end_date`,`rental_price`,`createdAt`,`updatedAt`,`UserId`,`WorkspaceId`
)
VALUES(
'2019-11-01','2019-11-07',250.00,now(), now(),2,1);

INSERT INTO `bookings`
(
`start_date`,`end_date`,`rental_price`,`createdAt`,`updatedAt`,`UserId`,`WorkspaceId`
)
VALUES(
'2019-11-01','2019-11-07',250.00,now(), now(),2,2);

INSERT INTO `bookings`
(
`start_date`,`end_date`,`rental_price`,`createdAt`,`updatedAt`,`UserId`,`WorkspaceId`
)
VALUES(
'2019-11-01','2019-11-07',250.00,now(), now(),2,3);

INSERT INTO `bookings`
(
`start_date`,`end_date`,`rental_price`,`createdAt`,`updatedAt`,`UserId`,`WorkspaceId`
)
VALUES(
'2019-11-01','2019-11-07',250.00,now(), now(),2,4);