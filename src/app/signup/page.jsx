'use client';

import Footer from "@/app/footer/footer.jsx";
import Signin from "../signin/page.jsx";

//imports of authentication
import { useSession} from 'next-auth/react';
import { redirect } from 'next/navigation';

export default function Home() {
    const session = useSession({
        required: true,
        onUnauthenticated() {
          redirect('/signin');
        },
      });
  return (
<div>
    <Signin/>
    <Footer/>
</div>
    
  );
}

Home.requiereAuth = true;
