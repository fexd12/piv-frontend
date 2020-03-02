CREATE TABLE public.users
(
    id integer NOT NULL,
    name character(200),
    created_at date,
    update_at date,
    PRIMARY KEY (id)
);

ALTER TABLE public.users
    OWNER to postgres;


CREATE TABLE public.tags
(
    id integer NOT NULL,
    id_users integer NOT NULL,
    tag character(8) COLLATE pg_catalog."default" NOT NULL,
    state integer,
    created_at date,
    update_at date,
    CONSTRAINT tags_pkey PRIMARY KEY (id)
        INCLUDE(id),
    CONSTRAINT id_users FOREIGN KEY (id)
        REFERENCES public.users (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
        NOT VALID
)