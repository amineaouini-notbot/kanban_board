CREATE DATABASE kanban_board;

USE kanban_board;

CREATE TABLE boards (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    made_at DATETIME NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE lists (
    id INT NOT NULL AUTO_INCREMENT,
    boards_id INT NOT NULL,
    name VARCHAR(255) NOT NULL,
    position INT(11) NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (boards_id) REFERENCES boards(id)
);

CREATE TABLE notes (
    id INT NOT NULL AUTO_INCREMENT,
    list_id INT NOT NULL,
    content TEXT NOT NULL,
    position INT(20) NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (list_id) REFERENCES lists(id)
);