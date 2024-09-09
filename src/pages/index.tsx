import { BaseLayout, RootError } from '@/components';
import React from 'react';
import { createElement } from 'react';
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';

// application routes
export const router = createBrowserRouter([
   {
      path: '',
      element: <BaseLayout />,
      errorElement: <RootError />,
   },
]);
