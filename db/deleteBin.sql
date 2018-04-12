UPDATE bins
SET product_name = NULL, price = NULL
WHERE shelfid = $1 AND bin = $2