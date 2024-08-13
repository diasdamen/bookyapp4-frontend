'use client';

import Link from 'next/link';

import { redirect, usePathname } from 'next/navigation';

const links = [
  {
    name: 'Home',
    path: '/',
  },
  {
    name: 'About',
    path: '#about',
  },
  {
    name: 'Rooms',
    path: '#rooms',
  },
  {
    name: 'Reviews',
    path: '#reviews',
  },
  {
    name: 'Contacts',
    path: '#contacts',
  },
];

const Nav = ({ isUserAuthenticated } : { isUserAuthenticated: boolean }) => {
  const pathname = usePathname()
  return (
    <nav>
      <ul className='flex flex-col lg:flex-row gap-6'>
        {links.map((link, index)=> {
          return (
            <li key={index}>
              <Link 
                href={link.path} 
                className='font-bold text-[13px] uppercase tracking-[3px] hover:text-accent-hover transition-all'
              >
                {link.name}
              </Link>
            </li>
          );
        })}
      </ul>
      {/* redirecting to homepage if user is not authenticated and pathname is "/dashboard" */}
      {!isUserAuthenticated && pathname === '/dashboard' && redirect('/')}
    </nav>
  );
};

export default Nav;