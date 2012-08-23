create table user_info
(
    user_id     bigint                                             not null
        constraint user_info_pk
            primary key,
    user_name   text                                               not null
        constraint user_info_k2
            unique,
    nick_name   text                     default ''::text          not null,
    password    text                     default ''::text          not null,
    create_time timestamp with time zone default CURRENT_TIMESTAMP not null,
    create_user bigint                                             not null,
    update_time timestamp with time zone default CURRENT_TIMESTAMP not null,
    update_user bigint                                             not null,
    type        smallint                 default 0                 not null,
    status      smallint                 default 0                 not null
);

alter table user_info
    owner to postgres;

create table category_info
(
    category_id bigint                                             not null
        constraint category_info_pk
            primary key,
    link        text                                               not null
        constraint category_info_k2
            unique,
    name        text                     default ''::text          not null,
    description text                     default ''::text          not null,
    color       text                     default '#FFFFFF'::text   not null,
    create_time timestamp with time zone default CURRENT_TIMESTAMP not null,
    create_user bigint                   default 0                 not null,
    update_time timestamp with time zone default CURRENT_TIMESTAMP not null,
    update_user bigint                                             not null,
    type        smallint                 default 0                 not null,
    status      smallint                 default 0                 not null,
    topics      bigint[]                 default '{}'::bigint[]    not null
);

alter table category_info
    owner to postgres;

create table topic_info
(
    topic_id    bigint                                             not null
        constraint topic_info_pk
            primary key,
    link        text                                               not null
        constraint topic_info_pk_2
            unique,
    name        text,
    description text                     default ''::text          not null,
    create_time timestamp with time zone default CURRENT_TIMESTAMP not null,
    create_user bigint                                             not null,
    update_time timestamp with time zone default CURRENT_TIMESTAMP not null,
    update_user bigint                                             not null,
    type        smallint                 default 0                 not null,
    status      smallint                 default 0
);

alter table topic_info
    owner to postgres;

create function user_create("@user_id" bigint, "@user_name" text, "@nick_name" text, "@password" text) returns void
    language plpgsql
as
$$
BEGIN
    INSERT INTO user_info
    (
        user_id, user_name, nick_name, password
    )
    VALUES
        (
            "@user_id", "@user_name", "@nick_name", "@password"
        );
END;
$$;

alter function user_create(bigint, text, text, text) owner to postgres;

create function category_delete("@category_id" bigint) returns void
    language plpgsql
as
$$
BEGIN
    DELETE FROM category_info WHERE category_id = "@category_id";
END;
$$;

alter function category_delete(bigint) owner to postgres;

create function category_get_by_id("@category_id" bigint) returns SETOF category_info
    language plpgsql
as
$$
BEGIN
    RETURN QUERY SELECT * FROM category_info WHERE category_id = "@category_id";
END;
$$;

alter function category_get_by_id(bigint) owner to postgres;

create function category_list() returns SETOF category_info
    language plpgsql
as
$$
BEGIN
    RETURN QUERY SELECT * FROM category_info ORDER BY create_time DESC;
END;
$$;

alter function category_list() owner to postgres;

create function category_create("@category_id" bigint, "@link" text, "@name" text, "@description" text, "@color" text, "@who" bigint) returns void
    language plpgsql
as
$$
BEGIN
    INSERT INTO category_info
    (
        category_id, link, name, description, color, create_user, update_user
    )
    VALUES
        (
            "@category_id", "@link", "@name", "@description", "@color", "@who", "@who"
        );
END;
$$;

alter function category_create(bigint, text, text, text, text, bigint) owner to postgres;

create function category_update("@category_id" bigint, "@name" text, "@description" text, "@color" text, "@who" bigint) returns void
    language plpgsql
as
$$
BEGIN
    UPDATE category_info
    SET
        name        = coalesce("@name", name),
        description = coalesce("@description", description),
        color       = coalesce("@color", color),
        update_time = current_timestamp,
        update_user = "@who"
    WHERE TRUE
      AND category_id = "@category_id";
END;
$$;

alter function category_update(bigint, text, text, text, bigint) owner to postgres;

