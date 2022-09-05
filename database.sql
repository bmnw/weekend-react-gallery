-- TABLE "gallery"

CREATE TABLE "gallery" (
	"id" serial PRIMARY KEY,
	"path" varchar(250) NOT NULL,
	"description" varchar(100) NOT NULL,
	"likes" integer DEFAULT 0
);

-- "gallery" images

INSERT INTO "gallery" ("path", "description", "likes")
VALUES  ('images/bike_ride.jpg', 'Selfie mid bike ride in front of the wall of a fort.', 0),
		('images/cake.jpg', 'Layered chocolate cake covered with dark chocolate ganache and white chocolate chips.', 0),
        ('images/edamame.jpg', 'A bowl of freshly harvested and cooked edamame.', 0),
		('images/enjoying_coffee.jpg', 'Enjoying a flat white in the morning at a cafe.', 0),
		('images/fjord_tour.jpg', 'Smiling on a boat while touring the Milford Sound in New Zealand.', 0),
		('images/mtb_view.jpg', 'A view of restored prairie while on a moutain bike ride.', 0),
		('images/cat_stroller.jpg', 'Walking Waffle through the neighborhood in her mesh chariot.', 0),
		('images/queenstown_nz.jpg', 'A view of Lake Wakatipu and part of the Queenstown coast on the south island of New Zealand.', 0);
