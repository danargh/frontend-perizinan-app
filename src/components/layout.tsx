import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

// export function MainLayout(): JSX.Element{
//    return (

//    )
// }

export function BaseLayout(): JSX.Element {
   return (
      <>
         <h2>Ini base layout</h2>
         <Suspense>
            <Outlet />
         </Suspense>
      </>
   );
}
