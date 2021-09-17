/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export interface paths {
  "/": {
    get: {
      responses: {
        /** OK */
        200: unknown;
      };
    };
  };
  "/auth_users": {
    get: {
      parameters: {
        query: {
          id?: parameters["rowFilter.auth_users.id"];
          email?: parameters["rowFilter.auth_users.email"];
          /** Filtering Columns */
          select?: parameters["select"];
          /** Ordering */
          order?: parameters["order"];
          /** Limiting and Pagination */
          offset?: parameters["offset"];
          /** Limiting and Pagination */
          limit?: parameters["limit"];
        };
        header: {
          /** Limiting and Pagination */
          Range?: parameters["range"];
          /** Limiting and Pagination */
          "Range-Unit"?: parameters["rangeUnit"];
          /** Preference */
          Prefer?: parameters["preferCount"];
        };
      };
      responses: {
        /** OK */
        200: {
          schema: definitions["auth_users"][];
        };
        /** Partial Content */
        206: unknown;
      };
    };
    post: {
      parameters: {
        body: {
          /** auth_users */
          auth_users?: definitions["auth_users"];
        };
        query: {
          /** Filtering Columns */
          select?: parameters["select"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** Created */
        201: unknown;
      };
    };
    delete: {
      parameters: {
        query: {
          id?: parameters["rowFilter.auth_users.id"];
          email?: parameters["rowFilter.auth_users.email"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
    patch: {
      parameters: {
        query: {
          id?: parameters["rowFilter.auth_users.id"];
          email?: parameters["rowFilter.auth_users.email"];
        };
        body: {
          /** auth_users */
          auth_users?: definitions["auth_users"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
  };
  "/location": {
    get: {
      parameters: {
        query: {
          id?: parameters["rowFilter.location.id"];
          name?: parameters["rowFilter.location.name"];
          address?: parameters["rowFilter.location.address"];
          is_online?: parameters["rowFilter.location.is_online"];
          lat?: parameters["rowFilter.location.lat"];
          long?: parameters["rowFilter.location.long"];
          created_by?: parameters["rowFilter.location.created_by"];
          owner?: parameters["rowFilter.location.owner"];
          is_public?: parameters["rowFilter.location.is_public"];
          state?: parameters["rowFilter.location.state"];
          state_changed_by?: parameters["rowFilter.location.state_changed_by"];
          /** Filtering Columns */
          select?: parameters["select"];
          /** Ordering */
          order?: parameters["order"];
          /** Limiting and Pagination */
          offset?: parameters["offset"];
          /** Limiting and Pagination */
          limit?: parameters["limit"];
        };
        header: {
          /** Limiting and Pagination */
          Range?: parameters["range"];
          /** Limiting and Pagination */
          "Range-Unit"?: parameters["rangeUnit"];
          /** Preference */
          Prefer?: parameters["preferCount"];
        };
      };
      responses: {
        /** OK */
        200: {
          schema: definitions["location"][];
        };
        /** Partial Content */
        206: unknown;
      };
    };
    post: {
      parameters: {
        body: {
          /** location */
          location?: definitions["location"];
        };
        query: {
          /** Filtering Columns */
          select?: parameters["select"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** Created */
        201: unknown;
      };
    };
    delete: {
      parameters: {
        query: {
          id?: parameters["rowFilter.location.id"];
          name?: parameters["rowFilter.location.name"];
          address?: parameters["rowFilter.location.address"];
          is_online?: parameters["rowFilter.location.is_online"];
          lat?: parameters["rowFilter.location.lat"];
          long?: parameters["rowFilter.location.long"];
          created_by?: parameters["rowFilter.location.created_by"];
          owner?: parameters["rowFilter.location.owner"];
          is_public?: parameters["rowFilter.location.is_public"];
          state?: parameters["rowFilter.location.state"];
          state_changed_by?: parameters["rowFilter.location.state_changed_by"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
    patch: {
      parameters: {
        query: {
          id?: parameters["rowFilter.location.id"];
          name?: parameters["rowFilter.location.name"];
          address?: parameters["rowFilter.location.address"];
          is_online?: parameters["rowFilter.location.is_online"];
          lat?: parameters["rowFilter.location.lat"];
          long?: parameters["rowFilter.location.long"];
          created_by?: parameters["rowFilter.location.created_by"];
          owner?: parameters["rowFilter.location.owner"];
          is_public?: parameters["rowFilter.location.is_public"];
          state?: parameters["rowFilter.location.state"];
          state_changed_by?: parameters["rowFilter.location.state_changed_by"];
        };
        body: {
          /** location */
          location?: definitions["location"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
  };
  "/postgres_log_text": {
    get: {
      parameters: {
        query: {
          log_entry?: parameters["rowFilter.postgres_log_text.log_entry"];
          /** Filtering Columns */
          select?: parameters["select"];
          /** Ordering */
          order?: parameters["order"];
          /** Limiting and Pagination */
          offset?: parameters["offset"];
          /** Limiting and Pagination */
          limit?: parameters["limit"];
        };
        header: {
          /** Limiting and Pagination */
          Range?: parameters["range"];
          /** Limiting and Pagination */
          "Range-Unit"?: parameters["rangeUnit"];
          /** Preference */
          Prefer?: parameters["preferCount"];
        };
      };
      responses: {
        /** OK */
        200: {
          schema: definitions["postgres_log_text"][];
        };
        /** Partial Content */
        206: unknown;
      };
    };
  };
  "/session": {
    get: {
      parameters: {
        query: {
          id?: parameters["rowFilter.session.id"];
          user_id?: parameters["rowFilter.session.user_id"];
          location_id?: parameters["rowFilter.session.location_id"];
          start_time?: parameters["rowFilter.session.start_time"];
          end_time?: parameters["rowFilter.session.end_time"];
          /** Filtering Columns */
          select?: parameters["select"];
          /** Ordering */
          order?: parameters["order"];
          /** Limiting and Pagination */
          offset?: parameters["offset"];
          /** Limiting and Pagination */
          limit?: parameters["limit"];
        };
        header: {
          /** Limiting and Pagination */
          Range?: parameters["range"];
          /** Limiting and Pagination */
          "Range-Unit"?: parameters["rangeUnit"];
          /** Preference */
          Prefer?: parameters["preferCount"];
        };
      };
      responses: {
        /** OK */
        200: {
          schema: definitions["session"][];
        };
        /** Partial Content */
        206: unknown;
      };
    };
    post: {
      parameters: {
        body: {
          /** session */
          session?: definitions["session"];
        };
        query: {
          /** Filtering Columns */
          select?: parameters["select"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** Created */
        201: unknown;
      };
    };
    delete: {
      parameters: {
        query: {
          id?: parameters["rowFilter.session.id"];
          user_id?: parameters["rowFilter.session.user_id"];
          location_id?: parameters["rowFilter.session.location_id"];
          start_time?: parameters["rowFilter.session.start_time"];
          end_time?: parameters["rowFilter.session.end_time"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
    patch: {
      parameters: {
        query: {
          id?: parameters["rowFilter.session.id"];
          user_id?: parameters["rowFilter.session.user_id"];
          location_id?: parameters["rowFilter.session.location_id"];
          start_time?: parameters["rowFilter.session.start_time"];
          end_time?: parameters["rowFilter.session.end_time"];
        };
        body: {
          /** session */
          session?: definitions["session"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
  };
  "/session_update": {
    get: {
      parameters: {
        query: {
          id?: parameters["rowFilter.session_update.id"];
          session_id?: parameters["rowFilter.session_update.session_id"];
          update_id?: parameters["rowFilter.session_update.update_id"];
          text?: parameters["rowFilter.session_update.text"];
          /** Filtering Columns */
          select?: parameters["select"];
          /** Ordering */
          order?: parameters["order"];
          /** Limiting and Pagination */
          offset?: parameters["offset"];
          /** Limiting and Pagination */
          limit?: parameters["limit"];
        };
        header: {
          /** Limiting and Pagination */
          Range?: parameters["range"];
          /** Limiting and Pagination */
          "Range-Unit"?: parameters["rangeUnit"];
          /** Preference */
          Prefer?: parameters["preferCount"];
        };
      };
      responses: {
        /** OK */
        200: {
          schema: definitions["session_update"][];
        };
        /** Partial Content */
        206: unknown;
      };
    };
    post: {
      parameters: {
        body: {
          /** session_update */
          session_update?: definitions["session_update"];
        };
        query: {
          /** Filtering Columns */
          select?: parameters["select"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** Created */
        201: unknown;
      };
    };
    delete: {
      parameters: {
        query: {
          id?: parameters["rowFilter.session_update.id"];
          session_id?: parameters["rowFilter.session_update.session_id"];
          update_id?: parameters["rowFilter.session_update.update_id"];
          text?: parameters["rowFilter.session_update.text"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
    patch: {
      parameters: {
        query: {
          id?: parameters["rowFilter.session_update.id"];
          session_id?: parameters["rowFilter.session_update.session_id"];
          update_id?: parameters["rowFilter.session_update.update_id"];
          text?: parameters["rowFilter.session_update.text"];
        };
        body: {
          /** session_update */
          session_update?: definitions["session_update"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
  };
  "/update": {
    get: {
      parameters: {
        query: {
          id?: parameters["rowFilter.update.id"];
          title?: parameters["rowFilter.update.title"];
          /** Filtering Columns */
          select?: parameters["select"];
          /** Ordering */
          order?: parameters["order"];
          /** Limiting and Pagination */
          offset?: parameters["offset"];
          /** Limiting and Pagination */
          limit?: parameters["limit"];
        };
        header: {
          /** Limiting and Pagination */
          Range?: parameters["range"];
          /** Limiting and Pagination */
          "Range-Unit"?: parameters["rangeUnit"];
          /** Preference */
          Prefer?: parameters["preferCount"];
        };
      };
      responses: {
        /** OK */
        200: {
          schema: definitions["update"][];
        };
        /** Partial Content */
        206: unknown;
      };
    };
    post: {
      parameters: {
        body: {
          /** update */
          update?: definitions["update"];
        };
        query: {
          /** Filtering Columns */
          select?: parameters["select"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** Created */
        201: unknown;
      };
    };
    delete: {
      parameters: {
        query: {
          id?: parameters["rowFilter.update.id"];
          title?: parameters["rowFilter.update.title"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
    patch: {
      parameters: {
        query: {
          id?: parameters["rowFilter.update.id"];
          title?: parameters["rowFilter.update.title"];
        };
        body: {
          /** update */
          update?: definitions["update"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
  };
  "/user_roles": {
    get: {
      parameters: {
        query: {
          id?: parameters["rowFilter.user_roles.id"];
          role?: parameters["rowFilter.user_roles.role"];
          /** Filtering Columns */
          select?: parameters["select"];
          /** Ordering */
          order?: parameters["order"];
          /** Limiting and Pagination */
          offset?: parameters["offset"];
          /** Limiting and Pagination */
          limit?: parameters["limit"];
        };
        header: {
          /** Limiting and Pagination */
          Range?: parameters["range"];
          /** Limiting and Pagination */
          "Range-Unit"?: parameters["rangeUnit"];
          /** Preference */
          Prefer?: parameters["preferCount"];
        };
      };
      responses: {
        /** OK */
        200: {
          schema: definitions["user_roles"][];
        };
        /** Partial Content */
        206: unknown;
      };
    };
    post: {
      parameters: {
        body: {
          /** user_roles */
          user_roles?: definitions["user_roles"];
        };
        query: {
          /** Filtering Columns */
          select?: parameters["select"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** Created */
        201: unknown;
      };
    };
    delete: {
      parameters: {
        query: {
          id?: parameters["rowFilter.user_roles.id"];
          role?: parameters["rowFilter.user_roles.role"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
    patch: {
      parameters: {
        query: {
          id?: parameters["rowFilter.user_roles.id"];
          role?: parameters["rowFilter.user_roles.role"];
        };
        body: {
          /** user_roles */
          user_roles?: definitions["user_roles"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
  };
  "/rpc/file_fdw_validator": {
    post: {
      parameters: {
        body: {
          args: {
            "": string;
          };
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferParams"];
        };
      };
      responses: {
        /** OK */
        200: unknown;
      };
    };
  };
  "/rpc/file_fdw_handler": {
    post: {
      parameters: {
        body: {
          args: { [key: string]: unknown };
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferParams"];
        };
      };
      responses: {
        /** OK */
        200: unknown;
      };
    };
  };
  "/rpc/get_user_role": {
    post: {
      parameters: {
        body: {
          args: {
            i: string;
          };
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferParams"];
        };
      };
      responses: {
        /** OK */
        200: unknown;
      };
    };
  };
  "/rpc/add_default_user": {
    post: {
      parameters: {
        body: {
          args: { [key: string]: unknown };
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferParams"];
        };
      };
      responses: {
        /** OK */
        200: unknown;
      };
    };
  };
}

export interface definitions {
  auth_users: {
    /**
     * Note:
     * This is a Primary Key.<pk/>
     */
    id?: string;
    email?: string;
  };
  location: {
    /**
     * Note:
     * This is a Primary Key.<pk/>
     */
    id: string;
    name: string;
    address?: string;
    is_online: boolean;
    lat?: number;
    long?: number;
    /**
     * Note:
     * This is a Foreign Key to `auth_users.id`.<fk table='auth_users' column='id'/>
     */
    created_by: string;
    /**
     * Note:
     * This is a Foreign Key to `auth_users.id`.<fk table='auth_users' column='id'/>
     */
    owner: string;
    is_public: boolean;
    state: "approved" | "denied" | "pending";
    /**
     * Note:
     * This is a Foreign Key to `auth_users.id`.<fk table='auth_users' column='id'/>
     */
    state_changed_by?: string;
  };
  postgres_log_text: {
    log_entry?: string;
  };
  session: {
    /**
     * Note:
     * This is a Primary Key.<pk/>
     */
    id: string;
    /**
     * Note:
     * This is a Foreign Key to `auth_users.id`.<fk table='auth_users' column='id'/>
     */
    user_id: string;
    /**
     * Note:
     * This is a Foreign Key to `location.id`.<fk table='location' column='id'/>
     */
    location_id?: string;
    start_time?: string;
    end_time?: string;
  };
  session_update: {
    /**
     * Note:
     * This is a Primary Key.<pk/>
     */
    id: string;
    /**
     * Note:
     * This is a Foreign Key to `session.id`.<fk table='session' column='id'/>
     */
    session_id: string;
    /**
     * Note:
     * This is a Foreign Key to `update.id`.<fk table='update' column='id'/>
     */
    update_id: string;
    text?: string;
  };
  update: {
    /**
     * Note:
     * This is a Primary Key.<pk/>
     */
    id: string;
    title: string;
  };
  user_roles: {
    /**
     * Note:
     * This is a Primary Key.<pk/>
     * This is a Foreign Key to `auth_users.id`.<fk table='auth_users' column='id'/>
     */
    id: string;
    role: "user" | "approver" | "admin";
  };
}

export interface parameters {
  /** Preference */
  preferParams: "params=single-object";
  /** Preference */
  preferReturn: "return=representation" | "return=minimal" | "return=none";
  /** Preference */
  preferCount: "count=none";
  /** Filtering Columns */
  select: string;
  /** On Conflict */
  on_conflict: string;
  /** Ordering */
  order: string;
  /** Limiting and Pagination */
  range: string;
  /** Limiting and Pagination */
  rangeUnit: string;
  /** Limiting and Pagination */
  offset: string;
  /** Limiting and Pagination */
  limit: string;
  /** auth_users */
  "body.auth_users": definitions["auth_users"];
  "rowFilter.auth_users.id": string;
  "rowFilter.auth_users.email": string;
  /** location */
  "body.location": definitions["location"];
  "rowFilter.location.id": string;
  "rowFilter.location.name": string;
  "rowFilter.location.address": string;
  "rowFilter.location.is_online": string;
  "rowFilter.location.lat": string;
  "rowFilter.location.long": string;
  "rowFilter.location.created_by": string;
  "rowFilter.location.owner": string;
  "rowFilter.location.is_public": string;
  "rowFilter.location.state": string;
  "rowFilter.location.state_changed_by": string;
  /** postgres_log_text */
  "body.postgres_log_text": definitions["postgres_log_text"];
  "rowFilter.postgres_log_text.log_entry": string;
  /** session */
  "body.session": definitions["session"];
  "rowFilter.session.id": string;
  "rowFilter.session.user_id": string;
  "rowFilter.session.location_id": string;
  "rowFilter.session.start_time": string;
  "rowFilter.session.end_time": string;
  /** session_update */
  "body.session_update": definitions["session_update"];
  "rowFilter.session_update.id": string;
  "rowFilter.session_update.session_id": string;
  "rowFilter.session_update.update_id": string;
  "rowFilter.session_update.text": string;
  /** update */
  "body.update": definitions["update"];
  "rowFilter.update.id": string;
  "rowFilter.update.title": string;
  /** user_roles */
  "body.user_roles": definitions["user_roles"];
  "rowFilter.user_roles.id": string;
  "rowFilter.user_roles.role": string;
}

export interface operations {}

export interface external {}
