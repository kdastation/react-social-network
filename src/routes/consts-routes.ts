import React from "react";

export interface IRoutes {
  path: string;
  component: React.ComponentType;
  exact?: boolean;
}

export enum RoutesNames {
  LOGIN = "/login",
  REGISTRATION = "/registration",
  PROFILE_PAGE = "/profile/",
  PROFILE = "/profile/:userName",
  HOME = "/",
  PAGE_TO_CREATE_A_NEW_POST = "/post/new",
  POST_PAGE = "/post/:idPost",
  POST_PAGE_WITHOUT_PARAM = "/post/",
}

export interface ParamProfilePage {
  userName: string;
}

export interface ParamPostPage {
  idPost: string;
}
