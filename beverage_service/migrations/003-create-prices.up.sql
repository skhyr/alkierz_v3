CREATE TABLE prices (
    id UUID PRIMARY KEY,
    value FLOAT NOT NULL,
    shop_id UUID REFERENCES shops (id) NOT NULL,
    beverage_id UUID REFERENCES beverages (id) NOT NULL
);
