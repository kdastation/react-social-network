import React from "react";

export interface IRoutes{
    path:string,
    component: React.ComponentType,
    exact?: boolean
}

export enum RoutesNames{
    LOGIN = '/login',
    REGISTRATION = '/registration',
    PROFILE = '/profile/:userName',
    HOME = '/'
}

export interface ParamProfilePage{
    userName:string
}