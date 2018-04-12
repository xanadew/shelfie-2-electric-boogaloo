CREATE TABLE IF NOT EXISTS bins (
    id SERIAL NOT NULL,
    shelfid VARCHAR(1) NOT NULL,
    bin INTEGER NOT NULL,
    product_name TEXT,
    price NUMERIC,
    image TEXT
);

INSERT INTO bins
(shelfid, bin, product_name)
VALUES
('A', 1, NULL),
('A', 2, NULL),
('A', 3, NULL),
('A', 4, NULL),
('A', 5, NULL),
('B', 1, NULL),
('B', 2, NULL),
('B', 3, NULL),
('B', 4, NULL),
('B', 5, NULL),
('C', 1, NULL),
('C', 2, NULL),
('C', 3, NULL),
('C', 4, NULL),
('C', 5, NULL),
('D', 1, NULL),
('D', 2, NULL),
('D', 3, NULL),
('D', 4, NULL),
('D', 5, NULL);