/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as TimelineImport } from './routes/timeline'
import { Route as AstronautsImport } from './routes/astronauts'
import { Route as IndexImport } from './routes/index'

// Create/Update Routes

const TimelineRoute = TimelineImport.update({
  id: '/timeline',
  path: '/timeline',
  getParentRoute: () => rootRoute,
} as any)

const AstronautsRoute = AstronautsImport.update({
  id: '/astronauts',
  path: '/astronauts',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/astronauts': {
      id: '/astronauts'
      path: '/astronauts'
      fullPath: '/astronauts'
      preLoaderRoute: typeof AstronautsImport
      parentRoute: typeof rootRoute
    }
    '/timeline': {
      id: '/timeline'
      path: '/timeline'
      fullPath: '/timeline'
      preLoaderRoute: typeof TimelineImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/astronauts': typeof AstronautsRoute
  '/timeline': typeof TimelineRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/astronauts': typeof AstronautsRoute
  '/timeline': typeof TimelineRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/astronauts': typeof AstronautsRoute
  '/timeline': typeof TimelineRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '/' | '/astronauts' | '/timeline'
  fileRoutesByTo: FileRoutesByTo
  to: '/' | '/astronauts' | '/timeline'
  id: '__root__' | '/' | '/astronauts' | '/timeline'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  AstronautsRoute: typeof AstronautsRoute
  TimelineRoute: typeof TimelineRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  AstronautsRoute: AstronautsRoute,
  TimelineRoute: TimelineRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/astronauts",
        "/timeline"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/astronauts": {
      "filePath": "astronauts.tsx"
    },
    "/timeline": {
      "filePath": "timeline.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
